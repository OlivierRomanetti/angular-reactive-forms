import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  styleUrls: ['stock-products.component.scss'],
  templateUrl: 'stock-products.component.html',
})
export class StockProductsComponent {
  @Input()
  parent: FormGroup;

  @Output()
  removed = new EventEmitter<any>();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }
}
