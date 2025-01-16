function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);

/* Aqui lo que hicimos fue llamar a un if y preguntarle si el valor de a es mayor a b, retorna a, pero sino, retorna b
*/

// per hay una manera mas corta de hacer esto

/* Y es que en vez de ejecutar ese if else, ejecutemos el operador ternario;
    return (a > b) ? a : b; 
*/