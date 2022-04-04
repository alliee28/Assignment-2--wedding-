var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'Age',
      data: [2, 1.5, 0.5]
    }],
    xaxis: {
      categories: ["Snap", "Flash", "Doja"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();