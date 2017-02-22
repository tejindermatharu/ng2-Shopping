import { Component, OnInit } from '@angular/core';
import { IProduct }  from '../../Models/product';
import { ProductDataService } from '../Repository/product.data.service';

@Component({
    selector: 'admin-main-component',
    templateUrl: 'app/Admin/Main/admin.main.html',
    styleUrls: ['app/Admin/admin.css']
})

export class AdminMainComponent implements OnInit {

    public productsList: IProduct[];

    constructor(public productService: ProductDataService) {

    }

    ngOnInit(): void {

        //using an observable
        this.productService.getAllProducts()
            .subscribe((data: IProduct[]) =>  this.productsList = Object.assign(data));

        //using a promise
        this.productService.getAllProductsPromise()
            .then((data) => this.productsList = data);
    }

    public productAdded(product: IProduct): void {

        this.productService.save(product)
            .subscribe(() => {
                this.productsList.push(Object.assign(product));
                console.log('product saved successfully');
            });
    }

}
