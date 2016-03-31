$("document").ready(function() {
  var columns = [
    ['Profitable', 50, 3, 4, 5, 2, 5, 2, 3, 4, 4],
    ['Not-Profitable', 50, 44, 5, 3, 33, 4, 4, 33, 5, 4]
  ];

  var chart = c3.generate({
    bindto: '#chart1',
    data: {
      columns: columns,
      types: {
        'Profitable': 'area',
        'Not-Profitable': 'area'
      },
      colors: {
        'Profitable': 'hotpink',
        'Not-Profitable': 'pink'
      }
    },
    axis: {
      x: {
        label: {
          text: 'months',
          position: 'outer-left'
        }
      },
      y: {
        label: {
          text: 'number of profitable',
          position: 'outer-bottom'
        }
      }
    }
  });
});
