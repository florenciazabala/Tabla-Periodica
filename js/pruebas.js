
function load (){
    document.querySelectorAll('svg[data-src]').forEach(svg => {
        // Cargamos el contenido en su HTML interno 
        fetch(svg.dataset.src)
          .then(respuesta => respuesta.text())
          .then(xml => svg.innerHTML = xml);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    load();
    // Buscamos cada elemento svg con el atributo "src" 
    
});





