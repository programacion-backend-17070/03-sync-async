function A() {
  // tarda en ejecutarse y despues se completa
  setTimeout(() => console.log("function A"), 5000)
}

console.log("inicio de programa")

A()

console.log("fin de programa")

