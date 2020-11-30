// Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. Funkcja powinna zwrócić Twój aktualny wiek niezależnie od typu inputa, który weźmie

function countAge(input) {
    const year = new Date().getUTCFullYear();

    const numberInput = typeof input === "number"
    const stringInput = typeof input === "string" && input.length === 4;
    const dateInput = typeof input === "object";

    if (dateInput) {
        const inputYear = input.getUTCFullYear();
        return year - inputYear;
    }

    if (input > year) {
        throw new Error("Wrong age");
    }

    return year - input;
}

const result1 = countAge(new Date(1990, 1, 1));
const result2 = countAge("1990");
const result3 = countAge(1990);

console.log(result1, result2, result3);

  // wyniki result1, result2 i result3 mają być identyczne
