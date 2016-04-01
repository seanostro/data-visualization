$("document").ready(function() {
  $("document").ready(function() {

    var columns = [
      ['x', 1422748799, 1425167999, 1427846399, 1430438399, 1433116799],
      ['Uber', 0.117, 0.1396, 0.1595, 0.1875, 0.2035],
      ['Lyft', 0.0173, 0.0177, 0.0179, 0.0166, 0.0155]
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
      bindto: '#chart2',
      data: {
        x: 'x',
        columns: columns,
        type: 'bar',
        colors: {
          'Uber': '#777777',
          'Lyft': '#FF837E'
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
