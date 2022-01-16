// setTimeout(() => console.log(this), 3000);
// setTimeout(function() {
//   console.log("despues de 4000ms")
//   console.log(this)
// }, 4000)
// console.log("hola")

class Alumno {
  constructor() {
    this.nombre = "Alumno"
    this.edad = 19
  }

  presentarse() {
    setTimeout(() => {
      console.log(this)
      console.log(this.nombre)
    }, 2000)
  }

  presentarse2() {
    setTimeout(function() {
      console.log(this)
      console.log(this.nombre)
    }, 2000)
  }
}

const alumno = new Alumno()
alumno.presentarse2()
alumno.presentarse()