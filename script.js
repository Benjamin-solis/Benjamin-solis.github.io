// Al cargar la página, aseguramos que el mensaje esté oculto
window.onload = function() {
    document.getElementById('mensajeConfirmacion').style.display = 'none';
};

// Función que muestra el mensaje de confirmación
function mostrarMensaje() {
    // Mostrar el mensaje de confirmación
    document.getElementById('mensajeConfirmacion').style.display = 'block';
}

