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
        this.createNewProduct();
    }

    public add(): void {

        this.added.emit(Object.assign(this.product));

        //Reset product object
        this.createNewProduct();
    }

    private createNewProduct(): void {

        this.product = new Product();
        this.product.date = new Date();
    }

}