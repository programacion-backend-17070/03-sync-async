// const callback = () => console.log("fui llamada")

// const unaFunction = (nombre, cb) => {
//   console.log(nombre)
//   cb()
// }

// unaFunction("Lucas", callback)

function pedido(nombre, cb) {
  console.log("Preparando: " + nombre)
  const resultado = nombre
  const error = null
  cb(error, resultado)
}


pedido("Paquete 5", (err, resultado) => {
  if (error === null) {

  } else {
    //
  }
  console.log("Comer: " + resultado)
})
