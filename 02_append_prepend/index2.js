$(document).ready(function () {
  $(document).on("click", "#btn-add-paragraph", function () {
    $("#content").append("<p>Lorem ipsum</p>");
  });
});
