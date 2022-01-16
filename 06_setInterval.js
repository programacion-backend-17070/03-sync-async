const intervalo = setInterval(() => console.log("hola"), 2000)
console.log(intervalo)

setTimeout(() => clearInterval(intervalo), 10000)