window.onload = function() {
    document.getElementById('mensajeConfirmacion').style.display = 'none';

    let pais = `us`;
    let key = 'ff619b19a0584f80af05230b56271ee0';
    let url = `https://newsapi.org/v2/top-headlines?category=sports&country=${pais}&apiKey=${key}`;
    let mostrarnoticias = document.getElementById('mostrarnoticias');

    fetch(url)
        .then((resp) => resp.json())
        .then(dato => {
            let noticias = dato.articles;  

            mostrarnoticias.innerHTML = `
                <h2 class="text-center my-4">Últimas Noticias</h2>
                <div class="container text-center">
                    <div class="row justify-content-center">
            `;

            noticias.forEach(function(noticia) {
                if (noticia.urlToImage && noticia.title && noticia.description) {
                    let div = document.createElement('div');
                    div.classList.add('col-12', 'col-md-6', 'd-flex', 'justify-content-center', 'mb-4');

                    div.innerHTML = `
                        <div class="card shadow-lg h-100" style="max-width: 600px; width: 100%;">
                            <img src="${noticia.urlToImage}" class="card-img-top" alt="Imagen noticia">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${noticia.title}</h5>
                                <p class="card-text flex-grow-1">${noticia.description}</p>
                                <a href="${noticia.url}" class="btn btn-primary mt-auto" target="_blank">Leer más</a>
                            </div>
                        </div>
                    `;

                    mostrarnoticias.querySelector('.row').appendChild(div);
                }
            });

            mostrarnoticias.innerHTML += `</div></div>`;
        });
};

function mostrarMensaje() {
    document.getElementById('mensajeConfirmacion').style.display = 'block';
}
