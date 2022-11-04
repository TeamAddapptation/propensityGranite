import './accountSummary.css';

anychart.onDocumentReady(function () {
  // create data
  var data = [
    {
      date: 'January',
      count: 150,
      categories: [
        'Media Advertising <br />',
        'Health Insurance <br />',
        'Bioproduction <br />',
        'Other',
        'Business Services',
        'Financial',
        'Technology',
        'Manufacturing',
        'Life Science',
        'Business Structure',
        'Personal Finance',
        'CRM',
        'Leadership Strategy',
        'Medical Treatment',
        'Strategy \u0026 Analysis',
      ],
      categories_array: ['Life Science', 'CRM', 'Leadership Strategy', 'Medical Treatment', 'Technology'],
    },
    { date: 'February', count: 15000, categories: ['Business Services', 'Topic 2'] },
    { date: 'March', count: 16000 },
    { date: 'April', count: 14000 },
    { date: 'May', count: 10000 },
  ];

  // create a data set
  var dataSet = anychart.data.set(data);

  // map the data
  var mapping = dataSet.mapAs({ x: 'date', value: 'count', categories: 'categories_array' });

  // create a chart
  var chart = anychart.area();

  // create a series and set the data
  var series = chart.splineArea(mapping);
  series.normal().fill('#4788FF', 0.1);
  series.normal().stroke('#4788FF', 2);

  // set scale mode
  chart.xScale().mode('continuous');

  // set the titles of the axes
  chart.xAxis();
  var labels = chart.xAxis().labels();
  labels.hAlign('center');
  labels.width(60);
  labels.fontFamily('Montserrat');
  labels.fontSize(12);
  labels.fontColor('#757575');
  chart.yAxis(false);

  var crosshair = chart.crosshair();
  crosshair.enabled(true);
  crosshair.yStroke(false);
  crosshair.yLabel(false);
  crosshair.xLabel(false);

  var credits = chart.credits();
  credits.enabled(false);

  chart.tooltip().useHtml(true);
  chart.tooltip().background().fill('white');
  chart.tooltip().titleFormat("<span style='color:#5D50E6;'>Trending Categories ({%value})</span> <span class='c__tooltip-date'>{%x}</span>");
  series.tooltip().format(function () {
    var tooltip = `<h6 class="c__tooltip-top">Top Categories</h6>`;
    var catArr = this.getData('categories');
    catArr.forEach((cat) => {
      tooltip += `<p class="c__tooltip-cat">${cat}</p>`;
    });
    return tooltip;
  });
  // chart.tooltip().format("<span class='c__details'>{%categories} <br/></span>");

  // set the container id
  chart.container('anychart__area-chart');

  // initiate drawing the chart
  chart.draw();
});
