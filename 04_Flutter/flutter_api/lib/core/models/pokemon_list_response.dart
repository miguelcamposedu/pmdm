import 'dart:convert';

class PokemonListResponse {
  final int count;
  final String? next;
  final String? previous;
  final List<PokemonResult> results;

  PokemonListResponse({
    required this.count,
    this.next,
    this.previous,
    required this.results,
  });

  factory PokemonListResponse.fromJson(String str) =>
      PokemonListResponse.fromMap(json.decode(str));

  factory PokemonListResponse.fromMap(Map<String, dynamic> json) =>
      PokemonListResponse(
        count: json["count"],
        next: json["next"],
        previous: json["previous"],
        results: List<PokemonResult>.from(
          json["results"].map((x) => PokemonResult.fromMap(x)),
        ),
      );

  Map<String, dynamic> toMap() => {
    "count": count,
    "next": next,
    "previous": previous,
    "results": List<dynamic>.from(results.map((x) => x.toMap())),
  };
}

class PokemonResult {
  final String name;
  final String url;

  PokemonResult({required this.name, required this.url});

  factory PokemonResult.fromMap(Map<String, dynamic> json) =>
      PokemonResult(name: json["name"], url: json["url"]);

  Map<String, dynamic> toMap() => {"name": name, "url": url};
}
