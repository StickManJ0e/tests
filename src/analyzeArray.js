let analyzeArray = (array) => {
    if (!Array.isArray(array) || !array.every(num => typeof num == 'number')) return 'Not an array';

    let arrayLength = array.length;
    let arrayAverage = (array.reduce((sum, num) => sum + num)) / arrayLength;
    let arrayMin = Math.min(...array);
    let arrayMax = Math.max(...array);

    let object = {
        average: arrayAverage,
        min: arrayMin,
        max: arrayMax,
        length: arrayLength,
    };

    return object;
}

module.exports = analyzeArray;