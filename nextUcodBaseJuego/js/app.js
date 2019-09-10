$(document).ready(function(){


	function CambiarColor(elemento){
		$(".main-titulo").css("color","white");
		setTimeout(CambiarColor2,500)
	}

	function CambiarColor2(elemento){
		$(".main-titulo").css("color","yellow");
		setTimeout(CambiarColor,500)
	}

	CambiarColor();

	var punt = function(puntaje){

	  $("#score-text").text(puntaje);

	};

	var movimiento = function(mov){

	$("#movimientos-text").text(mov);

	};
 var se_inicia_el_tiempo = true;
 var txt_reloj = '02:00';
 var tiempo_reloj = 120;
 var se_termino_el_tiempo = false;

 
