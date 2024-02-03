const buttons = document.getElementsByClassName("button")
let arrayButtons = Array.from(buttons)
let screen = document.getElementById("screen")
let ledEstado = document.getElementById("ledEstado")
let flagBoton = 0;
let now = new Date();
let horaPantalla = document.getElementById("hora")
let datePantalla = document.getElementById("date")
let canalPantalla = document.getElementById("canal")
let sourcePantalla = document.getElementById("source")
const chanel = document.getElementsByClassName("botonChan")
let arrayChanel = Array.from(chanel)
let canalActual;
let nuevoCanal;
let nuevoCanalReal;

const source = document.getElementsByClassName("buttonSrc")
let arraySource = Array.from(source)
let sourceSelec = 0;

//CAMBIO DE CANALES. Recorrremos la array de tods los elementos que contengan la clase boutton al hacer click en uno de ellos
arrayButtons.map(
  item => {
    item.addEventListener("click", (evento) => {

      //Bucle de control de encendido. Primero si esta apagado
      if ((evento.target.id) == "btnP") {
        if (flagBoton == 0) {
          //Fecha y hora en la pantalla
          horaPantalla.innerHTML = now.toLocaleTimeString();
          datePantalla.innerHTML = now.toLocaleDateString();
          //Fecha y hora permanecen durante 3 segundos
          setTimeout(function () {
            horaPantalla.style.visibility = "hidden";
            datePantalla.style.visibility = "hidden";
          }, 3000);
          //bandera encendido
          flagBoton++;
          //Pantalla encendido. Primero le quitas la clase que tenga y luego le añades 
          screen.classList.remove(screen.classList[screen.classList.length - 1])
          screen.classList.add("canalP")
          //Led de estado encendido
          ledEstado.classList.remove(ledEstado.classList)
          ledEstado.classList.add("ledEstadoOn")

          //Segundo si esta encendido
        } else {
          //bandera encendido
          flagBoton--;
          //Apagar TV. Primero le quitas la clase que tenga y luego le añades 
          screen.classList.remove(screen.classList[screen.classList.length - 1])
          screen.classList.add("basicScreen")
          //Apagar led de estado
          ledEstado.classList.remove(ledEstado.classList)
          ledEstado.classList.add("ledEstadoOff")
          //Quitar hora, fecha y canal de la pantalla
          horaPantalla.innerHTML = "";
          datePantalla.innerHTML = "";
          canalPantalla.innerHTML = "";
        }
      }
      //Cambio de canales.(Si la TV está encendida)
      if ((flagBoton == 1 && sourceSelec == 0)) {
        //Cambio canal. Primero le quitas la clase que tenga y luego le añades 
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal" + evento.target.id.slice(-1))
        //Fecha y hora en la pantalla
        horaPantalla.innerHTML = now.toLocaleTimeString();
        datePantalla.innerHTML = now.toLocaleDateString();
        horaPantalla.style.visibility = "visible";
        datePantalla.style.visibility = "visible";
        //Fecha y hora permanecen durante 3 segundos
        setTimeout(function () {
          horaPantalla.style.visibility = "hidden";
          datePantalla.style.visibility = "hidden";
        }, 3000);
      }
      //Nombre de canal en pantalla
      if ((flagBoton == 1) && (sourceSelec == 0)) {

        if (("canal" + evento.target.id.slice(-1)) === "canal1") {
          canalPantalla.innerHTML = "TVE"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal2") {
          canalPantalla.innerHTML = "LA 2"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal3") {
          canalPantalla.innerHTML = "ANTENA 3"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal4") {
          canalPantalla.innerHTML = "QUATRO"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal5") {
          canalPantalla.innerHTML = "TELECINCO"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal6") {
          canalPantalla.innerHTML = "LA SEXTA"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal7") {
          canalPantalla.innerHTML = "TDP"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal8") {
          canalPantalla.innerHTML = "DISNEY"
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal9") {
          canalPantalla.innerHTML = "CANAL NOU"
        }
      }
      canalActual = ("canal" + evento.target.id.slice(-1));

    })
  }
)


