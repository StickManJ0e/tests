let caesarCipher = require('./caesarCipher');

test('One word', () => {
    expect(caesarCipher('StringTestZ', 2)).toBe("uvtkpivguvb");
})

test('Phrase with punctuation word', () => {
    expect(caesarCipher('Happy, Life!', 7)).toBe("ohwwf, spml!");
})

test('High shift key', () => {
    expect(caesarCipher('This is the bane of my existence :(', 25)).toBe("sghr hr sgd azmd ne lx dwhrsdmbd :(");
})