import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { People } from '../../models/people-list-response.interface';
import { PeopleDetailResponse } from '../../models/people-detail-response.interface';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.css',
})
export class PeopleDetailComponent implements OnInit {
  personId: string | null = '';
  person: PeopleDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) { }
  
  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id');
    
    this.peopleService.getOnePeople(parseInt(this.personId!)).subscribe(response => {
      this.person = response;
    }
  }
}
