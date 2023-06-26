import graniteTable_v2 from "../../granite/table/graniteTable_v2";
import "../../granite/table/graniteTable.css";
import "./table.css";

const loader = document.querySelector(".c__loading-container");
let selectedRowsArr = [];
let totalRecordsCount;
const query = {
	sort: "propensity",
	sort_order: "asc",
	sort_start_col: "14",
	search: "",
	page: 1,
	campaign_id: "a2KJw000000rlqPMAQ",
	cohort_id: "a2vJw0000006RbpIAE",
};

let totalRecordCount;
/* ------------------------------------------------------------
AJAX Call
-------------------------------------------------------------- */
function tableQuery() {
	let result;
	try {
		fetch("https://t-propensity-cohorts.addapptation.com/cohort_filter?api_key=7199b7a8-3f24-40fe-913f-ac156a2b2a36", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(query),
		})
			.then((response) => response.json())
			.then((result) => {
				buildTableRecords(result);
				// Use the 'result' data here or perform further operations
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle any error that occurred during the fetch request
			});
	} catch (error) {
		console.error(error);
		result = { error: true, data: [] };
	}
	return result;
}
tableQuery();
/* ------------------------------------------------------------
Table Build - Micro
-------------------------------------------------------------- */
function buildTable(recordsArr, options = {}) {
	try {
		const contacts = {
			id: "table__contacts",
			feature: "table",
			options: {
				datatables: true,
				paging: false,
				page_length: 50,
				searching: false,
				export_btns: [],
				scroll_x: true,
				scroll_y: "750px",
				scroll_collapse: true,
				column_widths: [
					{ width: "50px", targets: 0 }, //Select
					{ width: "150px", targets: 1 }, // First Namr
					{ width: "150px", targets: 2 }, // Last Name
					{ width: "200px", targets: 3 }, // Company
					{ width: "250px", targets: 4 }, // Industry
					{ width: "150px", targets: 5 }, // Job Title
					{ width: "150px", targets: 6 }, // Seniority
					{ width: "150px", targets: 7 }, // Department
					{ width: "150px", targets: 8 }, // Department Sub Roles
					{ width: "150px", targets: 9 }, // Work Email
					{ width: "150px", targets: 10 }, // Phone Numbers
					{ width: "150px", targets: 11 }, // Mobile Phone
					{ width: "100px", targets: 12 }, // Gender
					{ width: "100px", targets: 13 }, // Birth year
					{ width: "250px", targets: 14 }, // Address
					{ width: "200px", targets: 15 }, // Propensity Score
					{ width: "200px", targets: 16 }, // Competitive
					{ width: "200px", targets: 17 }, // Adjacent
					{ width: "200px", targets: 18 }, // Skills
					{ width: "200px", targets: 19 }, // Interests
					{ width: "100px", targets: 20 }, // Job Start Date
					{ width: "150px", targets: 21 }, // Socials
				],
				column_sort: [4, "desc"],
				responsive: true,
				auto_width: true,
				column_ordering: false,
				empty_table_text: '<div class="g__empty-icon">👥</div><h3>No Contacts</h3><p></p>',
			},
			records: recordsArr,
		};
		loader.style.display = "none";
		graniteTable_v2(contacts);
		displayPaginationLinks(recordsArr.length);
	} catch (error) {
		console.error(error);
	}
}
/* ------------------------------------------------------------
Table Functions
-------------------------------------------------------------- */

function urlHandler(url) {
	let socialUrl = "";
	if (!url.startsWith("http://") && !url.startsWith("https://")) {
		socialUrl = "http://" + url;
	}
	return socialUrl;
}
function socialHandler(linkedin, facebook, twitter) {
	let html = '<div class="g__flex g__align-center g__gap-8px">';

	if (linkedin) {
		html += `<a href="${urlHandler(
			linkedin
		)}" target="_blank" class="g__m-0"><i class="fab fa-linkedin g__pr-5 fa-lg" style="color:#0077b5;" aria-hidden="true"></i></a>`;
	} else {
		html += `<i class="fab fa-linkedin fa-lg" style="color:var(--neutral-400);" aria-hidden="true"></i>`;
	}
	if (facebook) {
		html += `<a href="${urlHandler(
			facebook
		)}" target="_blank" class="g__m-0"><i class="fab fa-facebook g__pr-5 fa-lg" style="color:#4267B2;" aria-hidden="true"></i></a>`;
	} else {
		html += `<i class="fab fa-facebook fa-lg" style="color:var(--neutral-400);" aria-hidden="true"></i>`;
	}
	if (twitter) {
		html += `<a href="${urlHandler(
			twitter
		)}" target="_blank" class="g__m-0"><i class="fab fa-twitter g__pr-5 fa-lg" style="color:#1DA1F2;" aria-hidden="true"></i></a>`;
	} else {
		html += `<i class="fab fa-twitter fa-lg" style="color:var(--neutral-400);" aria-hidden="true"></i>`;
	}

	html += "</div>";

	return html;
}
function scoreHandler(r) {
	if (r.competitive_signals === "" && r.adjacent_signals === "") {
		return '<div class="g__score-cell g__na-bkg g__na">N/A</div>';
	} else {
		return r.propensity;
	}
}

