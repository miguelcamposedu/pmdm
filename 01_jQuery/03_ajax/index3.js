$(document).ready(function () {
  getPokemonListV2();

  $(document).on("click", "#btn-get-data", function () {
    getPokemonListV2();
  });

  function getPokemonListV1() {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",
      method: "GET",
    }).done(function (resp) {
      var listadoPomemon = resp.results;
      listadoPomemon.forEach(function (pokemon) {
        var template = `<p><h1 class="pokemon" pokemonid="1">${pokemon.name}</h1></p>`;
        $("#data-content").append(template);
      });
    });
  }

  function getPokemonListV2() {
    $("#data-content").html("<img src='loading.gif' />");
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",
      method: "GET",
    }).done(function (resp) {
      setTimeout(function () {
        $("#data-content").html("");
        var listadoPomemon = resp.results;
        listadoPomemon.forEach(function (pokemon) {
          var pokemonId = pokemon.url.split("/")[6];
          var template = `<p><a href="detail.html?pid=${pokemonId}"><h1 class="pokemon" pokemonid="1">${pokemon.name}</h1><img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png"</a></p>`;
          $("#data-content").append(template);
        });
      }, 1000);
    });
  }
});
