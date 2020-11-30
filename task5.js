// Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85), phoneNr:random 9 numbers ,country:oneOf([PL,UK,USA])}
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

const humanApi = require('./generated.json');
const { v4: uuidv4 } = require('uuid');
const countries = ["PL", "UK", "USA"];


function generateHuman(humanApi) {
    const _id = uuidv4()

    function searchRandom(array_length) {
        return Math.floor(Math.random() * array_length);
    }

    const selectHuman = humanApi[searchRandom(humanApi.length)]
    const country = countries[searchRandom(countries.length)];

    const { name, email, age, phone } = selectHuman

    const human = {
        _id,
        name, email, age, phone,
        country
    }
    return human
}

console.log(generateHuman(humanApi))