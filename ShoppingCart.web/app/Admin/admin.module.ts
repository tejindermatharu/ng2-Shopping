import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AdminMainComponent }  from './Main/admin.main.component';
import { InputComponent }  from './Input/input.component';
import { AdminEditComponent }  from './Edit/admin.edit.component';
import { ProductDataService } from './Repository/product.data.service';

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [AdminMainComponent,
                   InputComponent,
                   AdminEditComponent],
    providers: [ProductDataService]
})
export class AdminModule { }