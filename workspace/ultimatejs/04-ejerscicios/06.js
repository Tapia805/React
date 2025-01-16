/**
 * Crear allgoritmo que devuelva cuanto
 * numeros positivos hay en un arrray.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidad = 0;

    for (elemento of arr) {
        if (elemento > 0) {
            cantidad++;
        }
    }
    return cantidad;    
}

let numero = cuantosPositivos(array);
console.log(numero);