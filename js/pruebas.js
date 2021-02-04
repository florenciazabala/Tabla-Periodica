
function obtenerSVG (){
    document.querySelectorAll('svg[data-src]').forEach(svg => {
        // Cargamos el contenido en su HTML interno 
        fetch(svg.dataset.src)
          .then(respuesta => respuesta.text())
          .then(xml => svg.innerHTML = xml);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    obtenerSVG ();
    
});

function init(evt) {
    let svgDocument = evt.target.ownerDocument;
    let svgRoot = svgDocument.documentElement;
    mostrarElemento(svgRoot);
    
}


function mostrarElemento(x){
    const $imagenElemento = document.querySelector('#imagenElemento');
    console.log(document.querySelectorAll('g'));
    $(x).ready(function(){
        $('#box > g').click(function(){
            let $idElemento = $(this).attr('id');
            $imagenElemento.src= "imagenes/"+$idElemento+".svg";
            console.log("fgh");
        })
    });

}


