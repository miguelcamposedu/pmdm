$(document).ready(function () {
  var count = 0;

  var pList = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu nisl, elementum sit amet tellus quis, consectetur sagittis nisl. Mauris eget tincidunt mi. Etiam hendrerit ac lectus quis mattis. Integer eu arcu lobortis, porttitor nulla cursus, sagittis nibh. Aliquam faucibus nunc sit amet mollis blandit. Proin convallis nec felis at ullamcorper. Cras lorem turpis, pretium eu eleifend at, porttitor at libero. Maecenas varius neque at dignissim tempor. Sed ex quam, sodales tempus sodales eu, finibus vitae diam. Quisque sed purus et nisi elementum finibus ultrices ac sapien. Aenean fermentum orci aliquam nulla pretium sodales. Fusce sit amet arcu erat.",
    "Suspendisse sodales sem ut diam imperdiet, id fermentum ligula rutrum. Pellentesque tempus ultricies magna. Nulla in dictum tellus. Nulla pretium pharetra neque, a venenatis arcu condimentum id. Ut ut leo vitae nisi scelerisque congue sit amet ut odio. Nullam egestas hendrerit lacus id fringilla. Cras molestie mauris vel ante luctus, sit amet pulvinar felis facilisis. Maecenas diam orci, pretium vel pellentesque id, eleifend ut elit. Curabitur feugiat eleifend arcu non lacinia. Etiam porttitor porttitor feugiat. Proin eget pretium nunc, gravida porta mi",
    "Proin condimentum dui quis est tempor vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in ullamcorper purus. Vivamus non arcu sit amet urna lobortis fringilla a eget erat. Donec cursus molestie ante. Duis eleifend, arcu vel cursus convallis, nulla nibh dapibus leo, quis condimentum est dui at nibh. Suspendisse potenti. Nam maximus orci sed dolor lobortis laoreet. Pellentesque non erat placerat lacus ultricies venenatis. Sed lobortis, nisi vitae egestas dignissim, tortor risus viverra neque, sed luctus odio ex quis eros.",
  ];

  $(document).on("click", "#btn-add-p", function () {
    $("#cuerpo").append(
      "<p>" +
        pList[count % 3] +
        '<button class="btn btn-danger btn-delete-p">Delete</button></p>'
    );
    count++;
  });

  $(document).on("click", ".btn-delete-p", function () {
    var elemento = $(this);
    elemento.parent().remove();
  });
});
