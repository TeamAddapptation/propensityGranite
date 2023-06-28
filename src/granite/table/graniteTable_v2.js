function graniteTable_v2(jsonBlock) {
	/*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
	const id = jsonBlock.id;
	const o = jsonBlock.options;
	const r = jsonBlock.records;
	const cssId = "#" + id;
	let columnCount = 0;
	const graniteDiv = document.getElementById(id);
	/*---------------------------------------------
    Empty the Div
    ---------------------------------------------*/
	graniteDiv.innerHTML = "";
	/*---------------------------------------------
  CSS
  ---------------------------------------------*/
	var tableCss = document.createElement("style");
	tableCss.id = "g__css_" + id;
	tableCss.innerHTML = `
  /* ----------
  Utility
  ---------- */
  ${cssId} .g__text-left{
    text-align: left;
  }
  ${cssId} .g__text-center{
    text-align: center;
  }
  ${cssId} .g__text-right{
    text-align: right;
  }
  @media (max-width: 767.98px) {
    ${cssId} table {
      width: 100% !important;
      white-space: initial;
    }
  }
    `;
	let granite_css = document.getElementById("g__css_" + id);
	if (granite_css) {
		granite_css.remove();
	}
	document.head.appendChild(tableCss);
	/*---------------------------------------------
    Main Build
    ---------------------------------------------*/

	// Main table container
	let table = document.createElement("table");
	table.id = "g__" + id;
	graniteDiv.appendChild(table);

	// Table body
	const tbody = document.createElement("tbody");
	table.appendChild(tbody);

	// Loop Through the table rows
	r.forEach((row, index) => {
		//Loop through the cells in each row

		switch (row.type) {
			case "header":
				const tHead = table.createTHead();
				const tHeadRow = tHead.insertRow();
				row.children.forEach((cell, index) => {
					columnCount++;
					const newThCell = document.createElement("th");
					newThCell.innerHTML = cell.value;
					if (cell.id) {
						newThCell.id = cell.id;
					}
					if (cell.select) {
						newThCell.innerHTML = "";
						selectHeader(newThCell, cell);
					}
					if (cell.selectRow) {
						newThCell.innerHTML = "";
						newThCell.style.borderRight = "1px solid var(--neutral-50)";
						let customContainer = document.createElement("div");
						customContainer.setAttribute("class", "g__custom_container");
						customContainer.appendChild(selectHeaderHandler(cell.attr_key));
						newThCell.appendChild(customContainer);
					}
					if (cell.classes) {
						newThCell.classList.add(cell.classes);
					}
					if (cell.text_align) {
						switch (cell.text_align) {
							case "center":
								newThCell.classList.add("g__text-center");
								break;
							case "right":
								newThCell.classList.add("g__text-right");
								break;
							default:
								newThCell.classList.add("g__text-left");
						}
					}

					tHeadRow.appendChild(newThCell);
				});
				tHead.appendChild(tHeadRow);
				table.insertBefore(tHead, tbody);
				break;
			case "row":
				let newRow = tbody.insertRow();
				newRow.classList.add("order");
				newRow.classList.add("g__table-row");
				if (row.href) {
					newRow.classList.add("g__clickable-row");
					newRow.setAttribute("data-href", row.href);
				}
				row.children.forEach((cell, index) => {
					let newCell = document.createElement("td");
					newCell.innerHTML = cell.value;
					if (cell.classes) {
						newCell.classList.add(cell.classes);
					}
					if (row.dropdown && index === 0) {
						newCell.innerHTML = "";
						const connectionContainer = document.createElement("div");
						connectionContainer.classList.add("g__connection-container");
						connectionContainer.setAttribute("data-row-num", index);
						const openIcon = document.createElement("i");
						openIcon.classList.add("g__toggle-row-details", "far", "fa-solid", "fa-angle-down");
						connectionContainer.appendChild(openIcon);
						connectionContainer.innerHTML += cell.value;
						newCell.appendChild(connectionContainer);
					}
					if (cell.color_label) {
						newCell.style.borderLeft = `4px solid ${cell.color_label}`;
					}
					if (cell.href) {
						newCell.innerHTML = "";
						const link = document.createElement("a");
						link.href = cell.href;
						link.innerHTML = cell.value;
						newCell.appendChild(link);
					}
					if (cell.strength) {
						newCell.innerHTML = "";
						strength(newCell, cell);
					}
					if (cell.select) {
						newCell.innerHTML = "";
						select(newCell, cell);
					}
					if (cell.selectRow) {
						newCell.innerHTML = "";
						newCell.style.borderRight = "1px solid var(--neutral-50)";
						let customContainer = document.createElement("div");
						customContainer.setAttribute("class", "g__custom_container");
						customContainer.appendChild(selectRowHandler(cell.attr_key, cell.attr_value));
						newCell.appendChild(customContainer);
					}
					if (cell.steps) {
						newCell.innerHTML = "";
						steps(newCell, cell);
					}
					if (cell.data_sort) {
						newCell.setAttribute("data-sort", cell.data_sort);
					}
					if (cell.data_granite) {
						newCell.setAttribute("data-granite", cell.data_granite);
					}
					if (cell.percent_change) {
						newCell.innerHTML = "";
						percentChange(newCell, cell);
					}
					if (cell.score) {
						newCell.innerHTML = "";
						newCell.appendChild(score(newRow, cell));
					}
					if (cell.status) {
						newCell.innerHTML = "";
						status(newCell, cell);
					}
					if (cell.status_circle) {
						newCell.innerHTML = "";
						circleStatusIndicator(newCell, cell);
					}
					if (cell.status_indicator) {
						newCell.innerHTML = "";
						statusIndicator(newCell, cell);
					}
					if (cell.tooltip) {
						newCell.classList.add("g__tooltip-cell");
						const tooltipContainer = document.createElement("div");
						tooltipContainer.classList.add("g__tooltip-container");
						tooltipContainer.innerHTML = cell.tooltip;
						newCell.appendChild(tooltipContainer);
					}
					if (cell.text_align) {
						switch (cell.text_align) {
							case "center":
								newCell.classList.add("g__text-center");
								break;
							case "right":
								newCell.classList.add("g__text-right");
								break;
							default:
								newCell.classList.add("g__text-left");
						}
					}
					if (cell.lead_status) {
						switch (cell.lead_status) {
							case "late":
								newCell.classList.add("g__late");
								break;
							case "today":
								newCell.classList.add("g__today");
								break;
							default:
								newCell.classList.add("g__default");
						}
					}

					// if(cell.restrict_height){
					//   const heightContainer = document.createElement('div');
					//   heightContainer.classList.add('g__overflow-data')
					//   console.log(newCell.outerText);
					// }

					newRow.appendChild(newCell);
				});
				break;
			case "dropdown":
				const fullRow = tbody.insertRow();
				fullRow.classList.add("g__full-row");
				fullRow.style.height = 0;
				fullRow.style.overflow = "hidden";
				const fullTd = document.createElement("td");
				fullTd.setAttribute("colspan", columnCount);
				fullTd.innerHTML = row.children[0].value;
				fullRow.appendChild(fullTd);
				break;
		}
	});
	/*---------------------------------------------
    Datatable.js
    ---------------------------------------------*/
	const tableId = "#g__" + id;
	let emptyTableText = o.empty_table_text || "No data available in table";
	if (o.datatables) {
		const table = $(tableId).DataTable({
			//paging
			paging: o.paging,
			pageLength: o.page_length,
			//column sort
			order: o.column_sort,
			ordering: o.column_ordering,
			// Remove search bar
			searching: o.searching,
			// Export buttons array
			dom: "Bfrtip",
			buttons: o.export_btns,
			// Vertical and horizontal scroll
			scrollX: o.scroll_x,
			scrollY: o.scroll_y,
			scrollCollapse: o.scroll_collapse,
			//responsive
			responsive: o.responsive,
			columnDefs: o.column_widths,
			autoWidth: o.auto_width,
			language: {
				emptyTable: emptyTableText,
				search: "",
			},
		});
		// table.columns.adjust().draw();
	}
	/*---------------------------------------------
    Toggle Row
    ---------------------------------------------*/
	const connectionsArr = document.querySelectorAll(`${cssId} .g__connection-container`);
	connectionsArr.forEach((rowParent) => {
		rowParent.addEventListener("click", (e) => {
			const parentRow = e.target.closest("tr");
			parentRow.nextSibling.classList.toggle("g__open");
		});
	});
	/*---------------------------------------------
    Clickable Row
    ---------------------------------------------*/
	const clickableArr = document.querySelectorAll(".g__clickable-row");
	if (clickableArr) {
		clickableArr.forEach((clickedRow) => {
			clickedRow.addEventListener("click", (e) => {
				const url = clickedRow.dataset.href;
				window.location = url;
			});
		});
	}
	/*---------------------------------------------
    Strength
    ---------------------------------------------*/
	function strength(newCell, cell) {
		if (cell.value <= 50) {
			newCell.innerHTML = `<span class="g__weak">${cell.value}</span>`;
		} else if (cell.value > 50 && cell.value < 75) {
			newCell.innerHTML = `<span class="g__moderate">${cell.value}</span>`;
		} else {
			newCell.innerHTML = `<span class="g__strong">${cell.value}</span>`;
		}
		return newCell;
	}
	/*---------------------------------------------
    Select Header
    ---------------------------------------------*/
	let selectedArr = [];
	window.selectedRowsArr = selectedArr;
	let recordsTotal = r.length - 1;
	function selectHeader(newThCell, cell) {
		const selectContainer = document.createElement("div");
		selectContainer.id = "g__select-header";
		selectContainer.classList.add("g__select-column", "g__select-record");
		selectContainer.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
		selectContainer.addEventListener("click", (e) => {
			selectedArr = [];
			selectContainer.classList.toggle("g__rows-all-selected");
			const selectorArr = document.querySelectorAll(".g__select-row");
			const rowArr = document.querySelectorAll(".g__table-row");
			if (selectContainer.classList.contains("g__rows-selected")) {
				selectContainer.classList.toggle("g__rows-all-selected");
				rowArr.forEach((row) => {
					row.classList.remove("g__row-selected");
					row.querySelector(".g__select-row").classList.remove("g__select-active");
				});
			} else {
				selectorArr.forEach((sel) => {
					sel.classList.remove("g__select-active");
					if (selectContainer.classList.contains("g__rows-all-selected")) {
						sel.classList.add("g__select-active");
						const url = sel.dataset.url;
						selectedArr.push(url);
					} else {
						sel.classList.remove("g__select-active");
						selectedArr = [];
					}
				});
			}
			selectContainer.classList.remove("g__rows-selected");
			window.selectedRowsArr = selectedArr;
		});
		newThCell.appendChild(selectContainer);
		return newThCell;
	}
	/*---------------------------------------------
    Select
    ---------------------------------------------*/
	function select(newCell, cell) {
		const selectContainer = document.createElement("div");
		selectContainer.classList.add("g__select-row", "g__select-record");
		selectContainer.setAttribute("data-url", cell.value);
		selectContainer.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
		const headerCell = document.getElementById("g__select-header");
		selectContainer.addEventListener("click", (e) => {
			selectContainer.classList.toggle("g__select-active");
			e.target.closest("tr").classList.toggle("g__row-selected");
			const url = selectContainer.dataset.url;
			//Build Array with Values and push to hidden field
			if (selectedArr.includes(url)) {
				const position = selectedArr.indexOf(url);
				selectedArr.splice(position, 1);
			} else {
				selectedArr.push(url);
			}
			//Apply proper class to header
			headerCell.classList.remove("g__rows-all-selected", "g__rows-selected");
			if (selectedArr.length == recordsTotal) {
				headerCell.classList.add("g__rows-all-selected");
			} else if (selectedArr.length >= 1) {
				headerCell.classList.add("g__rows-selected");
			}
		});
		newCell.appendChild(selectContainer);
		return newCell;
	}
	/*---------------------------------------------
    Steps
    ---------------------------------------------*/
	function steps(newCell, cell) {
		const stepContainer = document.createElement("div");
		stepContainer.classList.add("g__table-step-container");
		for (let i = 0; i < cell.number_steps; i++) {
			const stepIndicator = document.createElement("div");
			stepIndicator.classList.add("g__table-step");
			stepContainer.appendChild(stepIndicator);
		}
		newCell.appendChild(stepContainer);
		return newCell;
	}
	/*---------------------------------------------
    Percent change
    ---------------------------------------------*/
	function percentChange(newCell, cell) {
		if (cell.value > 0) {
			newCell.classList.add("g__strong");
			newCell.innerHTML = `<i class="far fa-long-arrow-up"></i> ${cell.value}%`;
		} else if (cell.value === 0) {
			newCell.classList.add("g__moderate");
			newCell.innerHTML = `${cell.value}%`;
		} else {
			newCell.classList.add("g__weak");
			let number = cell.value.toString();
			newCell.innerHTML = `<i class="far fa-long-arrow-down"></i> ${number.slice(1)}%`;
		}
		return newCell;
	}
	/*---------------------------------------------
    Status Indicator
    ---------------------------------------------*/
	function statusIndicator(newCell, cell) {
		newCell.classList.add("g__status-container");
		// newCell.innerHTML = `<div class="g__status-indicator ${cell.value === 'complete' ? 'g__status-active' : 'g__status-not-active'}"><i class="fa fa-check" aria-hidden="true"></i></div>`;
		newCell.innerHTML = `<div class="g__status-indicator ${
			cell.value === "complete" ? "g__status-active" : cell.value === "in progress" ? "g__status-in-progress" : "g__status-not-active"
		}"><i class="fa fa-check" aria-hidden="true"></i></div>`;
		return newCell;
	}
	/*---------------------------------------------
    Circle - Status Indicator
    ---------------------------------------------*/
	function circleStatusIndicator(newCell, cell) {
		newCell.classList.add("g__status-container");
		newCell.innerHTML = `<div class="g__status-circle ${cell.value ? "g__status-active" : "g__status-not-active"}"></div>`;
		return newCell;
	}
	/*---------------------------------------------
    Score
    ---------------------------------------------*/
	function score(newRow, cell) {
		const scoreContainer = document.createElement("div");
		if (cell.value >= 67) {
			newRow.classList.add("g__strong-row");
			scoreContainer.classList.add("g__score-cell", "g__strong", "g__strong-bkg");
			scoreContainer.innerHTML = `${cell.value}`;
		} else if (cell.value >= 34 && cell.value < 66) {
			newRow.classList.add("g__moderate-row");
			scoreContainer.classList.add("g__score-cell", "g__moderate", "g__moderate-bkg");
			scoreContainer.innerHTML = `${cell.value}`;
		} else {
			newRow.classList.add("g__weak-row");
			scoreContainer.classList.add("g__score-cell", "g__weak", "g__weak-bkg");
			scoreContainer.innerHTML = `${cell.value}`;
		}
		return scoreContainer;
	}
	/*---------------------------------------------
    Status
    ---------------------------------------------*/
	function status(newCell, cell) {
		if (cell.value) {
			newCell.classList.add("g__active");
			newCell.innerHTML = "Active";
		} else {
			newCell.classList.add("g__inactive");
			newCell.innerHTML = "Inactive";
		}
		return newCell;
	}
}
