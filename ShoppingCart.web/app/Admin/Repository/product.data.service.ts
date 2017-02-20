
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Product }  from '../../Models/product';

@Injectable()
export class ProductDataService {

    private baseUrl: string = '/api/product/';

    constructor(private http: Http) {
    }

    public save(product: Product): Observable<any> {

        let body = JSON.stringify(product);
        let headers = this.getHeaders();
        let options = new RequestOptions({ headers: headers }); 

        return this.http.post(this.baseUrl, body, options)
                        //.map((res: Response) => res.json())
                        .catch((error: any) => {
                            return Observable.throw(error.json() || 'Server error');
            });
    }

    public getAllProducts(): Observable<Product[]> {

        return this.http.get(this.baseUrl)
                        .map((res: Response) => res.json())
                        .catch((error: any) => { return Observable.throw(error.json() || 'Server error'); });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private getHeaders() : Headers {
        return new Headers({ 'Content-Type': 'application/json' });
    }

}