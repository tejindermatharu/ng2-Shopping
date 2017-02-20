import { Component, Output, EventEmitter } from '@angular/core';
import { Product }  from '../../Models/product';

@Component({
    selector: 'admin-input',
    templateUrl: 'app/Admin/Input/input.html'
})
export class InputComponent {
    @Output() added = new EventEmitter<Product>();

    name = 'Input';

    product: Product;

    constructor() {
        this.product = new Product();
        this.product.date = new Date();
    }

    public add(): void {

        var product = this.product;

        this.added.emit(product);
    }

}