import 'dart:convert';

import 'result.dart';

class PokemonListResponse {
  int? count;
  String? next;
  dynamic previous;
  List<Pokemon>? results;

  PokemonListResponse({this.count, this.next, this.previous, this.results});

  factory PokemonListResponse.fromMap(Map<String, dynamic> data) {
    return PokemonListResponse(
      count: data['count'] as int?,
      next: data['next'] as String?,
      previous: data['previous'] as dynamic,
      results: (data['results'] as List<dynamic>?)
          ?.map((e) => Pokemon.fromMap(e as Map<String, dynamic>))
          .toList(),
    );
  }

  Map<String, dynamic> toMap() => {
        'count': count,
        'next': next,
        'previous': previous,
        'results': results?.map((e) => e.toMap()).toList(),
      };

  /// `dart:convert`
  ///
  /// Parses the string and returns the resulting Json object as [PokemonListResponse].
  factory PokemonListResponse.fromJson(String data) {
    return PokemonListResponse.fromMap(
        json.decode(data) as Map<String, dynamic>);
  }

  /// `dart:convert`
  ///
  /// Converts [PokemonListResponse] to a JSON string.
  String toJson() => json.encode(toMap());
}
