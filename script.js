const formulario = document.getElementById("formulario");//formulario
const entrada = document.getElementById("entrada");//entrada
const tabla = document.getElementById("tabla");//tabla

let notas = JSON.parse(localStorage.getItem("notas")) || [];//Para que recupere los posits guardados
console.log("Notas cargadas:", notas);

function guardarNotas() {
  localStorage.setItem("notas", JSON.stringify(notas));
  console.log("Se guardan las notas:", notas);
} //Funcion guardar en LocalStorage

//Funcion mostrar notas
function mostrarNotas() {
    //Vaciamos la tabla
  tabla.innerHTML = "";
   //Creamos un div de cada nota
  notas.forEach((nota, index) => {
    const div = document.createElement("div");
    div.className = "nota";
    div.contentEditable = true;
    div.innerText = nota;
    //Evento para cuando se edita la nota
        div.addEventListener("input", () => {
      notas[index] = div.innerText; 
      guardarNotas();
    });
    //Boton para borrar la nota
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "❌";
    //Evento borrado nota
    botonBorrar.addEventListener("click", () => {
      notas.splice(index, 1);
      guardarNotas();
      mostrarNotas();
    });
    //añdir boton dentro de la nota
    div.appendChild(botonBorrar);
    //añadir la nota a la tabla
    tabla.appendChild(div);
  });
}
//Añadir nueva nota
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = entrada.value.trim();
  if (texto === "") return; //

  notas.push(texto);   // Añadimos al array
  guardarNotas();      // Guardamos en localStorage
  mostrarNotas();      // Mostramos en la tabla
  formulario.reset();  // Limpiamos el formulario
});