/* ------------------------------------------------------------
Build Table Rows
-------------------------------------------------------------- */
function buildTableRecords(records) {
	let { results } = records;
	totalRecordsCount = records.length;
	let tableRecords = [
		{
			type: "header",
			background: "#FAFAFA",
			children: [
				{
					value: "",
					selectRow: true,
					custom_function: selectHeaderHandler("email"),
					classes: "all",
				},
				{
					value: "First Name",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Last Name",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Company",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Industry",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Job Title",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Seniority",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Department",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Department Sub Roles",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Work Email",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Phone Number",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Mobile Phone",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Gender",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Birth Year",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Address",
					text_align: "left",
					classes: "all",
				},
				{
					value:
						'<div class="g__flex g__gap-8px g__align-center">Account Propensity<div class="c__score-info-btn"><i class="far fa-info-circle" aria-hidden="true"></i></div></div>',
					text_align: "center",
					classes: "all",
				},
				{
					value: "Competitive Signals",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Adjacent Signals",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Skills",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Interests",
					text_align: "left",
					classes: "all",
				},
				{
					value: "Job Start Date",
					text_align: "center",
					classes: "all",
				},
				{
					value: "Socials",
					text_align: "left",
					classes: "all",
				},
			],
		},
	];
	results.forEach((r) => {
		const newRow = {
			type: "row",
			href: "",
			children: [
				{
					value: "",
					selectRow: true,
					custom_function: selectRowHandler(r, "email", "work_email"),
				},
				{
					value: r.first_name,
					text_align: "left",
				},
				{
					value: r.last_name,
					text_align: "left",
				},
				{
					value: r.job_company_name,
					text_align: "left",
				},
				{
					value: r.job_company_industry,
					text_align: "left",
				},
				{
					value: `<div class="ellipsis_data add_ellipsis">${r.job_title}</div>`,
					text_align: "left",
				},
				{
					value: r.seniority,
					text_align: "left",
				},
				{
					value: r.job_title_role,
					text_align: "left",
				},
				{
					value: r.job_title_sub_role,
					text_align: "left",
				},
				{
					value: r.work_email,
					text_align: "left",
				},
				{
					value: `<div class="ellipsis_data add_ellipsis">${r.formatted_phone_numbers}</div>`,
					text_align: "left",
				},
				{
					value: r.mobile_phone,
					text_align: "left",
				},
				{
					value: r.gender,
					text_align: "left",
				},
				{
					value: r.birth_year,
					text_align: "left",
				},
				{
					value: r.formatted_address,
					text_align: "left",
				},
				{
					value: scoreHandler(r),
					score: true,
					text_align: "center",
				},
				{
					value: `<div class="ellipsis_data add_ellipsis">${r.competitive_signals ? r.competitive_signals : ""}</div>`,
					text_align: "left",
				},
				{
					value: `<div class="ellipsis_data add_ellipsis">${r.adjacent_signals ? r.adjacent_signals : ""}</div>`,
					text_align: "left",
				},
				{
					value: `<div class="ellipsis_data add_ellipsis">${r.formatted_skills}</div>`,
					text_align: "left",
				},
				{
					value: `<div class="ellipsis_data add_ellipsis">${r.formatted_interests}</div>`,
					text_align: "left",
				},
				{
					value: r.formatted_job_start_date,
					text_align: "center",
				},
				{
					value: socialHandler(r.linkedin_url, r.facebook_url, r.twitter_url),
					text_align: "left",
				},
			],
		};
		tableRecords.push(newRow);
	});
	buildTable(tableRecords);
}
function showLoader(show) {
	const loader = document.querySelector(".c__loading-container");
	if (show) {
		loader.style.display = "flex";
	} else {
		loader.style.display = "none";
	}
}

