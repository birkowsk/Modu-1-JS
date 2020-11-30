//Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."


//zła nazwa brak arraya w iput
// brak walidacji na arraya

const arrayTest = function (name) {
    if (typeof name !== 'string') {
        throw new Error("only string");
    }

    const arrayTable = ['Marian', 'Adam', 'Paweł', 'Jan', 'Karol', 'Ula', 'Tomek', 'Majonez', 'Pizza', 'Mutant', 'Klamka', 'Yeti', 'Zamek', 'Basen', 'Lama'].map(v => v.toLowerCase());

    for (var i = 0; i < arrayTable.length; i++) {
        if (arrayTable[i].indexOf(name) !== -1) {
            console.log(name + " contains in " + [i]);
        }
        console.log("Nie ma frazy")
    }
    return 'Test wykonany'

}
console.log(arrayTest("ma"));