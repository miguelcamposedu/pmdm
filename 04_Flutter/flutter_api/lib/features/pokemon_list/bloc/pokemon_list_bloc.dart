import 'package:flutter/material.dart';
import 'package:flutter_api/core/models/pokemon_list_response.dart';
import 'package:flutter_api/core/services/pokemon_service.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
part 'pokemon_list_event.dart';
part 'pokemon_list_state.dart';

class PokemonListBloc extends Bloc<PokemonListEvent, PokemonListState> {
  PokemonListBloc(PokemonService pokemonService) : super(PokemonListInitial()) {
    on<PokemonListFetchAllEvent>((event, emit) async {
      emit(PokemonListLoading());
      try {
        var apiPokemonList = await pokemonService.getAllPokemon();
        emit(PokemonListSucess(pokemonList: apiPokemonList));
      } catch (e) {
        emit(PokemonListError(message: e.toString()));
      }
    });
  }
}
