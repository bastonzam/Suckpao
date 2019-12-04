import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { CustomerLoginComponent } from './customer-login/customer-login.component'
import { CustomerOrderComponent } from './customer-order/customer-order.component'
import { CustomerSignupComponent } from './customer-signup/customer-signup.component'
import { AppComponent } from './app.component'
const routes: Routes = [
{ path: 'home', component: AppComponent},
  { path: 'cuslogin', component: CustomerLoginComponent},
   {path: 'cusorder', component: CustomerOrderComponent},
{path: 'cussignup', component: CustomerSignupComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
