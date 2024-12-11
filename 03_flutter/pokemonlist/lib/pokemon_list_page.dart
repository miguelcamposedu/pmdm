import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:pokemonlist/models/interfaces/pokemon_list_response/pokemon_list_response.dart';
import 'package:http/http.dart' as http;

class PokemonListPage extends StatefulWidget {
  const PokemonListPage({super.key});

  @override
  State<PokemonListPage> createState() => _PokemonListPageState();
}

class _PokemonListPageState extends State<PokemonListPage> {
  late Future<PokemonListResponse> pokemonList;

  @override
  void initState() {
    super.initState();
    pokemonList = fetchPokemon();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Pokemon List'),
      ),
      body: FutureBuilder<PokemonListResponse>(
        future: pokemonList,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return ListView(
              children: snapshot.data!.results!.map((pokemon) {
                return ListTile(
                  title: Text(pokemon.name!),
                );
              }).toList(),
            );
          } else if (snapshot.hasError) {
            return Text('${snapshot.error}');
          }

          // By default, show a loading spinner.
          return const CircularProgressIndicator();
        },
      ),
    );
  }

  Future<PokemonListResponse> fetchPokemon() async {
    final response =
        await http.get(Uri.parse('https://pokeapi.co/api/v2/pokemon'));

    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      return PokemonListResponse.fromJson(response.body);
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      throw Exception('Failed to load album');
    }
  }
}
