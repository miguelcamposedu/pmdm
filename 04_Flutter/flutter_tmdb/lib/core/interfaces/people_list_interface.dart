import 'package:flutter_tmdb/core/models/people_list_popular_response.dart';

abstract class PeopleListInterface {
  Future<List<Person>> getPopular();
}
