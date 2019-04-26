/**
 * Ejemplo 6 de html2canvas para convertir el HTML de una web
 * a un elemento canvas - Poner resultado sobre canvas existente
 * 
 * @author parzibyte
 */
//Definimos el botón para escuchar su click, y también el contenedor del canvas
const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
  $objetivo = document.querySelector("#contenedor"), // A qué le tomamos la foto
  $canvas = document.querySelector("#canvas"); // En dónde ponemos el resultado (debe ser un canvas)

// Agregar el listener al botón
$boton.addEventListener("click", () => {
  const opciones = {
    canvas: $canvas, // Indicar el elemento HTML
  };
  html2canvas($objetivo, opciones) // Llamar a html2canvas y pasarle el elemento con las opciones
    .then(canvas => {
      // Aquí ha terminado y ha puesto resultado en el canvas que le indicamos
    });
});