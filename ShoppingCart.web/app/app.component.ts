import { Component } from '@angular/core';
import { Product }  from './Models/product';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
})
export class AppComponent  {
    name = 'Angular';

    productAdded(event: Product) : void {

    }
}
