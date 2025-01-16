/**
 * Crear algoritmo que devuelva numero
 * menor y mayor de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = array[0];
    let mayor = array[0];

    for (numero of arr ) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
}

let numero = getMenorMayor(array);

console.log(numero);