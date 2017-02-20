import { Component } from '@angular/core';
import { Product }  from './Models/product';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
})
export class AppComponent  {
    name = 'Angular2';

    productAdded(event: Product) : void {

    }
}
