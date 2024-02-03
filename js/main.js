const buttons = document.getElementsByClassName("button")
let arrayButtons = Array.from(buttons)
let screen = document.getElementById("screen")
let ledEstado = document.getElementById("ledEstado")
let flagBoton = 0;
let now = new Date();
let horaPantalla = document.getElementById("hora")
let datePantalla = document.getElementById("date")

//CAMBIO DE CANALES
arrayButtons.map(
  item => {
    item.addEventListener("click", (evento) => {


      if ((evento.target.id) == "btnP") {
        if (flagBoton == 0) {
          horaPantalla.innerHTML = now.toLocaleTimeString();
          datePantalla.innerHTML = now.toLocaleDateString();
          flagBoton++;
          screen.classList.remove(screen.classList[screen.classList.length - 1])
          screen.classList.add("canalP")
          ledEstado.classList.remove(ledEstado.classList)
          ledEstado.classList.add("ledEstadoOn")
        } else {
          console.log(flagBoton)
          flagBoton--;
          horaPantalla.innerHTML = ""
          datePantalla.innerHTML = ""
          screen.classList.remove(screen.classList[screen.classList.length - 1])
          screen.classList.add("basicScreen")
          ledEstado.classList.remove(ledEstado.classList)
          ledEstado.classList.add("ledEstadoOff")
        }
      }
      if (flagBoton == 1) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal" + evento.target.id.slice(-1))
        horaPantalla.style.visibility = "visible";
        datePantalla.style.visibility = "visible";
        horaPantalla.innerHTML = now.toLocaleTimeString();
        datePantalla.innerHTML = now.toLocaleDateString();
        setTimeout(function () {
          horaPantalla.style.visibility = "hidden";
          datePantalla.style.visibility = "hidden";
        }, 3000);
      }
    })
  }
)

setTimeout(function () {
  horaPantalla.style.visibility = "hidden";
  datePantalla.style.visibility = "hidden";
}, 3000);

