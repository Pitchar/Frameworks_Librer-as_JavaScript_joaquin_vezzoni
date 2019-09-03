var hora = 0;
var minutos = 1;
var segundos = 59;


function updateReloj() {
  var number = document.getElementById('timer');
  if (minutos==2) {
    tiempoAtras= "0";
    tiempoAtras+= ":00";
    tiempoAtras+= ":00";
    FinalizarJuego();
  }
  else {
    tiempoAtras= (hora < 10) ? hora :hora;
    tiempoAtras+= ((minutos < 10) ? ":0" : ":") +(minutos) ;
    tiempoAtras+= ((segundos < 10) ? ":0" : ":") +  (segundos);
    temporizador = setTimeout("updateReloj()",1000);
  }
  if (segundos==59) {
    minutos+=1;
    segundos=0;
  }
  else {
    segundos+= 1;
  }
  number.innerHTML = tiempoAtras;
}
