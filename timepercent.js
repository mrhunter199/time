      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      
      function getHours() {
      	const today = new Date();
        let h = today.getHours();
        return h
      }
      
        function getMinutes() {
      	const today = new Date();
        let m = today.getMinutes();
        return m
      }

      function getSeconds() {
      	const today = new Date();
        let s = today.getSeconds();
        return s
      }
      
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Hours', getHours()],
          ['Minutes', getMinutes()],
          ['Seconds', getSeconds()]
        ]);

        var options = {
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'true',
          //pieSliceText: 'value'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }
      const interval = setInterval(function() {
   drawChart()
 }, 1000);
