$(document).ready(function () {
  var isLightMode = true;

  $(document).on("click", "#btnChangeMode", function () {
    if (isLightMode) {
      $("body").removeClass("lightMode");
      $("body").addClass("darkMode");
      $(this).html("🌞 Light mode");
    } else {
      $("body").addClass("lightMode");
      $("body").removeClass("darkMode");
      $(this).html("🌜 Dark mode");
    }

    isLightMode = !isLightMode;
  });
});
