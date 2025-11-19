import { Movie } from "./movie-lists-item.interface";

export interface MovieListsPopularResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
