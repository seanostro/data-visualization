$("document").ready(function() {
  $("document").ready(function() {

    var columns = [
      ['x', 1422748799, 1425167999, 1427846399, 1430438399, 1433116799],
      ['Uber', 0.0085, 0.0096, 0.0102, 0.0201, 0.0351],
      ['Ola cabs', 0.0495, 0.0623, 0.0760, 0.0851, 0.0976],
      ['TaxiForSure', 0.015, 0.0146, 0.0142, 0.0235, 0.0313],
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
      bindto: '#chart3',
      data: {
        x: 'x',
        columns: columns,
        type: 'bar',
        colors: {
          'Uber': '#777777',
          'Ola cabs': '#FF837E',
          'TaxiForSure': '#8A0917'
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