arrayChanel.map(
  item => {
    item.addEventListener("click", (evento) => {
      //Si se acaba de encender la TV la tv espera hasta que pulses un numero o un de los botones de chanel up/down
      if (canalActual === "canalP") {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal9")
        canalActual = "canal9";
      }
      //Boton chanel UP
      if (((evento.target.id) === "btnU") && (flagBoton == 1) && (sourceSelec == 0)) {
        nuevoCanal = (canalActual.slice(-1))
        nuevoCanal++;
        if (nuevoCanal == 10) {
          nuevoCanal = 1;
        }
        nuevoCanalReal = "canal" + nuevoCanal;
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add(nuevoCanalReal)
        canalActual = nuevoCanalReal;

      }
      //Boton chanel Down
      if (((evento.target.id) === "btnD") && (flagBoton == 1) && (sourceSelec == 0)) {
        nuevoCanal = (canalActual.slice(-1))
        nuevoCanal--;
        if (nuevoCanal == 0) {
          nuevoCanal = 9;
        }
        nuevoCanalReal = "canal" + nuevoCanal;
        console.log(nuevoCanal)
        console.log(nuevoCanalReal)
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add(nuevoCanalReal)
        canalActual = nuevoCanalReal;
      }
      if ((flagBoton == 1) && (sourceSelec == 0)) {
        //Fecha y hora en la pantalla
        horaPantalla.innerHTML = now.toLocaleTimeString();
        datePantalla.innerHTML = now.toLocaleDateString();
        horaPantalla.style.visibility = "visible";
        datePantalla.style.visibility = "visible";
        //Fecha y hora permanecen durante 3 segundos
        setTimeout(function () {
          horaPantalla.style.visibility = "hidden";
          datePantalla.style.visibility = "hidden";
        }, 3000);
      }
      //Nombre de canal en pantalla
      if ((flagBoton == 1) && (sourceSelec == 0)) {
        if (nuevoCanalReal === "canal1") {
          canalPantalla.innerHTML = "TVE"
        }
        if (nuevoCanalReal === "canal2") {
          canalPantalla.innerHTML = "LA 2"
        }
        if (nuevoCanalReal === "canal3") {
          canalPantalla.innerHTML = "ANTENA 3"
        }
        if (nuevoCanalReal === "canal4") {
          canalPantalla.innerHTML = "QUATRO"
        }
        if (nuevoCanalReal === "canal5") {
          canalPantalla.innerHTML = "TELECINCO"
        }
        if (nuevoCanalReal === "canal6") {
          canalPantalla.innerHTML = "LA SEXTA"
        }
        if (nuevoCanalReal === "canal7") {
          canalPantalla.innerHTML = "TDP"
        }
        if (nuevoCanalReal === "canal8") {
          canalPantalla.innerHTML = "DISNEY"
        }
        if (nuevoCanalReal === "canal9") {
          canalPantalla.innerHTML = "CANAL NOU"
        }
      }

    })
  }
)

arraySource.map(
  item => {
    item.addEventListener("click", (evento) => {
      sourceSelec++;

      if (sourceSelec == 1) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canalS1")
        canalActual = "canalS1"
        canalPantalla.innerHTML = ""
        sourcePantalla.innerHTML = "HDMI-1";
        sourcePantalla.style.visibility = "visible";
        datePantalla.style.visibility = "visible";
        horaPantalla.style.visibility = "visible";
          //Fecha y hora permanecen durante 3 segundos
          setTimeout(function () {
            sourcePantalla.style.visibility = "hidden";
            datePantalla.style.visibility = "hidden";
            horaPantalla.style.visibility = "hidden";
          }, 3000);
      }
      if (sourceSelec == 2) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canalS2")
        canalActual = "canalS1"
        sourcePantalla.innerHTML = "HDMI-2";
        canalPantalla.innerHTML = ""
        sourcePantalla.style.visibility = "visible";
        datePantalla.style.visibility = "visible";
        horaPantalla.style.visibility = "visible";
          //Fecha y hora permanecen durante 3 segundos
          setTimeout(function () {
            sourcePantalla.style.visibility = "hidden";
            datePantalla.style.visibility = "hidden";
            horaPantalla.style.visibility = "hidden";
          }, 3000);
        }
      if (sourceSelec == 3) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal1");
        canalActual = "canal1";
        canalPantalla.innerHTML = "TVE"
        sourcePantalla.innerHTML = "LIVE TV";
        sourceSelec = 0;
        sourcePantalla.style.visibility = "visible";
        datePantalla.style.visibility = "visible";
        horaPantalla.style.visibility = "visible";
          //Fecha y hora permanecen durante 3 segundos
          setTimeout(function () {
            sourcePantalla.style.visibility = "hidden";
            datePantalla.style.visibility = "hidden";
            horaPantalla.style.visibility = "hidden";
          }, 3000);
      }
    })
  }
)
