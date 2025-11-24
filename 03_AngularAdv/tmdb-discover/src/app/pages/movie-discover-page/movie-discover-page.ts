import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres-service';
import { Genre } from '../../models/genre.interface';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiscoverService } from '../../services/discover-service';
import { MovieDiscover } from '../../models/discover-movie-response.interface';

@Component({
  selector: 'app-movie-discover-page',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-discover-page.html',
  styleUrl: './movie-discover-page.css',
})
export class MovieDiscoverPage implements OnInit {
   genresMovieList: Genre[] = [];
   genreMovieSearch = new FormControl('', Validators.required);
   movieList: MovieDiscover[] = [];

  constructor(private genresService: GenresService, private discoverService: DiscoverService) {}

  ngOnInit(): void {
    this.genresService.getMovieList().subscribe(resp => {
      this.genresMovieList = resp.genres;
    });
  }

  searchMovies() {
    if(this.genreMovieSearch.value == '') {
      this.movieList = [];
    } else {
      this.discoverService.getMovieList(this.genreMovieSearch.value!).subscribe(resp => {
        this.movieList = resp.results;
      })
    }
  }

  getSubStr(text: string) {
    return text.length > 50? text.substring(0,49)+'...': text;
  }

  getImageUrl(posterPath: string) {
return `https://image.tmdb.org/t/p/w500${posterPath}`;
}

}
