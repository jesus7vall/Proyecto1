const formulario = document.getElementById("formulario");//formulario
const entrada = document.getElementById("entrada");//entrada
const resultado = document.getElementById("tabla");//resultado

let posits = JSON.parse(localStorage.getItem("posits")) || [];//Para que recupere los posits guardados

function guardarNotas() {
  localStorage.setItem("posits", JSON.stringify(posits_guardar));
} //Funcion guardar en LocalStorage

function mostrarNotas() {
  tabla.innerHTML = ""; 
  posits.forEach((posit, index) => {
    const div = document.createElement("div");
    div.className = "nota";
    div.textContent = posit;
  });
}//Funcion Mostrar posits
