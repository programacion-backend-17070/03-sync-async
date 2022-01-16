function hi (nombre) {
  console.log(nombre)
}

hi("Lalo")

const alumno = {
  nombre: "Lalo",
  edad: 29,
  language: "JavaScript",
  presentacion: function () {
    console.log(`Hola! Mi nombre es ${this.nombre}, tengo ${this.edad} años.
    Mi lenguage favorito es ${this.language}`)
  }
}


alumno.presentacion() // Diferencia entre THIS con function y arrow function