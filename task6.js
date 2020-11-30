// stwórz funkcję agregującą array aggregateIntoChunks w losowej długości chunki
// każdy chunk powienien mieć od 4 do 7 elementów
// ostatni chunk też powinien być długości od 4 do 7


var alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function aggregateIntoChunks(alfabet) {
    return alfabet.reduce(function (accumulator, currentValue, index, array) {
        const x = Math.floor(Math.random() * (7 - 4) + 4);
        const test = alfabet.splice(0, x);
        accumulator.push(test);

        return accumulator
    }, [])
}

const chunks = aggregateIntoChunks(alfabet)
console.log(chunks);


