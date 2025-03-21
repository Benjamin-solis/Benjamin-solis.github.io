window.onload = function() {
    document.getElementById('mensajeConfirmacion').style.display = 'none';

    let pais = `us`;
    let key = 'ff619b19a0584f80af05230b56271ee0';
    let url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${key}`;
    let mostrarnoticias = document.getElementById('mostrarnoticias');

    fetch(url)
        .then((resp) => resp.json())
        .then(dato => {
            console.log(dato);
            let noticias = dato.articles;
            noticias.map(function(numero){
                let div = document.createElement('div'); // Cambié 'noticias' por 'div'
                div.innerHTML = `
                    <br>
                    <img style="max-width:800px" src="${numero.urlToImage}" alt="news image"> <br>
                    <h1>${numero.title}</h1>
                    <h2>${numero.description}</h2>
                    <h3><a href="${numero.url}" target="_blank">Read more</a></h3>`;
                mostrarnoticias.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
};

function mostrarMensaje() {
    document.getElementById('mensajeConfirmacion').style.display = 'block';
}
