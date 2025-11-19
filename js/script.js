// capturar el sitio de 
// guardar el dato en el localStorage
// cada vez que se refresque la página se añade una visita al contador
// 


const btnReestablecer = document.getElementById("btnReestablecer")
const contadorVisitas = document.getElementById("contadorVisitas")

const getCount = () => localStorage.getItem("countVisit") || 0 // Esta es la declaración de la función getCount
const setCount = (visit) => localStorage.setItem('countVisit', visit) // Esta es la declaración de la función setCount

let countVisit = getCount()

const updateCount = () => { // Esta es la función de declaración de actualizar el número en el localStorage
  setCount(countVisit)
  contadorVisitas.textContent = countVisit
}

countVisit++ //sumamos 1 a nuerstro contador 
updateCount() // ejecutamos la actualización

btnReestablecer.addEventListener("click", () => {
  localStorage.setItem("countVisit", 0)
  contadorVisitas.textContent = localStorage.getItem("countVisit")
})