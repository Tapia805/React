let user = {
    id: 1,
    nombre: 'Tapia',
    edad: 21,
}

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

// iterando listado con for in
let animales = ['mosca', 'pito', 'pez globo'];
for (let animal in animales) {
    console.log(animal, animales[animal]);
}