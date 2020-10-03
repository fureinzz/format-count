import Chai from 'chai'
import formatCount from '../src/index'

const assert = Chai.assert

describe('format-count', () => {
    it('Should return a number with an abbreviation.', () => {
        assert.equal(formatCount(999), '999')
        assert.equal(formatCount(1999), '1K')
        assert.equal(formatCount(1e6), '1M')
        assert.equal(formatCount(1e9), '1B')
        assert.equal(formatCount(1e12), '1T')
        assert.equal(formatCount(1e15), '1q')
        assert.equal(formatCount(1e18), '1Q')
        assert.equal(formatCount(1e21), '1s')
        assert.equal(formatCount(1e24), '1S')
        assert.equal(formatCount(1e27), '1O')
        assert.equal(formatCount(1e30), '1N')
        assert.equal(formatCount(1e33), '1d')
    })
    it('If you specify the fix parameter, the result must be a floating-point number with `N` characters after it', () => {
        assert.equal(formatCount(999, 2), '999')
        assert.equal(formatCount(1233, 2), '1.23K')
        assert.equal(formatCount(2887, 3), '2.887K')
        assert.equal(formatCount(1002343, 4), '1.0023M')
    })
    it('Result must be in a string format.', () => {
        assert.isString(formatCount(1e10))
    })
    it('Should return an error if the number exceeds the maximum allowed.', () => {
        assert.throws(() => formatCount(1e39), Error, /Maximum supported value is less than `1e39`/)
    })
})