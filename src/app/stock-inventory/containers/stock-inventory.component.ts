import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../models/product.interface';
@Component({
  selector: 'app-stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  templateUrl: 'stock-inventory.component.html',
})
export class StockInventoryComponent {
  products: Product[] = [
    { id: 1, price: 2800, name: 'MacBook Pro' },
    { id: 2, price: 50, name: 'Iphone X' },
    { id: 3, price: 400, name: 'IPad Pro' },
    { id: 4, price: 230, name: 'iWatch' },
    { id: 5, price: 735, name: 'iPod ' },
  ];
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ]),
  });

  createStock(stock): FormGroup {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
