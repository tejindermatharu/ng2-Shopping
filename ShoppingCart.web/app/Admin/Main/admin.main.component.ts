import { Component, OnInit } from '@angular/core';
import { Product }  from '../../Models/product';
import { ProductDataService } from '../Repository/product.data.service';

@Component({
    selector: 'admin-main-component',
    templateUrl: 'app/Admin/Main/admin.main.html'
})

export class AdminMainComponent implements OnInit {

    productsList: Product[];

    constructor(public productService: ProductDataService) {

    }

    ngOnInit(): void {
        this.productService.getAllProducts().subscribe((products: Product[]) => this.productsList = products);
    }

    public productAdded(product: Product): void {
        this.productService.save(product).subscribe(
            () => console.log('product saved successfully'));
    }

}