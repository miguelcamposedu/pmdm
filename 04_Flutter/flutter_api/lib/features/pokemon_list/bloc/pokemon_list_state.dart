part of 'pokemon_list_bloc.dart';

@immutable
sealed class PokemonListState {}

final class PokemonListInitial extends PokemonListState {}

final class PokemonListLoading extends PokemonListState {}

final class PokemonListSucess extends PokemonListState {
  final List<PokemonResult> pokemonList;
  PokemonListSucess({required this.pokemonList});
}

final class PokemonListError extends PokemonListState {
  final String message;

  PokemonListError({required this.message});
}
