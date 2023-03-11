let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarCipher(string, key) {
    string = string.split("").map(char => {
        if (alphabet.includes(char.toLowerCase())) {
            let index = alphabet.indexOf(char.toLowerCase());
            char = (index + key <= 25) ? alphabet[index + key] : alphabet[(index + key) - 26];
            return char;
        } 
        return char;
    }).join("");

    return string;
}

module.exports = caesarCipher;