import './overview.css';

anychart.onDocumentReady(function () {
  var data = [
    {x: "Mar 1", value: 98},
    {x: "Mar 8", value: 65},
    {x: "Mar 15", value: 105},
    {x: "Mar 22", value: 68},
    {x: "Mar 30", value: 84},
    {x: "Apr 06", value: 85},
    {x: "Apr 13", value: 120},
    {x: "Apr 20", value: 114},
    {x: "May 04", value: 95}
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
  chart.xAxis();
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