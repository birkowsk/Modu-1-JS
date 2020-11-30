// Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego

function buildTriangle(x1, x2, x3) {

    const validNumber = typeof (x1, x2, x3) == 'number'

    if (!validNumber) {
        throw new Error('bad values');
    }
    const [a, b, c] = [...arguments].sort();

    const Triangle = a + b > c
    if (!Triangle) {
        throw new Error("You can't built triangle");
    }

    return [a, b, c][0] ** 2 + [a, b, c][1] ** 2 == [a, b, c][2] ** 2

}

const cond1 = buildTriangle(3, 4, 5)
const cond2 = buildTriangle(4, 3, 5)

const cond3 = buildTriangle(4, 3, 5)
const cond4 = buildTriangle(4, 4, 4)

console.log(cond1);
console.log(cond4);