// Cuales son los numeros pares, del uno al diez

let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
}

console.log('Fuera del ciclo while loop');