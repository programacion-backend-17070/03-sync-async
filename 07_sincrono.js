const A = () => console.log("A")
const B = () => console.log("B")
const C = () => console.log("C")
const D = () => console.log("D")


function secuencia() {
  A()
  B()
  C()
}

secuencia()

// call stack
// C
// B
// A
// secuencia
