import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { InputComponent }  from './Input/input.component';
//import { Product }  from './Models/product';

@NgModule({
  imports: [BrowserModule, FormsModule ],
  declarations: [AppComponent, InputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
