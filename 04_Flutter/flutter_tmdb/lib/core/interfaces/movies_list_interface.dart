import 'package:flutter_tmdb/core/models/movies_list_popular_response.dart';
import 'package:flutter_tmdb/core/services/movie_service.dart';

abstract class MoviesListInterface {
  Future<List<Movie>> getList(MovieListType listType);
}
