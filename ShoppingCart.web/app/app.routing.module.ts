import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent }  from './Admin/Main/admin.main.component';
import { ShopMainComponent } from './Shop/Main/shop.main.component'

const routes: Routes = [
    { path: 'admin', component: AdminMainComponent },
    { path: 'shop', component: ShopMainComponent },
    { path: '', redirectTo: 'admin' , pathMatch: 'full'},
    { path: '**', redirectTo: 'admin' ,pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }