import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AdminMainComponent }  from './Main/admin.main.component';
import { InputComponent }  from './Input/input.component';
import { ProductDataService } from './Repository/product.data.service';

@NgModule({
    imports: [FormsModule],
    declarations: [AdminMainComponent,
                  InputComponent],
    providers: [ProductDataService],
    exports: [AdminMainComponent, InputComponent]
})
export class AdminModule { }