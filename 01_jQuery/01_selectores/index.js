$(document).ready(function () {
  // Selector de etiqueta
  $("h1").html("adios mundo cruel");

  // Selector de ID (#)
  $("#page-title").html("Titulo Hola Mundo");

  // Selector de clase (.)
  $(".red").attr("style", "color:#FF0000");

  // Evento click
  $(document).on("click", "#btn-clear", function () {
    $("h1").html("");
  });

  $(document).on("click", "#btn-restore", function () {
    // Selector de etiqueta
    $("h1").html("adios mundo cruel");

    // Selector de ID (#)
    $("#page-title").html("Titulo Hola Mundo");
  });

  $(document).on("click", "#add-yellow", function () {
    $("#page-title").addClass("yellow");
  });

  $(document).on("click", "#delete-yellow", function () {
    $("#page-title").removeClass("yellow");
  });

  $("table");
});
