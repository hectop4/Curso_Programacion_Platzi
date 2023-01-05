const botonMascota = document.getElementById("boton-mascota");
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");

const botonReinicio = document.getElementById("boton-reiniciar");
const sectionSeleccionarmascota = document.getElementById(
  "seleccionar-mascota"
);

const mascotaEnemy = document.getElementById("mascota-enemigo");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");

const langostelvis = document.getElementById("langostelvis");
const tucapalma = document.getElementById("tucapalma");
const pydos = document.getElementById("pydos");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const vidasJugador = document.getElementById("vidas-jugador");
const vidasEnemigo = document.getElementById("vidas-enemigo");
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let mokepones = [];

let ataqueEnemigo = [];
let vidasDelJugador = 3;
let vidaDelEnemigo = 3;
let opcionesDeMokepones;
let hipoge;
let ratiqueya;
let capipego;
let mascotaJugador;
let ataquesMokepon;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let ataquesMokeponEnemigo;
let lienzo = mapa.getContext("2d");
let ataqueJugador = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let interval;
let mapaBackground = new Image();
mapaBackground.src = "./assets/mokemap.webp";
let mascotaJugadorObjeto;
let alturaQueBuscamos
let AnchoDelMapa=window.innerWidth-40
let anchoMaximo=350

if(AnchoDelMapa>anchoMaximo){
  AnchoDelMapa=anchoMaximo-40
}

alturaQueBuscamos=AnchoDelMapa*600/800

