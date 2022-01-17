const operacion = (a, b, cb) => cb(a, b)

const suma = operacion(4, 2, (a, b) => a + b)
const resta = operacion(4, 2, (a, b) => a - b)

console.log(suma)
console.log(resta)