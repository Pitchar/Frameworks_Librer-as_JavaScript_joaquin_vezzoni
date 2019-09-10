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


 var drop_drag_elem = function(dat,num) {
		 $("#div_"+dat+num+"").droppable({
 });

		 $("#elem_"+dat+num+"").draggable({
				 snap: "#div_"+dat+num+"",
				 snapMode: "inner",
				 revert:  function(droppedElement) {
						 var validDrop = droppedElement && droppedElement.hasClass("cl_coord_"+dat+num);

									 if (validDrop == true){

										 mov = mov +1;

										 var a = dat;
										 var b = num;
										 var c = $('#elem_'+dat+num).attr('src');

										 var d = droppedElement.attr('id')[4];
										 var e = droppedElement.attr('id')[5];

										 $('#elem_'+a+b).remove();

											 var f =  $('#elem_'+d+e).attr('src');

										 $('#elem_'+d+e).remove();

										 $( "<img id='elem_"+a+b+"' src='"+f+"' class='elemento '  ></img>" ).prependTo("#div_"+a+b);
										 $( "<img id='elem_"+d+e+"' src='"+c+"' class='elemento '  ></img>" ).prependTo("#div_"+d+e);
										 drop_drag_elem(a,b);
										 drop_drag_elem(d,e);
										 movimiento(mov);
										 marcar();
										 runEffect_marc();
									 };
						 return !validDrop;
				 }
		 });
 };

 var llenarpantalla = function(){
			for(i=1;i<8;i++){

					$.each(cols,function(key){
								var num = key+1;
								var dat = 8-i
								 $( "<div id='div_"+dat+num+"' class ='elemento_div ' ></div>" ).appendTo(".col-"+num);
					});
			};
 };

 var est_paneles = function(dat,num){

					if (dat >1 && num >1 && dat <7 && num <7){

							var dat_1 = dat-1;
							var dat_2 = (+dat)+1;
							var num_1 = num-1;
							var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

					 }else if (dat == 1 && num >1 && num <7) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

					 }else if (num == 1 && dat >1 && dat <7) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

					 }else if (num == 7 && dat >1 && dat <7) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);

					 }else if (dat == 7 && num >1 && num <7) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

					 }else if (dat == 1 && num == 1) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);
								$("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);

					 }else if (dat == 1 && num == 7) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
								$("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);

					 }else if (dat == 7 && num == 1) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

					 }else if (dat == 7 && num == 7) {

						 var dat_1 = dat-1;
						 var dat_2 = (+dat)+1;
						 var num_1 = num-1;
						 var num_2 = (+num)+1;

								$("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
								$("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
					 };
