const buttons = document.getElementsByClassName("button")
let arrayButtons = Array.from(buttons)
const chanel = document.getElementsByClassName("botonChan")
let arrayChanel = Array.from(chanel)
let mute = document.getElementsByClassName("botonMute")
let arrayMute = Array.from(mute)
const led = document.getElementsByClassName("led")
let arrayLed = Array.from(led)
let chanList = document.getElementsByClassName("botonList")
let arrayList = Array.from(chanList)
const source = document.getElementsByClassName("buttonSrc")
let arraySource = Array.from(source)
const volumen = document.getElementsByClassName("botonVol")
let arrayVolumen = Array.from(volumen)

let screen = document.getElementById("screen")
let ledEstado = document.getElementById("ledEstado")
let horaPantalla = document.getElementById("hora")
let datePantalla = document.getElementById("date")
let canalPantalla = document.getElementById("canal")
let volumenPantalla = document.getElementById("numeroVol")
let sourcePantalla = document.getElementById("source")
let ledRemote = document.getElementById("ledRemote")
let logoMute = document.getElementById("logoMute")
let video = document.getElementById("myVideo")
let volumeLevel = document.getElementById("volume-level");
let volumeBar = document.getElementById("volume-bar");

let now = new Date();

let canalActual;
let nuevoCanal;
let nuevoCanalReal;
let sourceSelec = 0;
let flagBoton = 0;
let val = 0;
let currentVolume = 50;
let maxVolume = 100;
let minVolume = 0;
let muteOn = 0;
let chan = 0;


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

          setTimeout(function () {
            video.pause();
            video.src = "./img/videop.mp4";
            video.load();
            video.play();
          }, 1200);


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
          sourcePantalla.innerHTML = "";
          sourcePantalla.innerHTML = "";
          volumeBar.style.visibility = "hidden";
          volumeLevel.style.visibility = "hidden";
          logoMute.style.visibility = "hidden";
          volumenPantalla.style.visibility = "hidden"
          canalActual = "canalP";
          listChan.style.visibility = "hidden";
          sourceSelec = 0;
          video.pause();
          video.src = "";
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
      //Nombre de canal en pantalla y envío de ruta y reproduccion de video
      if ((flagBoton == 1) && (sourceSelec == 0)) {

        if (("canal" + evento.target.id.slice(-1)) === "canal1") {
          canalPantalla.innerHTML = "TVE"

          video.pause();
          video.src = "./img/video1.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal2") {
          canalPantalla.innerHTML = "LA 2"

          video.pause();
          video.src = "./img/video2.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal3") {
          canalPantalla.innerHTML = "ANTENA 3"

          video.pause();
          video.src = "./img/video3.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal4") {
          canalPantalla.innerHTML = "QUATRO"

          video.pause();
          video.src = "./img/video4.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal5") {
          canalPantalla.innerHTML = "TELECINCO"

          video.pause();
          video.src = "./img/video5.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal6") {
          canalPantalla.innerHTML = "LA SEXTA"

          video.pause();
          video.src = "./img/video6.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal7") {
          canalPantalla.innerHTML = "TDP"

          video.pause();
          video.src = "./img/video7.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal8") {
          canalPantalla.innerHTML = "DISNEY"

          video.pause();
          video.src = "./img/video8.mp4";
          video.load();
          video.play();
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal9") {
          canalPantalla.innerHTML = "CANAL NOU"

          video.pause();
          video.src = "./img/video9.mp4";
          video.load();
          video.play();
        }
      }
      //Actualizo el canal actual
      canalActual = ("canal" + evento.target.id.slice(-1));

    })
  }
)

//FUNCIONALIDAD BOTON CHANEL UP/DOWN
arrayChanel.map(
  item => {
    item.addEventListener("click", (evento) => {
      //Si se acaba de encender la TV espera hasta que pulses un numero o un de los botones de chanel up/down
      if ((canalActual === "canalP") && (flagBoton == 1) && ((evento.target.id) === "btnU")) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal9")
        canalActual = "canal9";
      }
      if ((canalActual === "canalP") && (flagBoton == 1) && ((evento.target.id) === "btnD")) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal1")
        canalActual = "canal1";
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
      //Fecha y hora en la pantalla
      if ((flagBoton == 1) && (sourceSelec == 0)) {
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

      //Nombre de canal en pantalla y reproduccion de video
      if ((flagBoton == 1) && (sourceSelec == 0)) {
        if (canalActual == "canal1") {
          canalPantalla.innerHTML = "TVE"

          video.pause();
          video.src = "./img/video1.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal2") {
          canalPantalla.innerHTML = "LA 2"

          video.pause();
          video.src = "./img/video2.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal3") {
          canalPantalla.innerHTML = "ANTENA 3"

          video.pause();
          video.src = "./img/video3.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal4") {
          canalPantalla.innerHTML = "QUATRO"

          video.pause();
          video.src = "./img/video4.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal5") {
          canalPantalla.innerHTML = "TELECINCO"

          video.pause();
          video.src = "./img/video5.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal6") {
          canalPantalla.innerHTML = "LA SEXTA"

          video.pause();
          video.src = "./img/video6.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal7") {
          canalPantalla.innerHTML = "TDP"

          video.pause();
          video.src = "./img/video7.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal8") {
          canalPantalla.innerHTML = "DISNEY"

          video.pause();
          video.src = "./img/video8.mp4";
          video.load();
          video.play();
        }
        if (canalActual == "canal9") {
          canalPantalla.innerHTML = "CANAL NOU"

          video.pause();
          video.src = "./img/video9.mp4";
          video.load();
          video.play();
        }
      }
    })
  }
)

