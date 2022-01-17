Promise.resolve({ status: "NA", cantidad: 0, listo: false, pagado: false })
  .then(res => {
    res.status = "RECIBIDO"
    res.cantidad = 89
    return res
  })
  .then(res => {
    res.pagado = true
    res.status = "PAGADO"
    if (res.status !== "PAGADO") {
      throw new Error("NO PAGADO")
    }
    return res
  })
  .then(res => {
    res.listo = true
    res.status = "LISTO"
    return res
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("secuencia finalizada"))
