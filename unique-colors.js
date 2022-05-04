
/**
 * expose module
 *
 */

var exports;

if( typeof module !== 'undefined' && module.exports ) {
  exports = module.exports;
} else {
  exports = window;
}

/**
 * unique_colors
 *
 */

(function (global) {
  var colors = [
    '#ff0066',
    '#ffcc00',
    '#3d9df2',
    '#e673cf',
    '#8800cc',
    '#005fb3',
    '#a69d7c',
    '#8c3f23',
    '#397358',
    '#594358',
    '#30403d',
    '#0d2b33',
    '#ffbffb',
    '#ffd580',
    '#00e2f2',
    '#9173e6',
    '#a099cc',
    '#5995b3',
    '#994d6b',
    '#2d2080',
    '#736039',
    '#0c0059',
    '#00401a',
    '#1a3320',
    '#f240ff',
    '#ff8800',
    '#00f2c2',
    '#e59173',
    '#3347cc',
    '#18b300',
    '#269954',
    '#205380',
    '#733d00',
    '#161f59',
    '#364010',
    '#332b1a',
    '#0000ff',
    '#ffc8bf',
    '#79f299',
    '#0000d9',
    '#99cca7',
    '#b29559',
    '#8c004b',
    '#7f7700',
    '#730000',
    '#305900',
    '#402200',
    '#331a1a',
    '#bfe1ff',
    '#ff0000',
    '#baf279',
    '#a3d5d9',
    '#cc8533',
    '#b38686',
    '#59468c',
    '#7f4840',
    '#66001b',
    '#134d49',
    '#401100',
    '#40bfff',
    '#ff8080',
    '#def2b6',
    '#d94c36',
    '#cc5200',
    '#a67c98',
    '#23858c',
    '#6d1d73',
    '#005266',
    '#4d3e39',
    '#330014',
    '#73ff40',
    '#f2b6c6',
    '#f2d6b6',
    '#cc3347',
    '#0000bf',
    '#29a68d',
    '#8c6246',
    '#565a73',
    '#57664d',
    '#400033',
    '#331a31',
    '#ccff00',
    '#f279aa',
    '#f20000',
    '#cc0088',
    '#b2bf00',
    '#95a653',
    '#8c7769',
    '#566973',
    '#592d39',
    '#002240',
    '#070033'
  ];

  global.unique_colors = function (n) {
    n = n || colors.length;

    if (n > 92) {
      throw new Error('n <= 92');
    }

    return colors.slice(0, n);
  };

  global.unique_shuffled_colors = function (n) {
    n = n || colors.length;

    if (n > 92) {
      throw new Error('n <= 92');
    }

    var i;
    var shuffle = [];
    var result = [];
    for (i = 0; i < n; i += 1) {
      shuffle.push([Math.floor(Math.random() * n), i]);
    }

    shuffle.sort(function (a,b) {
      return  a[0] - b[0];
    });

    for (i = 0; i < n; i += 1) {
      result.push(colors[shuffle[i][1]]);
    }

    return result;
  };

    /**
   * opacity value (0..1)
   *
   */
  global.unique_colors_with_opacity = function (n, opacity ) {
    
    if (opacity < 0 || opacity > 1) {
      throw new Error(' 0 <= opacity <= 1');
    }
    
    var alpha = Math.floor(opacity * 255).toString(16).padStart(2, 0);
    return global.unique_colors(n).map(function(x){return x+alpha});
  };

  global.unique_shuffled_colors_with_opacity = function (n, opacity ) {
    
    if (opacity < 0 || opacity > 1) {
      throw new Error(' 0 <= opacity <= 1');
    }

    var alpha = Math.floor(opacity * 255).toString(16).padStart(2, 0);
    return global.unique_shuffled_colors(n).map(function(x){return x+alpha});
  };

 })(exports);
