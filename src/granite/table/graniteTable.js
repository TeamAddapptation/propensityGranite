export default function graniteTable(jsonBlock) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;
  const graniteDiv = document.getElementById(id);

  /*---------------------------------------------
    Empty the Div
    ---------------------------------------------*/
  graniteDiv.innerHTML = "";
  /*---------------------------------------------
    CSS
    ---------------------------------------------*/
  const fontSize = "0.8rem";
  const ascArrow = "<i class='far fa-angle-up'></i>";

  var tableCss = document.createElement("style");
  tableCss.id = "g__css_" + id;
  tableCss.innerHTML = `
  ${cssId} table {
    table-layout: ${o.fixed ? "fixed" : "auto"};
  }
  /* ----------
  Tooltip
  ---------- */
  ${cssId} .g__tooltip-cell .g__tooltip-container{
    position: absolute;
    display: none;
    top: 95%;
    left: 0;
    width: 225px;
    z-index: 5;
    background: #ffffff;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 15px;
  }
  ${cssId} .g__tooltip-cell:hover .g__tooltip-container{
    display: block;
  }
  ${cssId} .g__tooltip-container ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ${cssId} .g__tooltip-container ul li{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1rem;
    font-size: 0.8rem;
  }
  ${cssId} .g__tooltip-container ul li .g__tooltip-stat{
    display: grid;
    justify-items: start;
  }
  ${cssId} .g__tooltip-container ul li .g__tooltip-num{
    display: grid;
    justify-items: end;
  }
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
  /* ----------
  Strength
  ---------- */
  ${cssId} .g__weak{
    color: var(--dark-red);
  }
  ${cssId} .g__weak-bkg{
    background-color: var(--light-red);
  }
  ${cssId} .g__moderate{
    color: var(--dark-orange);
  }
  ${cssId} .g__moderate-bkg{
    background-color: var(--light-orange);
  }
  ${cssId} .g__strong{
    color: var(--dark-green);
  }
  ${cssId} .g__strong-bkg{
    background-color: var(--light-green);
  }
  /* ----------
  Status
  ---------- */
  ${cssId} .g__active{
    color: var(--dark-green);
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
          const newThCell = document.createElement("th");
          newThCell.innerHTML = cell.value;
          if (cell.color_label) {
            newThCell.style.borderBottom = `4px solid ${cell.color_label}`;
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
        newRow.setAttribute("g__row", index);
        newRow.classList.add("order");
        if (row.href) {
          newRow.classList.add("g__clickable-row");
          newRow.setAttribute("data-href", row.href);
        }
        row.children.forEach((cell, index) => {
          let newCell = document.createElement("td");
          cell.width ? (newCell.style.width = cell.width) : "auto";
          newCell.innerHTML = cell.value;
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
          if (cell.percent_change) {
            newCell.innerHTML = "";
            percentChange(newCell, cell);
          }
          if (cell.score) {
            newCell.innerHTML = "";
            score(newCell, cell);
          }
          if (cell.status) {
            newCell.innerHTML = "";
            status(newCell, cell);
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

          newRow.appendChild(newCell);
        });
        break;
    }
  });
  /*---------------------------------------------
    Datatable.js
    ---------------------------------------------*/
  const fixedColumn = o.fixed_column || false;
  const defaultColumnSort = o.columnSort || [0, "asc"];
  if (o.datatables) {
    const tableId = "#g__" + id;
    $(tableId).DataTable({
      searching: o.searching,
      order: defaultColumnSort,
      paging: o.paging,
      scrollX: o.scroll_x,
      pageLength: o.page_length,
      scrollCollapse: true,
      fixedColumns: fixedColumn,
      dom: "Bfrtip",
      buttons: ["excelHtml5", "csvHtml5"],
      language: {
        search: "",
        paginate: {
          previous: "<i class='far fa-chevron-left'></i>",
          next: "<i class='far fa-chevron-right'></i>",
        },
      },
    });
  }
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
      newCell.innerHTML = `<i class="far fa-long-arrow-down"></i> ${number.slice(
        1
      )}%`;
    }
    return newCell;
  }
  /*---------------------------------------------
    Score
    ---------------------------------------------*/
  function score(newCell, cell) {
    if (cell.value >= 70) {
      newCell.classList.add("g__strong");
      newCell.classList.add("g__strong-bkg");
      newCell.innerHTML = `${cell.value}`;
    } else if (cell.value >= 50 && cell.value < 70) {
      newCell.classList.add("g__moderate");
      newCell.classList.add("g__moderate-bkg");
      newCell.innerHTML = `${cell.value}`;
    } else {
      newCell.classList.add("g__weak");
      newCell.classList.add("g__weak-bkg");
      newCell.innerHTML = `${cell.value}`;
    }
    return newCell;
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
function graniteTable(jsonBlock) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;
  const graniteDiv = document.getElementById(id);

  /*---------------------------------------------
    Empty the Div
    ---------------------------------------------*/
  graniteDiv.innerHTML = "";
  /*---------------------------------------------
    CSS
    ---------------------------------------------*/
  const fontSize = "0.8rem";
  const ascArrow = "<i class='far fa-angle-up'></i>";

  var tableCss = document.createElement("style");
  tableCss.id = "g__css_" + id;
  tableCss.innerHTML = `
  ${cssId} table {
    table-layout: ${o.fixed ? "fixed" : "auto"};
  }
  /* ----------
  Tooltip
  ---------- */
  ${cssId} .g__tooltip-cell .g__tooltip-container{
    position: absolute;
    display: none;
    top: 95%;
    left: 0;
    width: 225px;
    z-index: 5;
    background: #ffffff;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 15px;
  }
  ${cssId} .g__tooltip-cell:hover .g__tooltip-container{
    display: block;
  }
  ${cssId} .g__tooltip-container ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ${cssId} .g__tooltip-container ul li{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1rem;
    font-size: 0.8rem;
  }
  ${cssId} .g__tooltip-container ul li .g__tooltip-stat{
    display: grid;
    justify-items: start;
  }
  ${cssId} .g__tooltip-container ul li .g__tooltip-num{
    display: grid;
    justify-items: end;
  }
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
  /* ----------
  Strength
  ---------- */
  ${cssId} .g__weak{
    color: var(--dark-red);
  }
  ${cssId} .g__weak-bkg{
    background-color: var(--light-red);
  }
  ${cssId} .g__moderate{
    color: var(--dark-orange);
  }
  ${cssId} .g__moderate-bkg{
    background-color: var(--light-orange);
  }
  ${cssId} .g__strong{
    color: var(--dark-green);
  }
  ${cssId} .g__strong-bkg{
    background-color: var(--light-green);
  }
  /* ----------
  Status
  ---------- */
  ${cssId} .g__active{
    color: var(--dark-green);
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
          const newThCell = document.createElement("th");
          newThCell.innerHTML = cell.value;
          if (cell.color_label) {
            newThCell.style.borderBottom = `4px solid ${cell.color_label}`;
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
        newRow.setAttribute("g__row", index);
        newRow.classList.add("order");
        if (row.href) {
          newRow.classList.add("g__clickable-row");
          newRow.setAttribute("data-href", row.href);
        }
        row.children.forEach((cell, index) => {
          let newCell = document.createElement("td");
          cell.width ? (newCell.style.width = cell.width) : "auto";
          newCell.innerHTML = cell.value;
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
          if (cell.percent_change) {
            newCell.innerHTML = "";
            percentChange(newCell, cell);
          }
          if (cell.score) {
            newCell.innerHTML = "";
            score(newCell, cell);
          }
          if (cell.status) {
            newCell.innerHTML = "";
            status(newCell, cell);
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

          newRow.appendChild(newCell);
        });
        break;
    }
  });
  /*---------------------------------------------
    Datatable.js
    ---------------------------------------------*/
  const fixedColumn = o.fixed_column || false;
  const defaultColumnSort = o.columnSort || [0, "asc"];
  if (o.datatables) {
    const tableId = "#g__" + id;
    $(tableId).DataTable({
      searching: o.searching,
      order: defaultColumnSort,
      paging: o.paging,
      scrollX: o.scroll_x,
      pageLength: o.page_length,
      scrollCollapse: true,
      fixedColumns: fixedColumn,
      dom: "Bfrtip",
      buttons: ["excelHtml5", "csvHtml5"],
      language: {
        search: "",
        paginate: {
          previous: "<i class='far fa-chevron-left'></i>",
          next: "<i class='far fa-chevron-right'></i>",
        },
      },
    });
  }
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
      newCell.innerHTML = `<i class="far fa-long-arrow-down"></i> ${number.slice(
        1
      )}%`;
    }
    return newCell;
  }
  /*---------------------------------------------
    Score
    ---------------------------------------------*/
  function score(newCell, cell) {
    if (cell.value >= 70) {
      newCell.classList.add("g__strong");
      newCell.classList.add("g__strong-bkg");
      newCell.innerHTML = `${cell.value}`;
    } else if (cell.value >= 50 && cell.value < 70) {
      newCell.classList.add("g__moderate");
      newCell.classList.add("g__moderate-bkg");
      newCell.innerHTML = `${cell.value}`;
    } else {
      newCell.classList.add("g__weak");
      newCell.classList.add("g__weak-bkg");
      newCell.innerHTML = `${cell.value}`;
    }
    return newCell;
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
