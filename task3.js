// Wygeneruj tablicę zawierającą X całkowitych liczb losowych z zakresu min i max oraz tablicę zawierającą 10 takich tablic

function randomArray(howManyNumbers = 10, min = 1, max = 10) {
    const tenArray = new Array(howManyNumbers);
    const emptyArray = tenArray.fill(0);
    const randomArray = emptyArray.map(i => Math.floor(Math.random() * max) + min)
    return randomArray;
}
const newArray = randomArray();

function arrayArrays(howManyArrays = 10) {
    const newArray = new Array(howManyArrays);
    const arrayInArray = [...newArray];
    return arrayInArray.map(function (x) { return x = randomArray() })
}

console.log(arrayArrays());



