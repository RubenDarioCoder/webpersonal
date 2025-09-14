// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Manejo del formulario de contacto
  const formularioContacto = document.getElementById('formulario-contacto');
  const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
  
  if (formularioContacto) {
    formularioContacto.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aquí normalmente enviarías los datos a un servidor
      // Por ahora solo mostraremos un mensaje de confirmación
      mensajeConfirmacion.classList.remove('mensaje-oculto');
      formularioContacto.reset();
      
      // Ocultar el mensaje después de 5 segundos
      setTimeout(function() {
        mensajeConfirmacion.classList.add('mensaje-oculto');
      }, 5000);
    });
  }
  
  // Navegación suave al hacer clic en los enlaces del menú
  document.querySelectorAll('.navegacion-principal a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      
      const objetivo = document.querySelector(this.getAttribute('href'));
      if (objetivo) {
        objetivo.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});