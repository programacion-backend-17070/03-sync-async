function hola2 (nombre) {
  return console.log(nombre)
}

// sintaxis mas corta y elegante para definir funciones

// variable - parametros - cuerpo

const hola = nombre => console.log(nombre)


const resultado = hola("Diego")

console.log(resultado)

const suma = (a, b) => a + b

const resultadoSuma = suma(2, 2)
console.log(resultadoSuma)

const alumno = () => ({ 
  nombre: "Antonio",
  edad: 24
})

const resultado3 = alumno()

console.log(resultado3)