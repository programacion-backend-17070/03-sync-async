const operacion = (a, b, cb) => cb(a,b)

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

console.log(operacion(4,2, suma))
console.log(operacion(4,2, resta))
console.log(operacion(4,2, mul))
console.log(operacion(4,2, div))
