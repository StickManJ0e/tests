let capitalize = require('./capitalize');

test('All lowercase string', () => {
    expect(capitalize('ripppp')).toBe('Ripppp');
})

test('All uppercase string', () => {
    expect(capitalize('RIPPPP')).toBe('Ripppp');
})

test('Mixed string', () => {
    expect(capitalize('rIpPpP')).toBe('Ripppp');
})