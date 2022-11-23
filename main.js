function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTecla = document.querySelectorAll('.tecla');

while (0) {
    listaDeTecla[0].onclick = tocaSomPom;
}
