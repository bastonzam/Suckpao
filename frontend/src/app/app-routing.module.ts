import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { CustomerLoginComponent } from './customer-login/customer-login.component'
import { CustomerOrderComponent } from './customer-order/customer-order.component'
import { CustomerSignupComponent } from './customer-signup/customer-signup.component'
import { AppComponent } from './app.component'


import { HomeStoreComponent } from './home-store/home-store.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { LoginStoreComponent } from './login-store/login-store.component'
import { SinginStoreComponent } from './singin-store/singin-store.component'
import { StatusCustomerComponent } from './status-customer/status-customer.component'
import { StatusMoneyComponent } from './status-money/status-money.component'

import { AddCostomerComponent } from './add-costomer/add-costomer.component'
import { BikeManComponent } from './bike-man/bike-man.component'
import { DeliverBikemanComponent } from './deliver-bikeman/deliver-bikeman.component'
import { LoginBikemanComponent } from './login-bikeman/login-bikeman.component'
import { RegisterBikemanComponent } from './register-bikeman/register-bikeman.component'


import { AdminHomeComponent } from './admin-home/admin-home.component'
import { AmountComponent } from './amount/amount.component'
import { CheckOrderComponent } from './check-order/check-order.component'
import { LoginStoreadminComponent } from './login-storeadmin/login-storeadmin.component'
import { SinginStoreadminComponent } from './singin-storeadmin/singin-storeadmin.component'
import { TotalListComponent } from './total-list/total-list.component'


const routes: Routes = [
{ path: 'home', component: AppComponent},
  { path: 'cuslogin', component: CustomerLoginComponent},
   {path: 'cusorder', component: CustomerOrderComponent},
{path: 'cussignup', component: CustomerSignupComponent},
{path: 'homestore', component: HomeStoreComponent},
{ path: 'login-store', component: LoginStoreComponent},
{ path: 'checkout', component: CheckoutComponent},
{ path: 'singin-store', component: SinginStoreComponent},
{ path: 'status-money', component: StatusMoneyComponent},
{ path: 'status-customer', component: StatusCustomerComponent},
{ path: 'register-bikeman', component: RegisterBikemanComponent},
{ path: 'login-bikeman', component: LoginBikemanComponent},
{ path: 'bikeman', component: BikeManComponent},
{ path: 'delivery-bikeman', component: DeliverBikemanComponent},
{ path: 'add-costomer', component: AddCostomerComponent},
{ path: 'addminhome', component: AdminHomeComponent},
{ path: 'login-storead', component: LoginStoreadminComponent},
{ path: 'singin-storead', component: SinginStoreadminComponent},
{ path: 'total-list', component: TotalListComponent},
{ path: 'amount', component: AmountComponent},
{ path: 'check-order', component: CheckOrderComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
