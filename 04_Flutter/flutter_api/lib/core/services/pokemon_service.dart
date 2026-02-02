import 'package:flutter_api/core/interfaces/pokemon_interface.dart';
import 'package:flutter_api/core/models/pokemon_list_response.dart';
import 'package:http/http.dart' as http;

class PokemonService implements PokemonInterface {
  final String _apiBaseUrl = "https://pokeapi.co/api/v2/pokemon/";

  @override
  Future<List<PokemonResult>> getAllPokemon() async {
    var url = Uri.parse(_apiBaseUrl + '?limit=200&offset=0');
    try {
      var response = await http.get(url);

      if (response.statusCode == 200 || response.statusCode == 201) {
        /*var pokemonListResponse = PokemonListResponse.fromJson(
          jsonDecode(response.body),
        );*/
        var pokemonListResponse = PokemonListResponse.fromJson(response.body);
        return pokemonListResponse.results;
      } else {
        return [];
      }
    } catch (e) {
      return [];
    }
  }

  @override
  Future<PokemonResult> getOnePokemon(String id) {
    // TODO: implement getOnePokemon
    throw UnimplementedError();
  }
}
