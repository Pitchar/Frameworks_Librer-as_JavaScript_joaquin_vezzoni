
function updateReloj() {
  var number = document.getElementById('timer');
  var hora = 0;
  var min = 1;
  var seg = 59;
  if (min==2) {
    tiempoAtras= "0";
    tiempoAtras+= ":00";
    tiempoAtras+= ":00";
    FinalizarJuego();
  }
  else {
    tiempoAtras= (hora < 10) ? hora :hora;
    tiempoAtras+= ((min < 10) ? ":0" : ":") +(min) ;
    tiempoAtras+= ((seg < 10) ? ":0" : ":") +  (seg);
    temporizador = setTimeout("updateReloj()",1000);
  }
  if (seg==59) {
    min+=1;
    seg=0;
  }
  else {
    seg += 1;
  }
  number.innerHTML = tiempoAtras;
}