mapa.width=AnchoDelMapa
mapa.height=alturaQueBuscamos

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");
class Mokepon {
  constructor(nombre, foto, vida, fotoMapa,) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 40;
    this.alto = 40;
    this.x = aleatorio(0,mapa.width-this.ancho);
    this.y = aleatorio(0,mapa.height-this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarMokepon() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}
let hipodoge = new Mokepon(
  "Hipoge",
  "assets/mokepons_mokepon_hipodoge_attack.webp",
  5,
  "assets/hipodoge.webp"
);

let capipepo = new Mokepon(
  "Capipego",
  "assets/mokepons_mokepon_capipepo_attack.webp",
  5,
  "assets/capipepo.webp"
);

let ratigueya = new Mokepon(
  "Ratiqueya",
  "assets/mokepons_mokepon_ratigueya_attack.webp",
  5,
  "assets/ratigueya.webp"
);
let enemigohipodoge = new Mokepon(
  "Hipoge",
  "assets/mokepons_mokepon_hipodoge_attack.webp",
  5,
  "assets/hipodoge.webp",
  
);

let enemigocapipepo = new Mokepon(
  "Capipego",
  "assets/mokepons_mokepon_capipepo_attack.webp",
  5,
  "assets/capipepo.webp",
  
);

let enemigoratigueya = new Mokepon(
  "Ratiqueya",
  "assets/mokepons_mokepon_ratigueya_attack.webp",
  5,
  "assets/ratigueya.webp",
  
);

hipodoge.ataques.push(
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Tierra", id: "boton-tierra" }
);
capipepo.ataques.push(
  { nombre: "Tierra", id: "boton-tierra" },
  { nombre: "Tierra", id: "boton-tierra" },
  { nombre: "Tierra", id: "boton-tierra" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Agua", id: "boton-agua" }
);
ratigueya.ataques.push(
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Tierra", id: "boton-tierra" }
);
enemigohipodoge.ataques.push(
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Tierra", id: "boton-tierra" }
);
enemigocapipepo.ataques.push(
  { nombre: "Tierra", id: "boton-tierra" },
  { nombre: "Tierra", id: "boton-tierra" },
  { nombre: "Tierra", id: "boton-tierra" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Agua", id: "boton-agua" }
);
enemigoratigueya.ataques.push(
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Fuego", id: "boton-fuego" },
  { nombre: "Agua", id: "boton-agua" },
  { nombre: "Tierra", id: "boton-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  botonMascota.addEventListener("click", seleccionarMascotaJugador);
  sectionVerMapa.style.display = "none";
  mokepones.forEach((mokepon) => {
    opcionesDeMokepones = `
    <input type="radio" name="mascota" id="${mokepon.nombre}" />
    <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
      <p>${mokepon.nombre}</p>
      <img
        src="${mokepon.foto}"
        alt="${mokepon.nombre}"
      /> </label
    ><br />

    `;
    contenedorTarjetas.innerHTML += opcionesDeMokepones;

    ratiqueya = document.getElementById("Ratiqueya");
    capipego = document.getElementById("Capipego");
    hipoge = document.getElementById("Hipoge");
  });

  botonReinicio.style.display = "none";

  botonReinicio.addEventListener("click", reinicio);
  unirseAlJuego()
}
function unirseAlJuego(){
  fetch("http://localhost:8080/unirse").then(function (res){

  if (res.ok) {
    res.text().then(function (respuesta){
        console.log(respuesta)
    })
  }
  })

}

function seleccionarMascotaJugador() {
  if (hipoge.checked) {
    spanMascotaJugador.innerHTML = hipoge.id;
    mascotaJugador = hipoge.id;
  } else if (capipego.checked) {
    spanMascotaJugador.innerHTML = capipego.id;
    mascotaJugador = capipego.id;
  } else if (ratiqueya.checked) {
    spanMascotaJugador.innerHTML = ratiqueya.id;
    mascotaJugador = ratiqueya.id;
  }
  // else if (langostelvis.checked) {
  //   spanMascotaJugador.innerHTML = "Langostelvis";
  // } else if (tucapalma.checked) {
  //   spanMascotaJugador.innerHTML = "Tucapalma";
  // } else if (pydos.checked) {
  //   spanMascotaJugador.innerHTML = "Pydos";
  // }
  else {
    spanMascotaJugador.innerHTML = "Valor invalido, seleccione una mascota";
  }
  extraerAtaque(mascotaJugador);
  

  // sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "flex";
  // lienzo.fillRect(5,15,20,40)
  iniciarMapa();
  sectionSeleccionarmascota.style.display = "none";

  // alert("Mascota seleccionada: " + spanMascotaJugador.innerHTML);
}

function extraerAtaque(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  
  mostrarAtaques(ataques);
  
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
  <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
  `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");

  botones = document.querySelectorAll(".BAtaque");

  
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "Fuego") {
        ataqueJugador.push("Fuego");
        boton.style.background = "#112f58";
        boton.disabled = true;
        console.log(ataqueJugador);
      } else if (e.target.textContent === "Agua") {
        ataqueJugador.push("Agua");
        boton.style.background = "#112f58";
        boton.disabled = true;
        console.log(ataqueJugador);
      } else {
        ataqueJugador.push("Tierra");
        boton.style.background = "#112f58";
        boton.disabled = true;
        console.log(ataqueJugador);
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo(enemigo) {
  

  mascotaEnemy.innerHTML = enemigo.nombre;

  ataquesMokeponEnemigo = enemigo.ataques;
  secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
  let ataque = aleatorio(0, ataquesMokeponEnemigo.length - 1);
  console.log(ataquesMokeponEnemigo)
  if (ataque == 0 || ataque == 1) {
    ataqueEnemigo.push("Fuego");
  } else if (ataque == 3 || ataque == 4) {
    ataqueEnemigo.push("Agua");
  } else {
    ataqueEnemigo.push("Tierra");
  }
  console.log(ataqueEnemigo);
  iniciarPelea();
}
function iniciarPelea() {
  if (ataqueJugador.length == 5) {
    combate();
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index);
      desicion = "Empate";
      crearMensaje(desicion);
    } else if (
      ataqueJugador[index] == "Fuego" &&
      ataqueEnemigo[index] == "Tierra"
    ) {
      indexAmbosOponentes(index, index);
      desicion = "Haz ganado";
      crearMensaje(desicion);
      victoriasJugador++;
      vidasJugador.innerHtml = victoriasJugador;
    } else if (
      ataqueJugador[index] == "Agua" &&
      ataqueEnemigo[index] == "Fuego"
    ) {
      indexAmbosOponentes(index, index);
      desicion = "Haz ganado";
      crearMensaje(desicion);
      victoriasJugador++;
      vidasJugador.innerHtml = victoriasJugador;
    } else if (
      ataqueJugador[index] == "Tierra" &&
      ataqueEnemigo[index] == "Agua"
    ) {
      indexAmbosOponentes(index, index);
      desicion = "Haz ganado";
      crearMensaje(desicion);
      victoriasJugador++;
      vidasJugador.innerHtml = victoriasJugador;
    } else {
      indexAmbosOponentes(index, index);
      desicion = "Perdiste";
      crearMensaje(desicion);
      victoriasEnemigo++;
      vidasEnemigo.innerHtml = victoriasEnemigo;
    }
  }

  //Revisar Vidas
  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal("Ha habido un empate");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("Felicidades, has ganado");
  } else {
    crearMensajeFinal("Lastima, no has podido derrotar al enemigo");
  }
}

function crearMensajeFinal(resultado) {
  sectionMensajes.innerHTML = resultado;
  vidasJugador.innerHTML = victoriasJugador;
  vidasEnemigo.innerHTML = victoriasEnemigo;

  botonReinicio.style.display = "flex";
}

function reinicio() {
  location.reload();
}

function pintarCanvas() {
  mascotaJugadorObjeto.x =
    mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y =
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  mascotaJugadorObjeto.pintarMokepon();
  enemigocapipepo.pintarMokepon();
  enemigoratigueya.pintarMokepon();
  enemigohipodoge.pintarMokepon();
  if(mascotaJugadorObjeto.velocidadX!==0 || mascotaJugadorObjeto.velocidadY!==0){
      revisarColision(enemigohipodoge)
      revisarColision(enemigocapipepo)
      revisarColision(enemigoratigueya)
  }
}
function moverCapipepoDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverCapipepoAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}
function moverCapipepoIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverCapipepoArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}
function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}
function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverCapipepoArriba();
      break;
    case "ArrowDown":
      moverCapipepoAbajo();

      break;
    case "ArrowRight":
      moverCapipepoDerecha();

      break;
    case "ArrowLeft":
      moverCapipepoIzquierda();

      break;
    default:
      detenerMovimiento();
      break;
  }
}
function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
 

  window.addEventListener("keydown", sePresionoUnaTecla);
  window.addEventListener("keyup", detenerMovimiento);
  interval = setInterval(pintarCanvas, 50);
}
function obtenerObjetoMascota() {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}
function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;
  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }
  detenerMovimiento()
  clearInterval(interval)
  console.log('colision');
  
  sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display='none'
  seleccionarMascotaEnemigo(enemigo);
}

window.addEventListener("load", iniciarJuego);
