const buttons = document.getElementsByClassName("button")
let arrayButtons = Array.from(buttons)
let screen = document.getElementById("screen")
let flagBoton = 0;

//CAMBIO DE CANALES
arrayButtons.map(
  item => {
    item.addEventListener("click", (evento) => {


      if ((evento.target.id) == "btnP")
        if (flagBoton == 0) {
          flagBoton++;

          screen.classList.remove(screen.classList[screen.classList.length - 1])
          screen.classList.add("canalP")
        } else {
          flagBoton--;

          screen.classList.remove(screen.classList[screen.classList.length - 1])
          screen.classList.add("basicScreen")
        }

      if (flagBoton == 1) {

        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal" + evento.target.id.slice(-1))
      }
    })
  }
)
