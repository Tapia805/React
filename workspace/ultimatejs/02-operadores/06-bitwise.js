// decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// binario: 0 , 1
// bit: 0 , 1
// byte: 8 bits
// byte: 00000000 -> 0
// byte: 00000001 -> 1
// byte: 00000010 -> 2
// byte: 00000011 -> 3
// byte: 00000100 -> 4
// byte: 00000101 -> 5
// byte: 00000110 -> 6
// byte: 00000111 -> 7
// byte: 00001000 -> 8
// byte: 00001001 -> 9
// byte: 00001010 -> 10

console.log(1 | 3); // 0000011 -> 3, este es el valor que da
console.log(1 | 4); // 0000101 -> 5

console.log(1 & 3); // 00000001 -> 1
console.log(1 & 4); // 00000000 -> 0