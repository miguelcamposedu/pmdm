$(document).ready(function () {
  // Selector de ID
  $("#pageTitle").html("Bye bye world");

  // Selector de clase
  //$(".course").css("color", "red");

  // Selector de etiqueta
  $("span").addClass("course");

  // Evento click
  /*
  $(document).on("click", "#span1Dam", function () {
    // $("#span1Dam").html("😁 1º DAM");
    $(this).html("😁 1º DAM");
  });
  */

  // Evento click
  /*$(document).on("click", "span", function () {
    $(this).html("😁 Has hecho click en este");
  });
  */

  /*
     EJERCICIO: hacer una página HTML, que por defecto tenga:

     1. Un párrafo que muestre un Texto Lorem ipsum
     2. Un botón situado en un sitio estratégico que me permita
     alternar el estilo de la página entre light/dark mode.

     Por defecto la página debe aparecer con el fondo de color
     blanco y el texto de color negro (Light mode).

     Pero si pulso el botón de cambio de modo, se debe cambiar
     al modo contrario. De manera que el Dark mode muestra 
     el fondo negro y la letra blanco.

     Curraros un poquito el botón para que muestre una etiqueta
     y un icono que representen al modo al que se cambia si se
     pulsa.
     */
});
