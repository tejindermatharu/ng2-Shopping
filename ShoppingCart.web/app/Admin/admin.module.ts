import { NgModule } from '@angular/core';
import { AdminMainComponent }  from './Main/admin.main.component';
import { InputComponent }  from './Input/input.component';
import { FormsModule} from '@angular/forms';

@NgModule({
    imports: [FormsModule],
    declarations: [AdminMainComponent,
                  InputComponent],
    providers: [],
    exports: [AdminMainComponent, InputComponent]
})
export class AdminModule { }