/*  Despliegue del nav  */
document.querySelector('.Marcas').addEventListener('click', () =>{document.querySelector('.lasMarcas').classList.toggle('show'); document.querySelector('.Marcas').classList.toggle('point');});

document.querySelector('.Productos').addEventListener('click', () =>{document.querySelector('.losProductos').classList.toggle('show'); document.querySelector('.Productos').classList.toggle('point');});

document.querySelector('.Ayuda').addEventListener('click', () =>{document.querySelector('.laAyuda').classList.toggle('show'); document.querySelector('.Ayuda').classList.toggle('point');});
/* Esconder anuncio de app */
document.querySelector('.app').addEventListener('click', () =>{document.querySelector('.app').classList.toggle('escondido');});