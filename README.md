unique-colors
=============

It uses [CMC(I:c)](http://en.wikipedia.org/wiki/Color_difference#CMC_l:c_.281984.29) color differencing algorithm to procedurally generate a set of visually-distinguishable colors. Actually 92 different colors are precomputed and only used when needed.

## Including in a browser

Download tinycolor.js or install it with bower:

```
bower install spini/unique-colors
```

Then just include it in the page in a script tag:

```
<script src='(...)/unique-colors.js'></script>
```

## APIs

### `unique_colors(n)`
Returns an array containing n different hex color codes (always the same ones).

### `unique_shuffled_colors(n)`
Returns an array containing n different and shuffled hex color codes.