//FUNCIOALIDAD BOTON SOURCE
arraySource.map(
  item => {
    item.addEventListener("click", (evento) => {
      //Variable de control de boton
      sourceSelec++;
      //Primer canal de source HDMI1
      if ((sourceSelec == 1) && (flagBoton == 1)) {
        //Cambio la clase del fondo
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canalS1")
        canalActual = "canalS1"

        //Visibilidad info pantalla
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

        //Activo la reproduccion del video
        video.pause();
        video.src = "./img/videoH1.mp4";
        video.load();
        video.play();
      }

      //Segundo canal de source HDMI2
      if ((sourceSelec == 2) && (flagBoton == 1)) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canalS2")
        canalActual = "canalS2"

        //Visibilidad info pantalla
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

        //Activo la reproduccion del video
        video.pause();
        video.src = "./img/videoH2.mp4";
        video.load();
        video.play();

      }

      //Primer canal de source LIVE TV
      if ((sourceSelec == 3) && (flagBoton == 1)) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal1");

        //Visibilidad info pantalla
        canalActual = "canal1";
        canalPantalla.innerHTML = "TVE"
        sourcePantalla.innerHTML = "LIVE TV";
        sourcePantalla.style.visibility = "visible";
        datePantalla.style.visibility = "visible";
        horaPantalla.style.visibility = "visible";
        sourceSelec = 0;

        //Fecha y hora permanecen durante 3 segundos
        setTimeout(function () {
          sourcePantalla.style.visibility = "hidden";
          datePantalla.style.visibility = "hidden";
          horaPantalla.style.visibility = "hidden";
        }, 3000);

        //Activo la reproduccion del video
        video.pause();
        video.src = "./img/video1.mp4";
        video.load();
        video.play();
      }
    })
  }
)

//CONTROL DE VOLUMEN
arrayVolumen.map(
  item => {
    item.addEventListener("click", (evento) => {
      //Condicion de estar la TV encendida
      if (flagBoton == 1) {
        if ((evento.target.id === "btn+") && (currentVolume < maxVolume)) {
          currentVolume += 1;
        }
        if ((evento.target.id === "btn-") && (currentVolume > minVolume)) {
          currentVolume -= 1;
        }
        //Sumo valor a la variable
        let volumenVideo = currentVolume / 100;
        volumeLevel.style.height = currentVolume + '%';

        //Le doy visibilidad a la barra y desaparece a los 3 segudnos
        logoMute.style.visibility = "hidden";
        volumeBar.style.visibility = "visible";
        volumeLevel.style.visibility = "visible";
        volumenPantalla.innerHTML = currentVolume;
        volumenPantalla.style.visibility = "visible"
        setTimeout(function () {
          volumeBar.style.visibility = "hidden";
          volumeLevel.style.visibility = "hidden";
          volumenPantalla.style.visibility = "hidden"
        }, 4000);
        video.volume = volumenVideo;
      }
    })
  }
)

//BOTON MUTE
arrayMute.map(
  item => {
    item.addEventListener("click", (evento) => {
      //Condicion de estar la TV encendida. Primera vez que pulsas se mutea
      if (flagBoton == 1) {
        if (muteOn == 0) {
          //Muteo el sonido del video
          video.volume = 0;
          //Muestro info pantalla
          volumeBar.style.visibility = "hidden";
          volumeLevel.style.visibility = "hidden";
          volumenPantalla.style.visibility = "hidden"
          logoMute.style.visibility = "visible";
          muteOn++;
        }
        //Segunda vez que pulsas se activa sonido
        else {
          video.volume = currentVolume / 100;
          logoMute.style.visibility = "hidden";
          muteOn = 0;
        }
      }
    })
  }
)

//BOTON LISTA CANALES
arrayList.map(
  item => {
    item.addEventListener("click", (evento) => {
      //Condicion de estar la TV encendida. Lo muestro durante 4 segundos
      if (flagBoton == 1) {
        listChan.style.visibility = "visible";
        setTimeout(function () {
          listChan.style.visibility = "hidden";
        }, 4000);
      }
    })
  }
)


//FUNCIONALIDAD LED MANDO
arrayLed.map(
  item => {
    item.addEventListener("click", (evento) => {
      //Funcionará siempre. Con cualquier boton hasta que el manda se quede sin pilas
      ledRemote.classList.remove(ledRemote.classList[ledRemote.classList.length - 1])
      ledRemote.classList.add("ledOn")
      setTimeout(function () {
        ledRemote.classList.remove(ledRemote.classList[ledRemote.classList.length - 1])
        ledRemote.classList.add("ledMando")
      }, 200);
    })
  }
)