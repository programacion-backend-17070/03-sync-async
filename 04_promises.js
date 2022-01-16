
function division (a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0) {
      reject("No se puede dividir entre 0")
    } else {
      resolve(a / b)
    }
  })
}

const promise1 = division (0, 1).catch(err => console.log(err))
const promise2 = division (1, 1).then(res => console.log(res))

// cuando usarlas
// cuando tengas operaciones asincronas
// cuando quieras convertir operaciones sincronas en asincronas

