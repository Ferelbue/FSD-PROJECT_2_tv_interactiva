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
const volumen = document.getElementsByClassName("botonVol")
let arrayVolumen = Array.from(volumen)

let video = document.getElementById("myVideo")
let val = 0;





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
          canalActual = "canalP";
          sourceSelec = 0;
          PlayVideo()
          function PlayVideo() {
            video.pause();
            video.src = "";
            video.load();
            video.play();
          }
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
          PlayVideo()
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video1.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal2") {
          canalPantalla.innerHTML = "LA 2"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video2.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal3") {
          canalPantalla.innerHTML = "ANTENA 3"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video3.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal4") {
          canalPantalla.innerHTML = "QUATRO"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video4.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal5") {
          canalPantalla.innerHTML = "TELECINCO"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video5.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal6") {
          canalPantalla.innerHTML = "LA SEXTA"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video6.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal7") {
          canalPantalla.innerHTML = "TDP"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video7.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal8") {
          canalPantalla.innerHTML = "DISNEY"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video8.mp4";
            video.load();
            video.play();
          }
        }
        if (("canal" + evento.target.id.slice(-1)) === "canal9") {
          canalPantalla.innerHTML = "CANAL NOU"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video9.mp4";
            video.load();
            video.play();
          }
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
      console.log(evento.target.id.slice(-1))
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
        if (canalActual == "canal1") {
          canalPantalla.innerHTML = "TVE"
          PlayVideo()
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video1.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal2") {
          canalPantalla.innerHTML = "LA 2"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video2.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal3") {
          canalPantalla.innerHTML = "ANTENA 3"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video3.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal4") {
          canalPantalla.innerHTML = "QUATRO"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video4.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal5") {
          canalPantalla.innerHTML = "TELECINCO"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video5.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal6") {
          canalPantalla.innerHTML = "LA SEXTA"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video6.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal7") {
          canalPantalla.innerHTML = "TDP"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video7.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal8") {
          canalPantalla.innerHTML = "DISNEY"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video8.mp4";
            video.load();
            video.play();
          }
        }
        if (canalActual == "canal9") {
          canalPantalla.innerHTML = "CANAL NOU"
          PlayVideo();
          function PlayVideo() {
            video.pause();
            video.src = "http://127.0.0.1:5500/img/video9.mp4";
            video.load();
            video.play();
          }
        }
      }

    })
  }
)

arraySource.map(
  item => {
    item.addEventListener("click", (evento) => {

      sourceSelec++;

      if ((sourceSelec == 1) && (flagBoton == 1)) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canalS1")
        canalActual = "canalS1"
        PlayVideo();
        function PlayVideo() {
          video.pause();
          video.src = "http://127.0.0.1:5500/img/videoH1.mp4";
          video.load();
          video.play();
        }
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
      if ((sourceSelec == 2) && (flagBoton == 1)) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canalS2")
        canalActual = "canalS2"

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
        PlayVideo();
        function PlayVideo() {
          video.pause();
          video.src = "http://127.0.0.1:5500/img/videoH2.mp4";
          video.load();
          video.play();
        }
      }

      if ((sourceSelec == 3) && (flagBoton == 1)) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal1");
        PlayVideo();
        function PlayVideo() {
          video.pause();
          video.src = "http://127.0.0.1:5500/img/video1.mp4";
          video.load();
          video.play();
        }
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





arrayVolumen.map(
  item => {
    item.addEventListener("click", (evento) => {

      console.log(evento.target.id.slice(-1))
      if(evento.target.id.slice(-1)=="+"){

        val++;
      }
      if(evento.target.id.slice(-1)=="-"){

        val--;
      }

      window.SetVolume = function()
      {
          var player = document.getElementById('video');
          console.log('Before: ' + player.volume);
          player.volume = val / 100;
          console.log('After: ' + player.volume);
      }


    })
  }
)