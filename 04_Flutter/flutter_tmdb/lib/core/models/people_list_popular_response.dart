import 'dart:convert';

class PeopleListPopularResponse {
  final int page;
  final List<Person> results;
  final int? totalPages;
  final int? totalResults;

  PeopleListPopularResponse({
    required this.page,
    required this.results,
    this.totalPages,
    this.totalResults,
  });

  // --- MÉTODOS DE INTERFAZ RAW JSON ---
  factory PeopleListPopularResponse.fromRawJson(String str) =>
      PeopleListPopularResponse.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  // --- MAPEO ---
  factory PeopleListPopularResponse.fromJson(Map<String, dynamic> json) =>
      PeopleListPopularResponse(
        page: json["page"],
        results: List<Person>.from(
          json["results"].map((x) => Person.fromJson(x)),
        ),
        totalPages: json["total_pages"],
        totalResults: json["total_results"],
      );

  Map<String, dynamic> toJson() => {
    "page": page,
    "results": List<dynamic>.from(results.map((x) => x.toJson())),
    "total_pages": totalPages,
    "total_results": totalResults,
  };
}

class Person {
  final bool adult;
  final int gender;
  final int id;
  final List<KnownFor> knownFor;
  final String knownForDepartment;
  final String name;
  final double popularity;
  final String? profilePath;

  Person({
    required this.adult,
    required this.gender,
    required this.id,
    required this.knownFor,
    required this.knownForDepartment,
    required this.name,
    required this.popularity,
    this.profilePath,
  });

  factory Person.fromRawJson(String str) => Person.fromJson(json.decode(str));
  String toRawJson() => json.encode(toJson());

  factory Person.fromJson(Map<String, dynamic> json) => Person(
    adult: json["adult"] ?? false,
    gender: json["gender"] ?? 0,
    id: json["id"],
    knownFor: List<KnownFor>.from(
      json["known_for"].map((x) => KnownFor.fromJson(x)),
    ),
    knownForDepartment: json["known_for_department"] ?? "",
    name: json["name"] ?? "",
    popularity: json["popularity"]?.toDouble() ?? 0.0,
    profilePath: json["profile_path"],
  );

  Map<String, dynamic> toJson() => {
    "adult": adult,
    "gender": gender,
    "id": id,
    "known_for": List<dynamic>.from(knownFor.map((x) => x.toJson())),
    "known_for_department": knownForDepartment,
    "name": name,
    "popularity": popularity,
    "profile_path": profilePath,
  };
}

class KnownFor {
  final bool? adult;
  final String? backdropPath;
  final List<int> genreIds;
  final int id;
  final String? mediaType; // "movie" o "tv"
  final String originalLanguage;
  final String? originalTitle; // Para películas
  final String? originalName; // Para series TV
  final String overview;
  final String? posterPath;
  final String? releaseDate; // Para películas
  final String? firstAirDate; // Para series TV
  final String? title; // Para películas
  final String? name; // Para series TV
  final bool? video;
  final double voteAverage;
  final int voteCount;

  KnownFor({
    this.adult,
    this.backdropPath,
    required this.genreIds,
    required this.id,
    this.mediaType,
    required this.originalLanguage,
    this.originalTitle,
    this.originalName,
    required this.overview,
    this.posterPath,
    this.releaseDate,
    this.firstAirDate,
    this.title,
    this.name,
    this.video,
    required this.voteAverage,
    required this.voteCount,
  });

  factory KnownFor.fromRawJson(String str) =>
      KnownFor.fromJson(json.decode(str));
  String toRawJson() => json.encode(toJson());

  factory KnownFor.fromJson(Map<String, dynamic> json) => KnownFor(
    adult: json["adult"],
    backdropPath: json["backdrop_path"],
    genreIds: List<int>.from(json["genre_ids"].map((x) => x)),
    id: json["id"],
    mediaType: json["media_type"],
    originalLanguage: json["original_language"] ?? "",
    originalTitle: json["original_title"],
    originalName: json["original_name"],
    overview: json["overview"] ?? "",
    posterPath: json["poster_path"],
    releaseDate: json["release_date"],
    firstAirDate: json["first_air_date"],
    title: json["title"],
    name: json["name"],
    video: json["video"],
    voteAverage: json["vote_average"]?.toDouble() ?? 0.0,
    voteCount: json["vote_count"] ?? 0,
  );

  Map<String, dynamic> toJson() => {
    "adult": adult,
    "backdrop_path": backdropPath,
    "genre_ids": List<dynamic>.from(genreIds.map((x) => x)),
    "id": id,
    "media_type": mediaType,
    "original_language": originalLanguage,
    "original_title": originalTitle,
    "original_name": originalName,
    "overview": overview,
    "poster_path": posterPath,
    "release_date": releaseDate,
    "first_air_date": firstAirDate,
    "title": title,
    "name": name,
    "video": video,
    "vote_average": voteAverage,
    "vote_count": voteCount,
  };

  /// Método de conveniencia para obtener el nombre sin importar si es TV o Película
  String get displayTitle => title ?? name ?? "Sin título";

  /// Método de conveniencia para obtener la fecha sin importar si es TV o Película
  String get displayDate => releaseDate ?? firstAirDate ?? "N/A";
}
