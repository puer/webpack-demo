const chalk = require('chalk')

function sum(a, b) {
    return a + b;
}
const func2 = (a, b) => {
    console.log(chalk.blue('substract', b, 'from', a))
    console.log(chalk.red('substract', b, 'from', a))
    console.log(chalk.white('substract', b, 'from', a))
    console.log(chalk.gray('substract', b, 'from', a))
    console.log(chalk.black('substract', b, 'from', a))
    console.log(chalk.yellow('substract', b, 'from', a))
    return a - b;
}

const b = { a: null }
describe('demo', () => {
    test('sum 1 and 2', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test('null and undefined', () => {
        expect(b.a).toBe(null)
        expect(typeof b.c).toEqual('undefined')
        expect(b.a === null).toBe(true)
        expect('d' in b).toBe(false)
        expect('a' in b).toBe(true)
        expect(b.c == undefined).toEqual(true)
        expect(b.c === undefined).toEqual(true)
        expect(b.c === null).toEqual(false)
        expect(b.c == null).toEqual(true)
        expect(!(b.c)).toEqual(true)
        expect(!!(b.c)).toEqual(false)
    })
    it('function 2', () => {
        func2(3, 4)
    })
})

