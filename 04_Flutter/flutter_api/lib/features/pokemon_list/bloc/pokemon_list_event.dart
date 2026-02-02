part of 'pokemon_list_bloc.dart';

@immutable
sealed class PokemonListEvent {}

final class PokemonListFetchAllEvent extends PokemonListEvent {}
