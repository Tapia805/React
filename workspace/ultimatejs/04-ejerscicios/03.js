/**
 * indice validar que no sea menor a cero y que el
 * elemnto exista en el array
 */

function ejercicioTres(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existente';
    }

    return arr[idx];
}

let resultado = ejercicioTres([1, 2, 3, 4, 5], 4);
console.log(resultado);