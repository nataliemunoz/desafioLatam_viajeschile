
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#enviarCorreo').click(function() {
    // Mostramos la alerta con el mensaje deseado
    alert("El Formulario fue enviado correctamente...");
  });