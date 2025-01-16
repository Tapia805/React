/**
 *  crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    nombre: 'Tapia',
}, {
    id: 2,
    nombre: 'Luis',
}, {
    id: 3,
    nombre: 'Angel',
}];

let pares = [
    [1, {id: 1, nombre: 'Tapia'}],
    [2, {id: 2, nombre: 'Luis'}],
    [3, {id: 3, nombre: 'Angel'}],
];

function toPairs () {}

let resultado = toPairs(array);
console.log(resultado);