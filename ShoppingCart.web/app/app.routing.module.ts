import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent }  from './Admin/Main/admin.main.component';


const routes: Routes = [
    { path: 'admin', component: AdminMainComponent },
    { path: '**', redirectTo: 'admin' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }