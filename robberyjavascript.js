
$(function() {
  $('#container').highcharts({
    chart: {
      type: 'area',
      spacingBottom: 30
    },
    title: {
      text: 'Robberies and Burglaries in NYC 2015 *'
    },
    subtitle: {
      text:'',
      floating: true,
      align: 'right',
      verticalAlign: 'bottom',
      y: 15
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    xAxis: {
      categories: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', ]
    },
    yAxis: {
      title: {
        text: 'Y-Axis'
      },
      labels: {
        formatter: function() {
          return this.value;
        }
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + '</b><br/>' +
          this.x + ': ' + this.y;
      }
    },
    plotOptions: {
      area: {
        fillOpacity: 0.5
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Burglaries',
      data: [1953, 4013, 1948, 2617, 414]
    }, {
      name: 'Robberies',
      data: [3131, 4085, 2281, 2405, 344]
    }]
  });
});
