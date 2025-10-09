$(document).ready(function () {
  var abecedario = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  $(document).on("click", "#btn-cypher", function () {
    // console.log("Evento click cypher");
    var textToCypher = $("#sourceTextArea").val();
    var movement = parseInt($("#inputMovement").val());
    var textCypher = "";
    for (var i = 0; i < textToCypher.length; i++) {
      var currentChar = textToCypher[i];
      var charPosition = abecedario.indexOf(currentChar);
      if (charPosition == -1) {
        textCypher += currentChar;
      } else {
        var newPosition = (charPosition + movement) % abecedario.length;
        textCypher += abecedario[newPosition];
      }
    }

    $("#cypherTextArea").val(textCypher);
  });

  $(document).on("click", "#btn-descypher", function () {
    // console.log("Evento click cypher");
    var textToDescypher = $("#cypherTextArea").val();
    var movement = parseInt($("#inputMovement").val());
    var textSource = "";
    for (var i = 0; i < textToDescypher.length; i++) {
      var currentChar = textToDescypher[i];
      var charPosition = abecedario.indexOf(currentChar);
      if (charPosition == -1) {
        textSource += currentChar;
      } else {
        var difference = charPosition - movement;
        var newPosition =
          difference < 0 ? abecedario.length - difference : difference;
        textSource += abecedario[newPosition];
      }
    }

    $("#sourceTextArea").val(textSource);
  });

  $(document).on("keyup", "#sourceTextArea", function () {
    $("#sourceTextArea").val($("#sourceTextArea").val().toUpperCase());
  });
});
