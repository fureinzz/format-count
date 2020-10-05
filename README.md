# format-count


![](https://github.com/fureinzz/format-count/blob/master/example/format-count.example.png?raw=true)

`format-count` - An incredibly easy-to-use function that returns the passed number with an abbreviation.

All you need to get the desirable result is  to pass a number to the function and the optional `fix` parameter, which indicates the number of digits after the floating point.

## Arguments
**Attention**: the maximum supported number for the `num` parameter is `1e39`, since mathematical operations with large numbers in JS have inaccuracies that can lead to an erroneous result.

*  `num: Number` - Numeric value to be formatted.
*  `fix?: Number` - Specifies the number of digits after the decimal point. Default value is `0`

## Installation
We recommend using `npm` for installation

```
npm install format-count
```
 