$(document).ready(function(){

	function CambiarColor(elemento){
		$(".main-titulo").css("color","white");
		setTimeout(CambiarColor2,1000)
	}

	function CambiarColor2(elemento){
		$(".main-titulo").css("color","yellow");
		setTimeout(CambiarColor,1000)
	}

	CambiarColor();

  function CaidaDeDulces(){

  for (var i = 1; i <7; i++) {
    for (var j = 1; j < 7; j++) {
      var tipoDulce= Math.floor((Math.random() * 4) + 1);
      var fila = "<div class='row-"+j+"'></div>";
      var elementoImg=document.createElement('img')
      $(".col-"+i).append(elementoImg)
      $(elementoImg).addClass('elemento')
      $(elementoImg).attr('src',"image/"+tipoDulce+".png")


     }
  }


}

function agregarDulcesEvents() {
  $('img').draggable({
  containment: '.panel-tablero',
  droppable: 'img',
  revert: true,
  revertDuration: 500,
  grid: [100, 100],
  zIndex: 10,
  drag: constrainCandyMovement
  });
  $('img').droppable({
    drop: moverDulce
  });

}






});
