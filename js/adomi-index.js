/*  menu por departamentos(boton) */
document.querySelector('.depboton').addEventListener('click', () =>{ document.querySelector('.envoltura').classList.toggle('show'); document.querySelector('.depboton').classList.toggle('show');});

/*  Menu de mobile (boton)*/
document.querySelector('.mobmenu').addEventListener('click', () =>{document.querySelector('body').classList.toggle('active');})
