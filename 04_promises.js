
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0) {
      reject("No se puede dividir 0")
    } else {
      resolve(a / b)
    }
  })
}

// catch
// then
// finally

dividir(1, 1)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("terminado"))
