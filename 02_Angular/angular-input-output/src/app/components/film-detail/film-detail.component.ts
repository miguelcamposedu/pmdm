import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../models/films-response.interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css',
})
export class FilmDetailComponent {
  @Input() film: Film | undefined;
  @Output() filmChecked = new EventEmitter<number>();

  onCheckClick(filmClicked: Film | undefined) {
    console.log('Film clicked:', filmClicked);

    this.filmChecked.emit(filmClicked?.episode_id);
  }
}
