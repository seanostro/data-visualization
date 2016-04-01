$("document").ready(function() {
  $("document").ready(function() {

    var columns = [
      ['x', 1422748799, 1425167999, 1427846399, 1430438399, 1433116799],
      ['Uber', 0.0046, 0.0046, 0.0046, 0.0051, 0.0064],
      ['Easy Taxi', 0.0075, 0.0072, 0.0079, 0.0068, 0.0066],
      ['GrabTaxi', 0.0086, 0.0086, 0.0087, 0.0103, 0.0151],
    ];

    var months = {
      1422748799: {
        "tech": [25],
        "other": [46]
      },
      1425167999: {
        "tech": [82],
        "other": [110]
      },
      1427846399: {
        "tech": [44],
        "other": [33]
      },
      1430438399: {
        "tech": [194],
        "other": [257]
      },
      1433116799: {
        "tech": [194],
        "other": [257]
      }
    };

    var chart = c3.generate({
      bindto: '#chart4',
      data: {
        x: 'x',
        columns: columns,
        type: 'bar',
        colors: {
          'Uber': '#777777',
          'Easy Taxi': '#FF837E',
          'GrabTaxi': '#8A0917'
        }
      },
      bar: {
        width: 20
      },
      axis: {
        x: {
          label: {
            text: 'Time [months]',
            position: 'outer-left'
          },
          type: 'timeseries',
          tick: {
            format: function(e, d) {
              return dateToString(e)
            }
          }
        },
        y: {
          label: {
            text: 'percentage of marketshare',
            position: 'outer-bottom'
          },
          type: 'percentage',
          tick: {
            count: 6,
            format: d3.format('%')
          }
        }
      }
    });
  });

  function dateToString(e) {
    return new Date(e * 1000).toLocaleDateString('en-US', {month: 'short'})
  }

});
