import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routing.module';
import { NavComponent }  from './Nav/nav.component';
import { AdminModule }  from './Admin/admin.module';
import { ShopMainComponent } from './Shop/Main/shop.main.component'

@NgModule({

  imports: [BrowserModule, AppRoutingModule, AdminModule, HttpModule ],
  declarations: [AppComponent,
                 NavComponent,
                 ShopMainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
