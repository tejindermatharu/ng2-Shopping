import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AdminMainComponent }  from "./admin.main.component";
import { Product, IProduct }  from '../../Models/product';
import { IProductDataService }  from "../Repository/product.data.service";

var adminMainComponent: AdminMainComponent;
var product: IProduct = new Product("product1", "desc", 10);

describe('Admin Main Component Tests', () => {
    
    beforeEach(() => {

        class MockProductDataService implements IProductDataService {
 
            getAllProducts(): Observable<IProduct[]> {
                
                //Observable.of returns a  synchronous Observable which simulates our response from the real Http.get service method. 
                return Observable.of([product]);
            }

            getAllProductsPromise(): Promise<IProduct[]> { throw new Error("Not implemented"); }
            save(product: IProduct): Observable<any>  { throw new Error("Not implemented"); }
        }

        var mockProductDataService = new MockProductDataService();

        adminMainComponent = new AdminMainComponent((mockProductDataService) as any) ;
    });

    describe('should add product to list when product is added', () => {

        var product =  new Product();

        adminMainComponent.productAdded(product);

        expect(adminMainComponent.productsList[0]).toEqual(product);
    });

});