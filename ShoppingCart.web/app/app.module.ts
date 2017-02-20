import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routing.module';
import { NavComponent }  from './Nav/nav.component';
import { AdminModule }  from './Admin/admin.module';


@NgModule({

  imports: [BrowserModule, AppRoutingModule, AdminModule, HttpModule ],
  declarations: [AppComponent,
                 NavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
