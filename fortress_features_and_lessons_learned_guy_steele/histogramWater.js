var histogramWater = function(data) {
  // { '0': 1, '2': 1, '4': 1, '6': 1, '8': 1, '10': 1 }
  var distribution = {};
  distribution = data.reduce(function(a, b) {
    a[b] = a[b] ? ++a[b] : 1;
    return a;
  }, {});
  console.log(distribution);

  // [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ]
  var histogram = [];
  histogram = Object
    .keys(distribution)
    .reduce(function(a, b) {
      a[b] = distribution[b];
      return a;
    }, []);
  for (i = 0; i < histogram.length; i++) {
    if (!histogram[i]) {
      histogram[i] = 0;
    }
  }
  console.log(histogram);

  // 5
  var volume = 0;
  volume = histogram
    .map(function(e, i, c, a) {
      // left & right
      var maxs = c.reduce(function(a, b, ri, ra) {
        //      console.log(a, b);
        if (ri < i) {
          a[0] = Math.max(a[0], b - e);
        } else {
          a[1] = Math.max(a[1], b - e);
        }
        return a;
      }, [0, 0]);
      var lmax = maxs[0];
      var rmax = maxs[1];

      // console.log(e, lmax, rmax);

      var max = Math.max(0, Math.min(lmax, rmax));
      return max;

    })
    .reduce(function(a, b) {
      return a + b;
    }, 0);

  // console.log(volume);
  // return volume;
};

// Show
var tests = [
  {
    t: [0,2,2,4,4,6,6,8,10],
    e: 7
  },
  {
    t: [0,2,2,4,4,6,6,8,10],
    e: 5
  },
  {
    t: [1],
    e: 0
  },
  {
    t: [0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,9,10],
    e: 0
  }
];

for (var i = 0; i < tests.length; i++) {
  console.log(tests[i]);
  //  console.log(i, tests[i].e, histogramWater(tests[i].t));
  histogramWater(tests[i].t);
}
