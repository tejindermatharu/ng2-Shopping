
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { IProduct }  from '../../Models/product';
import { AdminConstants }  from '../admin.constants';


@Injectable()
export class ProductDataService implements IProductDataService {

    private baseUrl: string = AdminConstants.baseUrl;

    constructor(private http: Http) {
    }

    public save(product: IProduct): Observable<any> {

        let body = JSON.stringify(product);
        let headers = this.getHeaders();
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.baseUrl, body, options)
                        //.map((res: Response) => res.json())
                        .catch((error: any) => {
                            return Observable.throw(error.json() || 'Server error');
            });
    }

    public getAllProducts(): Observable<IProduct[]> {

        return this.http.get(this.baseUrl)
                        .map((res: Response) => <IProduct[]>res.json())
                        .do(data => console.log('All: ' + JSON.stringify(data)))
                        .catch(this.handleError);
    }

    public getAllProductsPromise(): Promise<IProduct[]>{

        return this.http.get(this.baseUrl)
                        .map((res: Response) => res.json())
                        .toPromise()
                        .catch(this.handleErrorForPromise);
    }

    private handleError(error: Response) {
        console.error('An error occurred',error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private handleErrorForPromise(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private getHeaders() : Headers {
        return new Headers({ 'Content-Type': 'application/json' });
    }

}

export interface IProductDataService {
        save: (product: IProduct) => Observable<any>;
        getAllProducts: () => Observable<IProduct[]>;
        getAllProductsPromise: () => Promise<any>;
}