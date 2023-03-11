let analyzeArray = require('./analyzeArray');

test('Function Output', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})

test('Check if array', () => {
    expect(analyzeArray('string')).toBe('Not an array');
})
test('Check if array values are numbers', () => {
    expect(analyzeArray([[1, 8, 3, 4, 2, 'string']])).toBe('Not an array');
})

