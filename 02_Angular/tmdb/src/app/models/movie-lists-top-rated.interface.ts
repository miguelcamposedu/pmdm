import { Movie } from "./movie-lists-item.interface";

export interface MovieListsTopRatedResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
