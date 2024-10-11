$(document).ready(() => {
  var numColumnas = 4;

  $(document).on("click", ".btn-add-fila", function () {
    let html = $("tbody tr:last-child").html();
    $("tbody:last-child").append(`<tr>${html}</tr>`);
  });

  $(document).on("click", ".btn-add-col", function () {
    $("thead tr:last-child").append("<th>Email</th");
    $("tbody tr td:last-child").remove();
    $("tbody tr").append(
      "<td>vasili</td> <td> <button class='btn btn-danger btn-del-fila'>Borrar fila</button> </td>"
    );
  });

  $(document).on("click", "#btn-del-col", function () {
    $("td:last-child").prev().remove();
    $("th:last-child").remove();
  });

  $(document).on("click", ".btn-del-col", function () {
    var columnid = $(this).attr("columnid");
    $(".cell-col-" + columnid).remove();
    numColumnas--;
  });

  $(document).on("click", ".btn-del-fila", function () {
    var idElemento = $(this).attr("itemid");
    $(this).parent().parent().remove();
  });

  $(document).on("click", ".showHideColumn", function () {
    var columnid = $(this).attr("columnid");
    var selectorCheck = ".cell-col-" + columnid;
    $(this).prop("checked") ? $(selectorCheck).show() : $(selectorCheck).hide();
  });
});
