/*  Desplazamiento del Form *//*
document.querySelector('.pri').addEventListener('click', () =>{document.querySelector('.despla').classList.toggle('zable');});*/

/*  Despliegue del nav  *//*
document.querySelector('.Marcas').addEventListener('click', () =>{document.querySelector('.lasMarcas').classList.toggle('show'); document.querySelector('.Marcas').classList.toggle('point');});

document.querySelector('.Productos').addEventListener('click', () =>{document.querySelector('.losProductos').classList.toggle('show'); document.querySelector('.Productos').classList.toggle('point');});

document.querySelector('.Ayuda').addEventListener('click', () =>{document.querySelector('.laAyuda').classList.toggle('show'); document.querySelector('.Ayuda').classList.toggle('point');});*/

/*  Despliegue de Categorias-Departamentos  */
document.querySelector('.comoamazon').addEventListener('click', () =>{ document.querySelector('.envoltura').classList.toggle('noshow');});


/*  Menu de mobile */


var enlace = document.querySelector('.comoamazon');
var infor = enlace.textContent;


function desvio(){
    if(enlace.textContent === 'Products'){
        console.log('esta vacio');
    }
    else{console.log('esta vacio pero no como piensas')}
}

enlace.addEventListener('click', desvio);

