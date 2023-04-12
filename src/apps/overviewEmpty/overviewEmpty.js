import "./overviewEmpty.css"

anychart.onDocumentReady(function () {
  var data = [
    {x: "Mar 1", value: 100},
    {x: "Mar 8", value: 80},
    {x: "Mar 15", value: 120},
    {x: "Mar 23", value: 90},

  ];;
  // create a data set
  var dataSet = anychart.data.set(data);

   // map the data
  var mapping = dataSet.mapAs({ x: 'date', value: 'count', categories: 'categories_array' });

  // create a chart
  var chart = anychart.area();

  var series = chart.splineArea(mapping);
  series.normal().fill('#4788FF', 0.1);
  series.normal().stroke('#4788FF', 2);
  
  // set scale mode
  chart.xScale().mode('continuous');

  // set the titles of the axes
  chart.xAxis(false);
  var labels = chart.xAxis().labels();
  labels.hAlign('center');
  labels.fontFamily('Montserrat');
  labels.fontSize(12);
  labels.fontColor('#757575');
  chart.yAxis(false);

  var crosshair = chart.crosshair();
  crosshair.enabled();
  crosshair.yStroke(false);
  crosshair.yLabel(false);
  crosshair.xLabel(false);
  
  var credits = chart.credits();
  credits.enabled(false);

  // set the container id
  chart.container("chart_website-visits");

  // initiate drawing the chart
  chart.draw();
})