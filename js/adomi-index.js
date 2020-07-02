/*  Desplazamiento del Form *//*
document.querySelector('.pri').addEventListener('click', () =>{document.querySelector('.despla').classList.toggle('zable');});*/

/*  Despliegue del nav  */
document.querySelector('.Marcas').addEventListener('click', () =>{document.querySelector('.lasMarcas').classList.toggle('show'); document.querySelector('.Marcas').classList.toggle('point');});

document.querySelector('.Productos').addEventListener('click', () =>{document.querySelector('.losProductos').classList.toggle('show'); document.querySelector('.Productos').classList.toggle('point');});

document.querySelector('.Ayuda').addEventListener('click', () =>{document.querySelector('.laAyuda').classList.toggle('show'); document.querySelector('.Ayuda').classList.toggle('point');});

/*  Despliegue de Categorias-Departamentos  */
document.querySelector('.comoamazon, .falso').addEventListener('click', () =>{ document.querySelector('.envoltura').classList.toggle('noshow');});

/*  Menu de mobile */
document.querySelector('.menu').addEventListener('click', () =>{ document.querySelector('.UlNavPrincipal').classList.toggle('show');console.log('cliqueado')});
