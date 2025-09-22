$(document).ready(function () {
  $(document).on("click", "#btnAction", function () {
    // Entrada
    var input = $("#textInput").val();

    // Transformación
    var output = "";
    var action = $("#selectAction").val();
    if (input == "") {
      alert("debe introducir un texto de entrada");
    } else if (action == "") {
      alert("debe seleccionar una acción");
    } else if (action == "upper") {
      output = toUpperCase(input);
    } else if (action == "lower") {
      output = toLowerCase(input);
    }

    // Salida
    $("#textOutput").val(output);
  });

  function toUpperCase(str) {
    return str.toUpperCase();
  }

  function toLowerCase(str) {
    return str.toLowerCase();
  }
});
