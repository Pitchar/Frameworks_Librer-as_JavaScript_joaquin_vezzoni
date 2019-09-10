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


					 //incorpora el panel de navegacion para cada elemento draggable
				 	     drop_drag_elem(dat,num);
				 	  };

				 	//asignar ID a cada imagen de cada div y establecer el panel de navegacion y hacerlo draggable (init)
				 	var asignaid = function(){

				 	     $(".elemento_div").each(function(key){

				 	        var dat = this.id[4];
				 	        var num = this.id[5];
				 	        var num_aleat = 1 + Math.floor(Math.random() * 4);

				 	       $( "<img id='elem_"+dat+num+"' src='./image/"+num_aleat+".png' class='elemento ' ></img>" ).prependTo("#div_"+dat+num);

				 	       est_paneles(dat,num);
				 	    });
				 	};

					var establ_cu = function(){

					    $(".elemento_div").each(function(key){

					        var dat = this.id[4];
					        var num = this.id[5];

					       est_paneles(dat,num);
					    });

					};

					var marcar = function(){

					  for (j=1;j<8;j++){
					     for (i=1;i<8;i++){

					       var i_1 = String(i+1);
					       var i_2 = String(i+2);
					       var j_1 = String(j+1);
					       var j_2 = String(j+2);

					       var a = $("#elem_"+i+j).attr('src');
					       var b = $("#elem_"+i_1+j).attr('src');
					       var c = $("#elem_"+i_2+j).attr('src');

					       var d = $("#elem_"+i+j).attr('src');
					       var e = $("#elem_"+i+j_1).attr('src');
					       var f = $("#elem_"+i+j_2).attr('src');

					       if(a == b && b == c){

					           $("#elem_"+i+j).addClass('marcar');
					           $("#elem_"+i_1+j).addClass('marcar');
					           $("#elem_"+i_2+j).addClass('marcar');

					        };

					       if(d == e && e == f){

					           $("#elem_"+i+j).addClass('marcar');
					           $("#elem_"+i+j_1).addClass('marcar');
					           $("#elem_"+i+j_2).addClass('marcar');

					       };
					     };
					  };
					};

					var preparatablero = function(){

					  do{

					    $(".elemento").each(function(key){

					           $(".elemento.marcar").remove();

					      });
					      $(".elemento_div").each(function(key){

					        var hjos = this.children.length;

					        if(hjos == 0){

					             var dat = this.id[4];
					             var num = this.id[5];
					             var num_aleat = 1 + Math.floor(Math.random() * 4);

					            $( "<img id='elem_"+dat+num+"' src='./image/"+num_aleat+".png' class='elemento ' ></img>" ).prependTo("#div_"+dat+num);

					        };

					      });

					      marcar();

					     var n = $(".elemento.marcar").length;

					  }while(n!=0);

					   establ_cu();
					};

					var runEffect_marc = function(){

					 $(".elemento").each(function(key){

					   var cl =  $(".elemento").hasClass("marcar");

					       if(cl == true){
					        var pu = $(".elemento.marcar").length;
					         puntaje = (puntaje + (pu/49));
					         put = puntaje.toFixed(0)
					         pu_10 = put*10;
					         punt(pu_10);
					        };

					     $(".elemento.marcar").toggle("pulsate", {times:3}, 1000 ,function(){
					         $(".elemento.marcar").parent().addClass("hide");

					          $(".elemento.marcar").remove();

					          crea_arr();
					         });
					      });

					     $(".elemento_div").each(function(key){

					       $(".elemento_div")[0].className = $(".elemento_div")[0].className.replace(/\bcl_coord_.*?\b/g, '');

					    });

					};

					var crea_arr = function(){

					  var arr = [];

					     for(j=1;j<8;j++){

					       var cht = 0;

					       for (i=1;i<8;i++){

					       var miniarr =[];
					       var $cel = $("#div_"+i+j);

					       if (i==7){

					              if($cel.hasClass('hide')){

					                   cht = cht +1;

					              }else{
					                var dtn = i - cht;

					              miniarr.push(i);
					              miniarr.push(dtn);
					              miniarr.push(j);
					              arr.push(miniarr);

					             };

					       }else{

					              if($cel.hasClass('hide')){

					                   cht = cht +1;

					              }else{
					               var dtn = i - cht;
					               miniarr.push(i);
					               miniarr.push(dtn);
					               miniarr.push(j);
					               arr.push(miniarr);
					            };
					         };
					      };

					       var u = 8 - cht;
					       var a = 8;

					       for (b = u; b < 8; b++){

					        var miniarr =[];
					         miniarr.push(a);
					         miniarr.push(b);
					         miniarr.push(j);
					         arr.push(miniarr);
					         a++;
					       };
					  };
					crea_on_top(arr);
					};
