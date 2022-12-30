const botonMascota = document.getElementById("boton-mascota");
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReinicio = document.getElementById("boton-reiniciar");
const sectionSeleccionarmascota = document.getElementById(
  "seleccionar-mascota");
const mascotaEnemy = document.getElementById("mascota-enemigo");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");


const langostelvis = document.getElementById("langostelvis");
const tucapalma = document.getElementById("tucapalma");
const pydos = document.getElementById("pydos");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const vidasJugador = document.getElementById("vidas-jugador");
const vidasEnemigo = document.getElementById("vidas-enemigo");

let mokepones= []
let ataqueJugador;
let ataqueEnemigo;
let vidasDelJugador = 3;
let vidaDelEnemigo = 3;
let opcionesDeMokepones
let hipoge 
let ratiqueya 
let capipego 


const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");



class Mokepon{

  constructor(nombre,foto,vida){
    this.nombre=nombre
    this.foto=foto
    this.vida=vida
    this.ataques=[]
  }

}
let hipodoge =new Mokepon('Hipoge','assets/mokepons_mokepon_hipodoge_attack.webp',5)

let capipepo= new Mokepon('Capipego','assets/mokepons_mokepon_capipepo_attack.webp',5)

let ratigueya=new Mokepon('Ratiqueya','assets/mokepons_mokepon_ratigueya_attack.webp',5)

hipodoge.ataques.push(
  {nombre: 'Agua',id: 'boton-agua'},
  {nombre:'Agua', id:'boton-agua'},
  {nombre:'Agua', id:'boton-agua'},
  {nombre:'Fuego', id:'boton-fuego'},
  {nombre:'Tierra', id:'boton-tierra'},
)
capipepo.ataques.push(
  {nombre:'Tierra', id:'boton-tierra'},
  {nombre:'Tierra',id: 'boton-tierra'},
  {nombre:'Tierra', id:'boton-tierra'},
  {nombre:'Fuego', id:'boton-fuego'},
  {nombre:'Agua', id:'boton-agua'},
)
ratigueya.ataques.push(
  {nombre:'Fuego',id: 'boton-fuego'},
  {nombre:'Fuego', id:'boton-fuego'},
  {nombre:'Fuego', id:'boton-fuego'},
  {nombre:'Agua', id:'boton-agua'},
  {nombre:'Tierra', id:'boton-tierra'},
)


mokepones.push(hipodoge,capipepo, ratigueya)


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  botonMascota.addEventListener("click", seleccionarMascotaJugador);

  mokepones.forEach((mokepon)=>{
    opcionesDeMokepones=`
    <input type="radio" name="mascota" id="${mokepon.nombre}" />
    <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
      <p>${mokepon.nombre}</p>
      <img
        src="${mokepon.foto}"
        alt="${mokepon.nombre}"
      /> </label
    ><br />

    `
    contenedorTarjetas.innerHTML+=opcionesDeMokepones

    ratiqueya = document.getElementById("Ratiqueya");
    capipego = document.getElementById("Capipego");
    hipoge = document.getElementById("Hipoge");
  })

  botonReinicio.style.display = "none";
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonReinicio.addEventListener("click", reinicio);
}

function seleccionarMascotaJugador() {

  
  if (hipoge.checked) {
    spanMascotaJugador.innerHTML = "Hipoge";
  } else if (capipego.checked) {
    spanMascotaJugador.innerHTML = "Capipego";
  } else if (ratiqueya.checked) {
    spanMascotaJugador.innerHTML = "Ratiqueya";
  } else if (langostelvis.checked) {
    spanMascotaJugador.innerHTML = "Langostelvis";
  } else if (tucapalma.checked) {
    spanMascotaJugador.innerHTML = "Tucapalma";
  } else if (pydos.checked) {
    spanMascotaJugador.innerHTML = "Pydos";
  } else {
    spanMascotaJugador.innerHTML = "Valor invalido, seleccione una mascota";
  }
  seleccionarMascotaEnemigo();

  sectionSeleccionarAtaque.style.display = "flex";

  sectionSeleccionarmascota.style.display = "none";

  // alert("Mascota seleccionada: " + spanMascotaJugador.innerHTML);
}

function seleccionarMascotaEnemigo() {
  let mascotaEnemigo = aleatorio(1, 6);

  if (mascotaEnemigo == 1) {
    mascotaEnemy.innerHTML = "Capipego";
  } else if (mascotaEnemigo == 2) {
    mascotaEnemy.innerHTML = "Hipoge";
  } else if (mascotaEnemigo == 3) {
    mascotaEnemy.innerHTML = "Ratiqueya";
  } else if (mascotaEnemigo == 4) {
    mascotaEnemy.innerHTML = "Langostelvis";
  } else if (mascotaEnemigo == 5) {
    mascotaEnemy.innerHTML = "Tucapalma";
  } else if (mascotaEnemigo == 6) {
    mascotaEnemy.innerHTML = "Pydos";
  }
}

function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataque = aleatorio(1, 3);
  if (ataque == 1) {
    ataqueEnemigo = "Fuego";
  } else if (ataque == 2) {
    ataqueEnemigo = "Agua";
  } else {
    ataqueEnemigo = "Tierra";
  }
  combate();
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    desicion = "Empate";
    crearMensaje(desicion);
  } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
    desicion = "Haz ganado";
    crearMensaje(desicion);
    vidasEnemigo.innerHTML = --vidaDelEnemigo;
  } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
    desicion = "Haz ganado";
    crearMensaje(desicion);
    vidasEnemigo.innerHTML = --vidaDelEnemigo;
  } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
    desicion = "Haz ganado";
    crearMensaje(desicion);
    vidasEnemigo.innerHTML = --vidaDelEnemigo;
  } else {
    desicion = "Perdiste";
    crearMensaje(desicion);
    vidasJugador.innerHTML = --vidasDelJugador;
  }
  //Revisar Vidas
  revisarVidas();
}

function revisarVidas() {
  if (vidaDelEnemigo == 0) {
    crearMensajeFinal("Felicidades, haz derrotado a tu enemigo");
  } else if (vidasDelJugador == 0) {
    crearMensajeFinal("Lastima, no has logrado sobrevivir y perdiste");
  }
}

function crearMensajeFinal(resultado) {
  sectionMensajes.innerHTML = resultado;

  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;

  botonReinicio.style.display = "flex";
}

function reinicio() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
