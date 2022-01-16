// encadenamiento de Promesas

// nuestro de pedir comida en la fila, podemos separar las operaciones que hacemos ahi de manera de promesas
// 1. pedir la comida al cajero
// 2. Pagar la comida
// 3. Recibir pedido

// para encadenar, en el then siempre hay que regresar un valor
Promise.resolve({ status: "NA", cantidad: 0, listo: false, pagado: false })
  .then(res => {
    res.status = "RECIBIDO"
    res.cantidad = 89

    if (res.cantidad > 90) {
      throw new Error("muy caro")
    }
    return res
  })
  .then(res => {
    res.pagado = true
    res.status = "PAGADO"
    return res
  })
  .then(res => {
    res.listo = true
    return res
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))

  // llamar catch


// node.js single thread
// event loop