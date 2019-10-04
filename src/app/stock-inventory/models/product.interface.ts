import { FormGroup } from '@angular/forms';

export interface Product {
  id: number;
  price: number;
  name: string;
}

export interface Stock {
  group: number;
  quantity: number;
}
