google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Income', 'Expenses'],
          ['JAN', 1000, 400],
          ['FEB', 1170, 460],
          ['MAR', 660, 1120],
          ['APR', 1030, 540],
          ['MAY', 1000, 400],
          ['JUN', 1170, 460],
          ['JUL', 1000, 400],
          ['AUG', 1170, 460],
          ['SEP', 660, 1120],
          ['OCT', 1030, 540],
          ['NOV', 1000, 400],
          ['DEC', 1170, 460],
        ]);

        var options = {
          colors: ['#ff0000', '#2C3E50'],
          chart: {
            // title: 'Company Performance',
            // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }