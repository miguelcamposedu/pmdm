import 'package:flutter_api/core/services/pokemon_service.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_api/features/pokemon_list/bloc/pokemon_list_bloc.dart';

class PokemonPageView extends StatefulWidget {
  const PokemonPageView({super.key});

  @override
  State<PokemonPageView> createState() => _PokemonPageViewState();
}

class _PokemonPageViewState extends State<PokemonPageView> {
  late PokemonListBloc pokemonListBloc;

  @override
  void initState() {
    super.initState();
    pokemonListBloc = PokemonListBloc(PokemonService())
      ..add(PokemonListFetchAllEvent());
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Pokemon List')),
      body: BlocBuilder<PokemonListBloc, PokemonListState>(
        bloc: pokemonListBloc,
        builder: (context, state) {
          if (state is PokemonListLoading) {
            return const Center(child: CircularProgressIndicator());
          } else if (state is PokemonListSucess) {
            return Expanded(
              child: ListView.builder(
                itemCount: state.pokemonList.length,
                itemBuilder: (context, index) {
                  return ListTile(title: Text(state.pokemonList[index].name));
                },
              ),
            );
          } else if (state is PokemonListError) {
            return Center(child: Text(state.message));
          }
          return const Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
