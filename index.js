const boton = document.getElementById('miBoton');
const texto = document.getElementById('textoOculto');

boton.addEventListener('mouseover', () => {
    texto.style.display = 'block';
});

boton.addEventListener('mouseout', () => {
    texto.style.display = 'none';
});