import { Component, Input, OnInit } from '@angular/core';
import { PeopleDetailResponse } from '../../models/people-detail-response.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrl: './people-item.component.css',
})
export class PeopleItemComponent implements OnInit {
  @Input() personId: number | undefined;
  person: PeopleDetailResponse | undefined;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getOnePeople(this.personId!).subscribe((response) => {
      this.person = response;
    });
  }

  getPeopleUrlImage(url: string) {
    let id = url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

  getPersonId(url: string): number {
    return parseInt(url.split('/')[5]);
  }
}