// function to display pagination links
function displayPaginationLinks(recordCount) {
	// set number of records per page
	var recordsPerPage = 100;
	// get table element
	// var table = document.getElementById("myTable");

	// get total number of records
	var totalRecords = recordCount;

	// calculate total number of pages
	let totalPages = Math.ceil(totalRecords / recordsPerPage);

	// set current page to 1
	let currentPage = 1;

	//Update showing total of
	const totalNumber = document.querySelector(".c__total-records");
	if (totalNumber) {
		totalNumber.innerText = totalRecords;
	}
	const startIndex = (currentPage - 1) * recordsPerPage + 1;
	const endIndex = totalRecords < 100 ? totalRecords : startIndex + recordsPerPage - 1;
	const start = document.querySelector(".c__start");
	start.innerText = "";
	start.innerText = startIndex;
	const end = document.querySelector(".c__end");
	end.innerText = "";
	end.innerText = endIndex;
	// get pagination element
	const pagination = document.getElementById("c__pagination-list");
	//hide if only top 100
	// clear pagination links
	pagination.innerHTML = "";
	// display "previous" link
	if (currentPage > 1) {
		const previousLink = document.createElement("button");
		previousLink.type = "button";
		previousLink.classList.add("g__btn", "g__btn-text", "c__prev");
		previousLink.href = "#";
		previousLink.innerHTML = "Previous";
		previousLink.addEventListener("click", function () {
			currentPage--;
			displayPaginationLinks();
			updateTable("table__contacts", { queryType: "page", queryValue: currentPage, campaign_id: "<%= params[:campaign_id]%>" });
		});
		pagination.appendChild(previousLink);
	}

	if (currentPage > 3) {
		const firstLink = document.createElement("button");
		firstLink.type = "button";
		firstLink.classList.add("c__page-btn", "c__start");
		firstLink.innerHTML = "1";
		firstLink.addEventListener("click", function () {
			currentPage = 1;
			displayPaginationLinks();
			updateTable("table__contacts", { queryType: "page", queryValue: 1, campaign_id: "<%= params[:campaign_id]%>" });
		});
		pagination.appendChild(firstLink);

		const ellipsesStart = document.createElement("span");
		ellipsesStart.classList.add("c__ellipses");
		ellipsesStart.innerText = "...";
		pagination.appendChild(ellipsesStart);
	}
	// display page links
	for (var i = 1; i <= totalPages; i++) {
		var pageLink = document.createElement("button");
		pageLink.type = "button";
		pageLink.classList.add("c__page-btn");
		pageLink.innerHTML = i;
		if (i === currentPage) {
			pageLink.classList.add("active");
		}
		pageLink.addEventListener(
			"click",
			(function (i) {
				return function () {
					currentPage = i;
					displayPaginationLinks();
					updateTable("table__contacts", { queryType: "page", queryValue: currentPage, campaign_id: "<%= params[:campaign_id]%>" });
				};
			})(i)
		);
		pagination.appendChild(pageLink);
	}
	if (currentPage < totalPages - 2) {
		const ellipsesCont = document.createElement("span");
		ellipsesCont.classList.add("c__ellipses");
		ellipsesCont.innerText = "...";
		pagination.appendChild(ellipsesCont);

		const lastLink = document.createElement("button");
		lastLink.type = "button";
		lastLink.classList.add("c__page-btn", "c__end");
		lastLink.innerHTML = totalPages;
		lastLink.addEventListener("click", function () {
			currentPage = totalPages;
			displayPaginationLinks();
			updateTable("table__contacts", { queryType: "page", queryValue: totalPages, campaign_id: "<%= params[:campaign_id]%>" });
		});
		pagination.appendChild(lastLink);
	}
	// display "next" link
	if (currentPage < totalPages) {
		var nextLink = document.createElement("button");
		nextLink.type = "button";
		nextLink.classList.add("g__btn", "g__btn-text", "c__next");
		nextLink.href = "#";
		nextLink.innerHTML = "Next";
		nextLink.addEventListener("click", function () {
			currentPage++;
			displayPaginationLinks();
			updateTable("table__contacts", { queryType: "page", queryValue: currentPage, campaign_id: "<%= params[:campaign_id]%>" });
		});
		pagination.appendChild(nextLink);
	}
	// display links for two pages before and after the current page
	var pageLinks = pagination.querySelectorAll(".c__page-btn:not(.c__end):not(.c__start)");
	for (var i = 0; i < pageLinks.length; i++) {
		var page = parseInt(pageLinks[i].innerHTML);
		if (page >= currentPage - 2 && page <= currentPage + 2) {
			pageLinks[i].style.display = "";
		} else {
			pageLinks[i].style.display = "none";
		}
	}
}

