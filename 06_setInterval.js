const intervalo = setInterval(() => console.log("ejecutando"), 2000)


setTimeout(() => {
  clearInterval(intervalo)
  console.log("terminado")
}, 9000)