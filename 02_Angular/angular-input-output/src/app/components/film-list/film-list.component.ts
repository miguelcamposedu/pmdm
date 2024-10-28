import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/films-response.interface';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css',
})
export class FilmListComponent implements OnInit {
  listadoPeliculas: Film[] = [];
  peliculasSelected: number[] = [];
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((response) => {
      this.listadoPeliculas = response.results;
    });
  }

  newElementSelected(episode_id: number) {
    console.log('Componente padre: ', episode_id);
    debugger;
    if (this.peliculasSelected.includes(episode_id)) {
      let indexToDelete = this.peliculasSelected.indexOf(episode_id);
      this.peliculasSelected.splice(indexToDelete, 1);
    } else {
      this.peliculasSelected.push(episode_id);
    }
  }
}
