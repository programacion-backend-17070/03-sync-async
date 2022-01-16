
function procesoLargo(path, cb) {
  // hacer algo con path
  cb()
}

// estamos en la fila de la comida rapida, queremos pedir un KFC
// hacemos el pedido de una cubeta de 16 piezas con pure y unos popcorn chicken
// La preparacion del pollo dura aproximadamente 15 minutos.
// pedimos, pagamos, esperamos

function prepararKFC(pedido, cb) {
  console.log(pedido);
  const resultado = pedido
  const error = null;
  cb(error, resultado);
}

prepararKFC("Pollo", (error, res) => {
  // tratamiento de error
  console.log(res)
});


