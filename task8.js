// za pomocą metody .reduce wbudowanej w array
// odtwórz działanie innych metod:

const test = [1, 2, 3, 4, 5]

function mapFn(array, callback) {
    return array.reduce((accumulator, currentValue, index, array) => [...accumulator, callback(currentValue, index, array)], [])
}

// mapFn(test, (element, index, array) => {
//     console.log(element);
// })

function filterFn(array, callback) {
    const emptyArray = [];

    return array.reduce((accumulator, currentValue, index, array) => {
        const condition = callback(currentValue, index, array);
        if (condition) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, emptyArray);
}
// filterFn(test, (element, index, array) => {
//     return element > 3;
// });



function everyFn(array, callback) {

    return array.reduce((acc, cr, index, array) => {
        if (!callback(cr, index, array)) {
            array.splice(index, 1);
            return false;
        }
        return acc;
    }, true);
}
// everyFn(test, (element, index, array) => {
//     console.log(element > 3);
//     return element > 3;
// });



function someFn(array, callback) {

    return array.reduce((acc, cr, index, array) => {
        if (callback(cr, index, array)) {
            array.splice(index, 1);
            return true;
        }
        return acc;
    }, false);
}

// someFn(test, (element, index, array) => {
//     console.log(element > 3);
//     return element > 3;
// });