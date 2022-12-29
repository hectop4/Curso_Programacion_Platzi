 function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      function eleccion(jugada) {
         let resultado=""
        if (jugada == 1) {
           resultado="Piedra"
        } else if (jugada == 2) {
            resultado = "Papel"
        } else if (jugada == 3) {
            resultado="Tijera"
        } else {
            resultado="Invalido"
        }
        return resultado
      }
      function combate(jugador,pc,triunfos,perdidas){
         let desicion
         if (pc == jugador) {
        desicion="Empate"
        triunfos=triunfos+ 1;
      } else if (jugador == 1 && pc == 3) {
        desicion="Haz ganado"
        triunfos=triunfos+ 1;
      } else if (jugador == 2 && pc == 1) {
        desicion="Haz ganado"
        triunfos=triunfos+ 1;
      } else if (jugador == 3 && pc == 2) {
        desicion="Haz ganado"
      } else {
        desicion="Perdiste"
        perdidas=perdidas +1;

      }
      return desicion
      }
      //1 es piedra, 2 papel y 3 tijera
      let jugador = 0;

      

      let pc = 0;
      let triunfos=0;
      let perdidas=0;

      while(triunfos<3 && perdidas<3){
        pc=aleatorio(1, 3);
        jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera");
        alert("Pc elige "+ eleccion(pc))
        alert("Usted elige "+ eleccion(jugador))
        //Combate
        if (pc == jugador) {
         desicion="Empate"
         triunfos=triunfos+ 1;
       } else if (jugador == 1 && pc == 3) {
         desicion="Haz ganado"
         triunfos=triunfos+ 1;
       } else if (jugador == 2 && pc == 1) {
         desicion="Haz ganado"
         triunfos=triunfos+ 1;
       } else if (jugador == 3 && pc == 2) {
         desicion="Haz ganado"
       } else {
         desicion="Perdiste"
         perdidas=perdidas +1;
 
       }


      }
      alert("Ganaste "+ triunfos + "Perdiste "+ perdidas);