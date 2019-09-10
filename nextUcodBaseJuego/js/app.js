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

 var reloj = function(){
			var $stop  = $(".btn-reinicio");

			var timer = new Timer({

					onstart : function(millisec) {
						se_termino_el_tiempo=false;

					},
					ontick  : function(millisec) {

						var min = millisec / 1000 / 60;
						 var r = min % 1;
						 var sec = Math.floor(r * 60);
						 if (sec < 10) {
							 sec = '0'+sec;
						 }
							min = Math.floor(min);


						 $("#timer").text('0'+min+':'+sec);

					},
					onstop  : function() {
						 $("#timer").text(txt_reloj);
						 ReniciarJuego();
					},
					onend   : function() {
						se_termino_el_tiempo = true;
						$("#timer").text(txt_reloj);

						setTimeout(function() {

							$(".elemento_div").each(function(key){
									this.remove();
							 });

						 });
						 FinalizarJuego();


					}
			});

					timer.start(tiempo_reloj);

			$stop.on('click', function() {

							timer.stop();

			});

 };

 $(".btn-reinicio").click(function(){

	 if($(".btn-reinicio")[0].innerText == "Iniciar"){

		 $(".btn-reinicio").text("Reiniciar");
					 $(".elemento_div").each(function(key){
							 this.remove();
				 });
				 mov = 0;
				puntaje = 0;

				movimiento();
				punt();

		 init();

	 }else {
		 $("#timer").text(txt_reloj);

		 $(".btn-reinicio").text("Iniciar");
					 $(".elemento_div").each(function(key){
							 this.remove();
				 });

		 mov = 0;
		puntaje = 0;

		movimiento();
		punt();
			$("#movimientos-text").text("0");
				$("#score-text").text("0");
	 };
 });

 var init = function(){

 cols = ["col-1","col-2","col-3","col-4","col-5","col-6","col-7"];
 mov = 0;
 puntaje = 0;

 llenarpantalla();
 asignaid();
 marcar();
 preparatablero();
 reloj();

 };
