window.onload =function (){
  let s = Snap('#boxTablaSVG');
  Snap.load("imagenes/TABLA PERIODICA3.svg", function(f){
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

