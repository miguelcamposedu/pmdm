import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  name = 'Tesla Model X';
  automatic = false;
  manual = true;
  imgSrc =
    'https://content.r9cdn.net/rimg/car-images/generic/05_suv-small_white.png?height=232';
  price = 298;
}