/* ------------------------------------------------------------
Update Table records
-------------------------------------------------------------- */
async function updateTable(tableContainerId, queryFields = { sort_start_col: null, sort_order: null, queryType: null, queryValue: null }) {
	if (!!queryFields.sort_order) {
		query.sort_order = queryFields.sort_order;
	}
	if (!!queryFields.queryType) {
		const type = queryFields.queryType;
		//set global query variable with the appropriate values

		query[type] = queryFields.queryValue;

		//reset some values to default if certain queries are made
		if (type === "search" || type === "signal") {
			query.page = 1;
		}
	}

	if (queryFields.owner) {
		query.owner = queryFields.owner;
	}
	if (queryFields.warmth) {
		query.warmth = queryFields.warmth;
	}
	if (queryFields.sort_start_col !== undefined && queryFields.sort_start_col !== null) {
		const sort_start_col = !!queryFields.sort_start_col.toString() ? queryFields.sort_start_col : query.sort_start_col;
		query.sort_start_col = sort_start_col;
	}

	document.getElementById(tableContainerId).innerHTML = "";
	showLoader(true);
	const results = await tableQuery();
	if (results.error) {
		toastr.error("An error occurred");
	} else {
		const total = results.total;
		buildTableRecords(results);
		showLoader(false);
		if (selectedRowsArr.length) {
			selectedRowsArr = [];
		}
	}
}

/* ------------------------------------------------------------
Row Selection
-------------------------------------------------------------- */
function selectHeaderHandler(attrKey) {
	const selectContainer = document.createElement("div");
	selectContainer.id = "g__select-header";
	selectContainer.classList.add("g__select-column", "g__select-record");
	selectContainer.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
	selectContainer.addEventListener("click", (e) => {
		selectContainer.classList.toggle("g__rows-all-selected");
		const selectorArr = document.querySelectorAll(".g__select-row");
		const rowArr = document.querySelectorAll(".g__table-row");
		if (selectContainer.classList.contains("g__rows-selected")) {
			selectContainer.classList.toggle("g__rows-all-selected");
			rowArr.forEach((row) => {
				row.classList.remove("g__row-selected");
				row.querySelector(".g__select-row").classList.remove("g__select-active");
			});
			selectedRowsArr = [];
		} else {
			selectorArr.forEach((sel) => {
				sel.classList.remove("g__select-active");
				if (selectContainer.classList.contains("g__rows-all-selected")) {
					sel.classList.add("g__select-active");
					const selectValue = sel.dataset[attrKey];
					selectedRowsArr.push(selectValue);
				} else {
					sel.classList.remove("g__select-active");
					selectedRowsArr = [];
				}
			});
		}
		selectContainer.classList.remove("g__rows-selected");
		console.log(selectedRowsArr);
	});
	return selectContainer;
}

function selectRowHandler(r, attrKey, attrValue) {
	const selectContainer = document.createElement("div");
	selectContainer.classList.add("g__select-row", "g__select-record");
	selectContainer.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
	selectContainer.setAttribute(`data-${attrKey}`, r[attrValue]);
	selectContainer.addEventListener("click", (e) => {
		const headerCell = document.getElementById("g__select-header");
		selectContainer.classList.toggle("g__select-active");
		e.target.closest("tr").classList.toggle("g__row-selected");
		const selectValue = selectContainer.dataset[attrKey];
		//Build Array with Values and push to hidden field
		if (selectedRowsArr.includes(selectValue)) {
			const position = selectedRowsArr.indexOf(selectValue);
			selectedRowsArr.splice(position, 1);
		} else {
			selectedRowsArr.push(selectValue);
		}
		//Apply proper class to header
		headerCell.classList.remove("g__rows-all-selected", "g__rows-selected");
		if (selectedRowsArr.length == totalRecordsCount) {
			headerCell.classList.add("g__rows-all-selected");
		} else if (selectedRowsArr.length >= 1) {
			headerCell.classList.add("g__rows-selected");
		}
		console.log(selectedRowsArr);
	});

	return selectContainer;
}
