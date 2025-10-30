import { Component, input, output } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  producto = input<Producto>();
  onIncClicked = output<void>();
  onDecClicked = output<void>();
  qty = 0;

  qtyDecrement() {
    this.qty > 0 ? this.qty-- : (this.qty = 0);
    this.onDecClicked.emit();
  }

  qtyIncrement() {
    this.qty++;
    this.onIncClicked.emit();
  }
}
