/**
 * Returns an abbreviated numeric value with an abbreviation.
 * Maximum supported number - `num < 1e39`
 * 
 * @param `num` - Numeric value to be formatted.
 * @param `fix` - Indicates the number of characters after the floating point.
 **/
export default (num: number, fix: number = 0): string => {
    const NUM_ABBR: string[] = ['', 'K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 'd', 'U']

    if (num >= 1e39) throw new Error('Maximum supported value is less than `1e39`')

    let index: number = Math.floor(Math.log(Math.abs(num)) / Math.log(1000))
    let result: number = Math.floor((num / Math.pow(1000, index)) * Math.pow(10, fix)) / Math.pow(10, fix)

    return `${result}${NUM_ABBR[index]}`
}


