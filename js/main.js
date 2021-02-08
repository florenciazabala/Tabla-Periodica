window.onload =function (){
  let s = Snap('#boxTablaSVG');
  Snap.load("imagenes/TABLA PERIODICA.svg", function(f){
    g=f.select("svg");
    s.append(g);
    mostrarElemento();
  }
  );
  
}


function mostrarElemento(){
  const $imagenElemento = document.querySelector('#imagenElemento');
  
  $(document).ready(function(){
      $('#box > g').click(function(){
          let $idElemento = $(this).attr('id');
          $imagenElemento.src= "imagenes/"+$idElemento+".svg";
          
      })
  });

}

const formulario = document.querySelector("#grupos");

formulario.onclick = function (){
  grupoSeleccionado = document.grupos.grupo.value;
  console.log(grupoSeleccionado);
  let elementosSeleccionados = Snap.selectAll('.'+grupoSeleccionado);
  console.log(elementosSeleccionados);
  for (let i=0; i< elementosSeleccionados.length; i++){
    elementosSeleccionados[i].addClass(grupoSeleccionado+"Grupo");
  }

  /*resetearClases(elementosSeleccionados);*/
}

function resetearClases(elementosSeleccionados){
  formulario.onchange = function(){
    for (let i=0; i< elementosSeleccionados.length; i++){
      elementosSeleccionados[i].removeClass(grupoSeleccionado+"Grupo");
    }
  }

}



document.addEventListener= function() {
  let elems = Snap.select('a');
  console.log(elems +"hola")
  let instances = M.Tooltip.init(elems);
}
