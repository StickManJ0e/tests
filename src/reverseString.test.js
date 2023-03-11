let reverseString = require('./reverseString');

test('Reverses one word', () => {
    expect(reverseString('peanuts')).toBe('stunaep');
})

test('Reverses multiple word', () => {
    expect(reverseString('peanut jam')).toBe('maj tunaep');
})

test('Reverses multiple word and punctuation', () => {
    expect(reverseString('peanut! jam!')).toBe('!maj !tunaep');
})

test('Reverses empty string', () => {
    expect(reverseString('')).toBe('');
})