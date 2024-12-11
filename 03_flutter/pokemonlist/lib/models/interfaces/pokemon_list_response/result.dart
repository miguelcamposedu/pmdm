import 'dart:convert';

class Pokemon {
  String? name;
  String? url;

  Pokemon({this.name, this.url});

  factory Pokemon.fromMap(Map<String, dynamic> data) => Pokemon(
        name: data['name'] as String?,
        url: data['url'] as String?,
      );

  Map<String, dynamic> toMap() => {
        'name': name,
        'url': url,
      };

  /// `dart:convert`
  ///
  /// Parses the string and returns the resulting Json object as [Result].
  factory Pokemon.fromJson(String data) {
    return Pokemon.fromMap(json.decode(data) as Map<String, dynamic>);
  }

  /// `dart:convert`
  ///
  /// Converts [Result] to a JSON string.
  String toJson() => json.encode(toMap());
}
