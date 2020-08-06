
document.querySelector('.depboton').addEventListener('click', () =>{ document.querySelector('.envoltura').classList.toggle('show'); document.querySelector('.depboton').classList.toggle('show');});

/*Rotacion de palabras*/
var texto = document.getElementById('mensaje');
var palabra = texto.getElementsByTagName('span');
var i = 0;

function rotador(){
    palabra[i].style.display = 'none';
    i = (i + 1) % palabra.length;
    palabra[i].style.display = 'initial';
}
setInterval(rotador, 1500);


/*  Menu de mobile */
document.querySelector('.mobmenu').addEventListener('click', () =>{document.querySelector('.mobmenu').classList.toggle('active');})
