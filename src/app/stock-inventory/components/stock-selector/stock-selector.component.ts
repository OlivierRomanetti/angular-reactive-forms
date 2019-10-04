import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product, Stock } from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  templateUrl: 'stock-selector.component.html',
})
export class StockSelectorComponent {
  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];

  @Output()
  added = new EventEmitter<any>();

  onAdd() {
    const stock = this.parent.get('selector').value;
    console.log('stock', stock);
    this.added.emit(stock);
  }
}
