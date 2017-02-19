import { Component } from '@angular/core';
import { Product }  from '../Models/product';

@Component({
  selector: 'admin-input',
  templateUrl: 'app/Input/input.html'
})
export class InputComponent
{
    name = 'Inputs';

    product: Product;

    constructor() {
        this.product = new Product();

        this.product.date = new Date();
    }

    add(): void {

        var product = this.product;
    }

}