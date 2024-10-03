$(document).ready(function () {
  var i = 1;

  $(document).on("click", "#btn-add-paragraph", function () {
    $("#content").append(
      '<p class="row red"><p class="yellow">' +
        i +
        ' >> Lorem ipsum <button class="btn-delete-paragraph">Delete paragraph</button></p></p>'
    );
    i++;
  });

  $(document).on("click", ".btn-delete-paragraph", function () {
    $(this).closest("p .row").remove();
  });
});
