
/*
function mostrarElemento(){
    const $imagenElemento = document.querySelector('#imagenElemento');
    $(document).ready(function(){
        $('#box > g').click(function(){
          let $idElemento = $(this).attr('id');
          $imagenElemento.src= "imagenes/"+$idElemento+".svg";
        })
      });

}
mostrarElemento();*/

function mostrarElemento(){
    const $imagenElemento = document.querySelector('#imagenElemento');
    console.log(document.querySelectorAll('g'));
    $(document).ready(function(){
        $('#box > g').click(function(){
          let $idElemento = $(this).attr('id');
          console.log("hola");
          $imagenElemento.src= "imagenes/"+$idElemento+".svg";
        })
      });

}




/*$(function () {
    $("#imagenTablaSVG").load("imagenes/TABLA PERIODICA4.svg"); 
});*/

// Cargamos los svg tras la carga del DOM 

document.addEventListener('DOMContentLoaded', () => {
    // Buscamos cada elemento svg con el atributo "src" 
    document.querySelectorAll('svg[data-src]').forEach(svg => {
      // Cargamos el contenido en su HTML interno 
      fetch(svg.dataset.src)
        .then(respuesta => respuesta.text())
        .then(xml => svg.innerHTML = xml);
        
        mostrarElemento();
    });
    
});

/*
var svgholder=$('body').find("object #svgholder");
svgholder.load("image/svg+xml", function() {
    console.log("hola");
   
});
*/





