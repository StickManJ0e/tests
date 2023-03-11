let calculator = require('./calculator');

describe('add', () => {
    test("Adds 2 positive integers", () => {
        expect(calculator.add(2, 6)).toBe(8);
    });
    test("Adds 2 negative integers", () => {
        expect(calculator.add(-3, -4)).toBe(-7);
    });
    test("0", () => {
        expect(calculator.add(0, 0)).toBe(0);
    });
});

describe('subtract', () => {
    test('Subtract 2 positive integers', () => {
        expect(calculator.subtract(2, 6)).toBe(-4);
    });
    test('Subtract 2 negative integers', () => {
        expect(calculator.subtract(-2, -8)).toBe(6);
    });
})

describe('divide', () => {
    test('Divide by 0', () => {
        expect(calculator.divide(7, 0)).toBe(Infinity);
    });
    test('Divide by factors', () => {
        expect(calculator.divide(14, 2)).toBe(7);
    })
    test('Divide by non factors', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
    })
})

describe('multiply', () => {
    test('Multiply by 0', () => {
        expect(calculator.multiply(1, 0)).toBe(0);
    })
    test('Multiply by positive integers', () => {
        expect(calculator.multiply(7, 4)).toBe(28);
    })
    test('Multiply by negative integers', () => {
        expect(calculator.multiply(7, -4)).toBe(-28);
    })
})