
function() {
  ('#container').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Violent Crimes by Borough NYC 2015'
    },
    subtitle: {
      text: 'Source: <a href="http://www.nyc.gov/html/nypd/html/crime_prevention/crime_statistics.shtml">Nyc.gov</a>'
    },
    xAxis: {
      categories: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Occurences',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ''
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Murder',
      data: [68, 102, 31, 48, 8]
    }, {
      name: 'Rape',
      data: [254, 347, 232, 215, 32]
    }, {
      name: 'Assault',
      data: [3965, 4747, 2588, 2988, 514]
    }]
  });
});