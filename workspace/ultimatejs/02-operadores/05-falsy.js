// short-circuit

// Falso
// false
// 0
// "", ''
// null
// undefined
// NaN

// falso
let usuario = '';
let username = usuario || 'Anonimo';

console.log(username);

// si tuvieramos un usuario

/*
// verdadero
let usuario = 'Tapion805';
let username = usuario || 'Anonimo';

console.log(username);
*/

// verdadero
function fn1() {
    console.log('Soy funcion 1');
    return true;
};

function fn2() {
    console.log('Soy funcion 2');
    return true;
};

/*
// falso
function fn1() {
    console.log('Soy funcion 1');
    return false;
};

function fn2() {
    console.log('Soy funcion 2');
    return rue;
};
*/

let x = fn1() && fn2();