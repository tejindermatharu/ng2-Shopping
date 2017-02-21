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

        var product = Object.assign(this.product);

        //Reset product object
        this.createNewProduct();

        this.added.emit(product);
    }

    private createNewProduct(): void {

        this.product = new Product();
        this.product.date = new Date();
    }

}