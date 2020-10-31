
Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Strawberries', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Juan and Sandra\'s house'
      }
    },
    series: [{
      name: 'Juan',
      data: [6, 1, 0, 4]
    }, {
      name: 'Sandra',
      data: [6, 5, 7, 3]
    }]
  });
