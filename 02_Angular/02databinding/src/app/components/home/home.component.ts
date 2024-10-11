import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  name = '';
  lastName = '';
  age = 0;
  lifetime = 'young';

  ngOnInit(): void {
    this.name = 'Miguel';
    this.lastName = 'Campos';
    this.age = 18;
    if (this.age >= 30) {
      this.lifetime = 'adult';
    }
  }

  calcBirthYear() {
    return 2024 - this.age;
  }

  showInfoDialog() {
    alert(`No tengo más info para tí ${this.name}`);
  }
}
