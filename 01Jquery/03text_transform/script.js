$(document).ready(function () {
  var palabrotas = ["cabrito", "hijo de tu madre", "pesao"];

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
    } else {
      if ($("#checkPolite").prop("checked") == true) {
        input = cleanPalabrotas(input);
      }

      if (action == "upper") {
        output = toUpperCase(input);
      } else if (action == "lower") {
        output = toLowerCase(input);
      }
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

  function cleanPalabrotas(str) {
    var strSinPalabrotas = str;
    palabrotas.forEach(function (palabrota) {
      console.log(palabrota);
      var expresionRegular = new RegExp(palabrota, "gi");
      strSinPalabrotas = strSinPalabrotas.replace(expresionRegular, "***");
    });
    return strSinPalabrotas;
  }
});
