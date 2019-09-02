$(document).ready(function(){

var tiempoAtras;
var min;
var seg;
var temporizador;
var verifica = false;

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

  for (var i = 1; i <8; i++) {
    for (var j = 1; j < 8; j++) {
      var tipoDulce= Math.floor((Math.random() * 4) + 1);
      var fila = "<div class='row-"+j+"'></div>";
      var elementoImg=document.createElement('img')
      $(".col-"+i).append(elementoImg)
      $(elementoImg).addClass('elemento')
      $(elementoImg).attr('src',"image/"+tipoDulce+".png")


     }
  }
  agregarDulcesEvents();
   HacerJugadaVertical();
   HacerJugadaHorizontal();
}

function ReiniciarJuego(verifica) {
  clearTimeout(temporizador);
  $(".btn-reinicio").text("Iniciar");
  if (verifica) {
    $(".panel-tablero").show("slow");
    $(".panel-score").animate(
      {
        width: "-=50"
      }, 1000
    );
    verifica=false;
  };
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
  HacerJugadaVertical();
  HacerJugadaHorizontal();
}

$(".btn-reinicio").on("click", function(){
  var nombre =$(".btn-reinicio").text();
  if (nombre=="Iniciar") {
    $(".btn-reinicio").text("Reiniciar");
    clearTimeout(temporizador);
  }
  else {
    ReiniciarJuego(verifica);
  }
  min =0;
  seg =0;
  $(".elemento").remove('img');
  $('#score-text').text("0");
  $('#movimientos-text').text("0");
  $(".btn-reinicio").on("click", function(){
    var nombre =$(".btn-reinicio").text();
    if (nombre=="Iniciar") {
      $(".btn-reinicio").text("Reiniciar");
      clearTimeout(temporizador);
    }
    else {
      ReiniciarJuego(verifica);
    }
    min =0;
    seg =0;
    $(".elemento").remove('img');
    $('#score-text').text("0");
    $('#movimientos-text').text("0");
    updateReloj();
    CaidaDeDulces();
})
})









});
