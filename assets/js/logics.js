
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#enviarCorreo').click(function() {
    // Mostramos la alerta con el mensaje deseado
    alert("El Formulario fue enviado correctamente...");
  });

// Agrega el evento de scroll suave a los enlaces de la navbar
document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target.getAttribute('href');
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });