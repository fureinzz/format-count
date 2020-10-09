/**
 * Returns an abbreviated numeric value with an abbreviation.
 * Maximum supported number - `num < 1e39`
 *
 * @param `num` - Numeric value to be formatted.
 * @param `fix` - Indicates the number of characters after the floating point.
 **/
declare const formatCount: (num: number, fix?: number) => string;
export default formatCount;
