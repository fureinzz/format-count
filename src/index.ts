/**
 * Returns an abbreviated numeric value with an abbreviation.
 * Maximum supported number - `10e63`
 * 
 * @param `num` - Numeric value to be formatted.
 * @param `fix` - Indicates the number of characters after the floating point.
 **/
export default (num: number, fix: number = 0): string => {
    const NUM_ABBR: string[] = ['', 'K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 'd', 'U', 'D', 'Tre', 'Qua', 'Qui', 'SE', 'SEP', 'OC', 'NV', 'VIG']

    let index: number = Math.floor(Math.log(Math.abs(num)) / Math.log(1000))
    let result: string = (num / Math.pow(1000, index)).toFixed(fix)

    return result += NUM_ABBR[index]
}


