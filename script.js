window.onload = function() {
    document.getElementById('mensajeConfirmacion').style.display = 'none';
};

function mostrarMensaje() {
    document.getElementById('mensajeConfirmacion').style.display = 'block';
}

let key = 'ff619b19a0584f80af05230b56271ee0';
let url = `GET https://newsapi.org/v2/top-headlines?country=ch&apiKey=ff619b19a0584f80af05230b56271ee0
`;
