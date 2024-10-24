import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people-list-response.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css',
})
export class PeopleListComponent implements OnInit {
  listadoPeople: People[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((response) => {
      this.listadoPeople = response.results;
    });
  }
  getPersonId(url: string): number {
    return parseInt(url.split('/')[5]);
  }
}
