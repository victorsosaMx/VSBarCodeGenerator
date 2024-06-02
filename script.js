  // Agregar un controlador de eventos al botón "Generar"
  document.getElementById('generar').addEventListener('click', function() {
    var codigo = document.getElementById('codigo').value;
    // Validar que el código ingresado no esté vacío
    if (codigo) {
        // Utilizar la librería JSBarcode para generar y mostrar el código de barras
        JsBarcode("#codigoBarras", codigo, {
            format: "CODE128",
            width: 2,
            height: 100,
            displayValue: true
        });
    } else {
        // Mostrar un mensaje de error si el código ingresado está vacío
        alert("Por favor, ingrese un código válido.");
    }
});