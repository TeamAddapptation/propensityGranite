import "./trackingDetails.css";

import granitePicklist from "../../granite/picklist/granitePicklist";
import "../../granite/picklist/granitePicklist.css";

import graniteTable from "../../granite/table/graniteTable_v2";
import "../../granite/table/graniteTable.css";

try {
	const filterSignal = {
		id: "picklist_week",
		options: {
			sf_key: "",
			select_id: "g__week",
			placeholder: "Select Week",
			classes: "",
			select_options: [
				["option-1", "Option 1"],
				["option-2", "Option 2"],
				["option-3", "Option 3"],
			],
		},
		records: [],
	};
	granitePicklist(filterSignal);
} catch (error) {
	console.error(error);
}

anychart.onDocumentReady(function () {
	var data = [
		{ x: "Mar 1", value: 98 },
		{ x: "Mar 8", value: 65 },
		{ x: "Mar 15", value: 105 },
		{ x: "Mar 22", value: 68 },
		{ x: "Mar 30", value: 84 },
		{ x: "Apr 06", value: 85 },
		{ x: "Apr 13", value: 120 },
		{ x: "Apr 20", value: 114 },
		{ x: "May 04", value: 95 },
	];
	// create a data set
	var dataSet = anychart.data.set(data);

	// map the data
	var mapping = dataSet.mapAs({ x: "date", value: "count", categories: "categories_array" });

	// create a chart
	var chart = anychart.area();

	var series = chart.splineArea(mapping);
	series.normal().fill("#4788FF", 0.1);
	series.normal().stroke("#4788FF", 2);

	// set scale mode
	chart.xScale().mode("continuous");

	// set the titles of the axes
	chart.xAxis();
	var labels = chart.xAxis().labels();
	labels.hAlign("center");
	labels.fontFamily("Montserrat");
	labels.fontSize(12);
	labels.fontColor("#757575");
	chart.yAxis(false);

	var crosshair = chart.crosshair();
	crosshair.enabled();
	crosshair.yStroke(false);
	crosshair.yLabel(false);
	crosshair.xLabel(false);

	var credits = chart.credits();
	credits.enabled(false);

	// set the container id
	chart.container("chart_trending-data");

	// initiate drawing the chart
	chart.draw();
});

try {
	const intent = {
		id: "table_intent-data",
		feature: "table",
		options: {
			datatables: true,
			paging: true,
			page_length: 50,
			searching: false,
			export_btns: ["excelHtml5", "csvHtml5"],
			scroll_x: true,
			scroll_y: "50vh",
			scroll_collapse: true,
			responsive: true,
			column_widths: [],
			remove_ordering: false,
			auto_width: true,
			empty_table_text: `<div class="g__empty-icon">&#x1F465;</div><h3>No Intent Data</h3>`,
		},
		records: [
			{
				type: "header",
				background: "#FAFAFA",
				children: [
					{
						value: "Acct Name",
						classes: "min-mobile",
					},
					{
						value: "Propensity Score",
						id: "c__score",
						classes: "min-mobile",
					},
					{
						value: "New",
						text_align: "center",
						classes: "not-mobile",
					},
					{
						value: "Website",
						classes: "not-mobile",
					},
					{
						value: "Industry",
						classes: "not-mobile",
					},
					{
						value: "Competitive Signals",
						title_tag:
							"Competitive signals track whenever someone may be searching for this competitor. The more people searching for this signal, the higher your propensity score.",
						classes: "not-mobile",
					},
					{
						value: "Adjacent Signals",
						title_tag:
							"Adjacent signals track whenever someone may be searching for this topic. The more people searching for this signal, the higher your propensity score.  ",
						classes: "not-mobile",
					},
				],
			},
		],
	};
	graniteTable(intent);
} catch (error) {
	console.error(error);
}
