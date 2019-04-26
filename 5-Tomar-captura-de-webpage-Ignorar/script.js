/**
 * Ejemplo 5 de html2canvas para convertir el HTML de una web
 * a un elemento canvas - Ignorar algunos elementos al tomar la captura
 * 
 * Nota: también puedes agregar el atributo data-html2canvas-ignore al elemento en cuestión
 * 
 * @author parzibyte
 */
//Definimos el botón para escuchar su click, y también el contenedor del canvas
const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
  $objetivo = document.querySelector("#contenedor"), // A qué le tomamos la foto
  $contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas

// Agregar el listener al botón
$boton.addEventListener("click", () => {
  const opciones = {
    ignoreElements: elemento => {
      // Una función que ignora elementos. Regresa true si quieres que
      // el elemento se ignore, y false en caso contrario
      const tipo = elemento.nodeName.toLowerCase();
      // Si es imagen o encabezado h1, ignorar
      if (tipo === "img" || tipo === "h1") {
        return true;
      }
      // Para todo lo demás, no ignorar
      return false
    }
  };
  html2canvas($objetivo, opciones) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
      // Cuando se resuelva la promesa traerá el canvas
      $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
    });
});