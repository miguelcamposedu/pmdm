import 'package:flutter_api/core/models/pokemon_list_response.dart';

abstract class PokemonInterface {
  Future<List<PokemonResult>> getAllPokemon();
  Future<PokemonResult> getOnePokemon(String id);
}
