const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');

document.addEventListener('DOMContentLoaded',()=> {
    mostrarMenu();
    cerrarMenu();
    fechaActual();
})


function mostrarMenu() {
    hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('ocultar');
    });
}

function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(section);
            if (e.target.tagName === 'A') {
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(section) {
    section.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual() {
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}