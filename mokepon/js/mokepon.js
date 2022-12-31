const botonMascota = document.getElementById("boton-mascota");
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");

const botonReinicio = document.getElementById("boton-reiniciar");
const sectionSeleccionarmascota = document.getElementById(
  "seleccionar-mascota");
const mascotaEnemy = document.getElementById("mascota-enemigo");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");


const langostelvis = document.getElementById("langostelvis");
const tucapalma = document.getElementById("tucapalma");
const pydos = document.getElementById("pydos");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const vidasJugador = document.getElementById("vidas-jugador");
const vidasEnemigo = document.getElementById("vidas-enemigo");

let mokepones = []

let ataqueEnemigo = [];
let vidasDelJugador = 3;
let vidaDelEnemigo = 3;
let opcionesDeMokepones
let hipoge
let ratiqueya
let capipego
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataquesMokeponEnemigo

let ataqueJugador = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0


const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");



class Mokepon {

  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }

}
let hipodoge = new Mokepon('Hipoge', 'assets/mokepons_mokepon_hipodoge_attack.webp', 5)

let capipepo = new Mokepon('Capipego', 'assets/mokepons_mokepon_capipepo_attack.webp', 5)

let ratigueya = new Mokepon('Ratiqueya', 'assets/mokepons_mokepon_ratigueya_attack.webp', 5)

hipodoge.ataques.push(
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Tierra', id: 'boton-tierra' },
)
capipepo.ataques.push(
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Agua', id: 'boton-agua' },
)
ratigueya.ataques.push(
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Tierra', id: 'boton-tierra' },
)


mokepones.push(hipodoge, capipepo, ratigueya)


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  botonMascota.addEventListener("click", seleccionarMascotaJugador);

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

    `
    contenedorTarjetas.innerHTML += opcionesDeMokepones

    ratiqueya = document.getElementById("Ratiqueya");
    capipego = document.getElementById("Capipego");
    hipoge = document.getElementById("Hipoge");
  })

  botonReinicio.style.display = "none";

  botonReinicio.addEventListener("click", reinicio);
}

function seleccionarMascotaJugador() {


  if (hipoge.checked) {
    spanMascotaJugador.innerHTML = hipoge.id;
    mascotaJugador = hipoge.id
  } else if (capipego.checked) {
    spanMascotaJugador.innerHTML = capipego.id;
    mascotaJugador = capipego.id
  } else if (ratiqueya.checked) {
    spanMascotaJugador.innerHTML = ratiqueya.id;
    mascotaJugador = ratiqueya.id
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
  extraerAtaque(mascotaJugador)
  seleccionarMascotaEnemigo();

  sectionSeleccionarAtaque.style.display = "flex";

  sectionSeleccionarmascota.style.display = "none";

  // alert("Mascota seleccionada: " + spanMascotaJugador.innerHTML);
}

function extraerAtaque(mascotaJugador) {

  let ataques
  for (let i = 0; i < mokepones.length; i++) {

    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques

    }
  }

  mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
  <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
  `
    contenedorAtaques.innerHTML += ataquesMokepon
  })
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");

  botones = document.querySelectorAll('.BAtaque')


  secuenciaAtaque()


}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === 'Fuego') {
        ataqueJugador.push('Fuego')
        boton.style.background = '#112f58'
        boton.disabled = true;
        console.log(ataqueJugador)

      } else if (e.target.textContent === 'Agua') {
        ataqueJugador.push('Agua')
        boton.style.background = '#112f58'
        boton.disabled = true;
        console.log(ataqueJugador)
      } else {
        ataqueJugador.push('Tierra')
        boton.style.background = '#112f58'
        boton.disabled = true;
        console.log(ataqueJugador)

      }
      ataqueAleatorioEnemigo()
    })
  })

}

function seleccionarMascotaEnemigo() {
  let mascotaEnemigo = aleatorio(0, mokepones.length - 1);

  mascotaEnemy.innerHTML = mokepones[mascotaEnemigo].nombre

  ataquesMokeponEnemigo = mokepones[mascotaEnemigo].ataques
}



function ataqueAleatorioEnemigo() {
  let ataque = aleatorio(0, ataquesMokeponEnemigo.length - 1);
  if (ataque == 0 || ataque == 1) {
    ataqueEnemigo.push('Fuego')
  } else if (ataque == 3 || ataque == 4) {
    ataqueEnemigo.push('Agua')
  } else {
    ataqueEnemigo.push('Tierra')
  }
  console.log(ataqueEnemigo)
  iniciarPelea()
}
function iniciarPelea() {
  if (ataqueJugador.length == 5) {
    combate()
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

function indexAmbosOponentes(jugador, enemigo){
  indexAtaqueJugador= ataqueJugador[jugador]
  indexAtaqueEnemigo=ataqueEnemigo[enemigo]
}

function combate() {

  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index]===ataqueEnemigo[index]) {
      indexAmbosOponentes(index,index)
      desicion = "Empate";
    crearMensaje(desicion);
    }else if (ataqueJugador[index] == "Fuego" && ataqueEnemigo[index] == "Tierra") {
      indexAmbosOponentes(index,index)
      desicion = "Haz ganado";
      crearMensaje(desicion);
      victoriasJugador++
      vidasJugador.innerHtml= victoriasJugador
    } else if (ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Fuego") {
      indexAmbosOponentes(index,index)
      desicion = "Haz ganado";
      crearMensaje(desicion);
      victoriasJugador++
      vidasJugador.innerHtml= victoriasJugador
    } else if (ataqueJugador[index] == "Tierra" && ataqueEnemigo[index] == "Agua") {
      indexAmbosOponentes(index,index)
      desicion = "Haz ganado";
      crearMensaje(desicion);
      victoriasJugador++
      vidasJugador.innerHtml= victoriasJugador
    } else {
      indexAmbosOponentes(index,index)
      desicion = "Perdiste";
      crearMensaje(desicion);
      victoriasEnemigo++
      vidasEnemigo.innerHtml= victoriasEnemigo
    }
    
  }
  
  //Revisar Vidas
  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal("Ha habido un empate");
  } else if (victoriasJugador>victoriasEnemigo) {
    crearMensajeFinal("Felicidades, has ganado");
  }else{
    crearMensajeFinal('Lastima, no has podido derrotar al enemigo')
  }
}

function crearMensajeFinal(resultado) {
  sectionMensajes.innerHTML = resultado;
  vidasJugador.innerHTML=victoriasJugador
  vidasEnemigo.innerHTML=victoriasEnemigo



  botonReinicio.style.display = "flex";
}

function reinicio() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
