import { Component, OnInit } from '@angular/core';
import { CustomEurPipe } from '../../pipes/custom-eur.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  titulo = 'Bienvenido a la Página de Inicio';
  precio = 125.75;
  createdAt = '2021-05-24';
  porcentajeDeVida = 0.75;
  customEurValue: string | number = 15;

  constructor(private customEur: CustomEurPipe) {}

  ngOnInit(): void {
    this.customEurValue = this.customEur.transform(this.customEurValue);
  }
}
