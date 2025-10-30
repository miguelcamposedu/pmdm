import { Component } from '@angular/core';
import { Product } from '../product/product';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-shop',
  imports: [Product],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  qtyTotal = 0;
  productos: Producto[] = [
    {
      name: 'Burguer monchitos',
      precio: 14.99,
      img: 'https://www.indisa.es/adjuntos/fichero_185242_20250930.jpg',
    },
    {
      name: 'Chips',
      precio: 5.99,
      img: 'https://i.pinimg.com/736x/81/69/65/8169653b211d841da5160417d454f098.jpg',
    },
  ];

  decrementarTotal() {
    this.qtyTotal--;
  }

  incrementarTotal() {
    this.qtyTotal++;
  }
}
