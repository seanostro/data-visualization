$("document").ready(function() {

  var columns = [
    ['x', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
    ['Tech and Biotech IPOs', 0.88, 0.81, 0.82, 0.68, 0.81, 0.79, 0.64, 0.75, 0.74, 0.69, 0.83, 0.55, 0.54, 0.64, 0.63, 0.65, 0.43, 0.46, 0.37, 0.14, 0.13, 0.24, 0.42, 0.27, 0.32, 0.30, 0.36, 0.24, 0.57, 0.70, 0.48, 0.29, 0.35, 0.19, 0.11],
    ['Other IPOs', 0.70, 0.85, 0.79, 0.86, 0.84, 0.87, 0.84, 0.85, 0.87, 0.84, 0.87, 0.88, 0.80, 0.74, 0.80, 0.75, 0.74, 0.76, 0.69, 0.63, 0.50, 0.66, 0.63, 0.76, 0.70, 0.70, 0.80, 0.74, 0.57, 0.71, 0.71, 0.60, 0.75, 0.56, 0.57]
  ];

  var years = {
    "1980": {
      "tech": [25],
      "other": [46]
    },
    "1981": {
      "tech": [82],
      "other": [110]
    },
    "1982": {
      "tech": [44],
      "other": [33]
    },
    "1983": {
      "tech": [194],
      "other": [257]
    },
    "1984": {
      "tech": [52],
      "other": [121]
    },
    "1985": {
      "tech": [42],
      "other": [145]
    },
    "1986": {
      "tech": [102],
      "other": [291]
    },
    "1987": {
      "tech": [69],
      "other": [216]
    },
    "1988": {
      "tech": [30],
      "other": [72]
    },
    "1989": {
      "tech": [39],
      "other": [74]
    },
    "1990": {
      "tech": [35],
      "other": [75]
    },
    "1991": {
      "tech": [103],
      "other": [183]
    },
    "1992": {
      "tech": [146],
      "other": [266]
    },
    "1993": {
      "tech": [154],
      "other": [355]
    },
    "1994": {
      "tech": [137],
      "other": [266]
    },
    "1995": {
      "tech": [226],
      "other": [235]
    },
    "1996": {
      "tech": [321],
      "other": [355]
    },
    "1997": {
      "tech": [194],
      "other": [280]
    },
    "1998": {
      "tech": [125],
      "other": [156]
    },
    "1999": {
      "tech": [382],
      "other": [95]
    },
    "2000": {
      "tech": [317],
      "other": [64]
    },
    "2001": {
      "tech": [29],
      "other": [50]
    },
    "2002": {
      "tech": [25],
      "other": [41]
    },
    "2003": {
      "tech": [26],
      "other": [37]
    },
    "2004": {
      "tech": [91],
      "other": [82]
    },
    "2005": {
      "tech": [61],
      "other": [98]
    },
    "2006": {
      "tech": [72],
      "other": [85]
    },
    "2007": {
      "tech": [94],
      "other": [65]
    },
    "2008": {
      "tech": [7],
      "other": [14]
    },
    "2009": {
      "tech": [17],
      "other": [24]
    },
    "2010": {
      "tech": [44],
      "other": [47]
    },
    "2011": {
      "tech": [44],
      "other": [37]
    },
    "2012": {
      "tech": [49],
      "other": [44]
    },
    "2013": {
      "tech": [84],
      "other": [73]
    },
    "2014": {
      "tech": [127],
      "other": [79]
    }
  };

  var chart = c3.generate({
    bindto: '#chart1',
    data: {
      x: 'x',
      columns: columns,
      type: 'line',
      colors: {
        'Tech and Biotech IPOs': '#777777',
        'Other IPOs': '#FF837E'
      }
    },
    axis: {
      x: {
        label: {
          text: 'Time [years]',
          position: 'outer-left'
        },
        type: 'timeseries',
        tick: {
          count: 6,
          format: '%Y',
        }
      },
      y: {
        label: {
          text: 'percentage of profitable ipos',
          position: 'outer-bottom'
        },
        type: 'percentage',
        tick: {
          count: 6,
          format: d3.format('%')
        }
      }
    },
    tooltip: {
      contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
        var out, row, x, _i, _len, name;
        x = d[0].x;
        name = defaultTitleFormat(x);

        out = '<table class="c3-tooltip"><tbody><tr><th colspan="2" class="topbar">' + defaultTitleFormat(x) + '</th></tr>';

        //valuations
        out += '<tr><th colspan="2">Number of IPOs</th></tr>';
        out += '<tr class="c3-tooltip-name"><td class="valuation">Tech and Biotech</td>';
        out += '<td class="value">' + years[name].tech[0] + '</td></tr>';
        out += '<tr class="c3-tooltip-name"><td class="valuation">Other</td>';
        out += '<td class="value">' + years[name].other[0] + '</td></tr>';

        //valuations
        out += '<tr><th colspan="2">% Profitable</th></tr>';
        for (_i = 0, _len = d.length; _i < _len; _i++) {
          row = d[_i];

          out += '<tr class="c3-tooltip-name-' + row.id + '"><td class="name">';
          out += '<span style="background-color:' + color(row.id) + '"></span><b>' + row.name + '</b></td>';
          out += '<td class="value"><b>' + defaultValueFormat(row.value) + '</b></td></tr>';
        }
        return out;
      }
    }
  });
});
