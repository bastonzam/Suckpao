import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';


import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';

import { HomeStoreComponent } from './home-store/home-store.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginStoreComponent } from './login-store/login-store.component';
import { SinginStoreComponent } from './singin-store/singin-store.component';
import { StatusCustomerComponent } from './status-customer/status-customer.component';
import { StatusMoneyComponent } from './status-money/status-money.component';

import { AddCostomerComponent } from './add-costomer/add-costomer.component';
import { BikeManComponent } from './bike-man/bike-man.component';
import { DeliverBikemanComponent } from './deliver-bikeman/deliver-bikeman.component';
import { LoginBikemanComponent } from './login-bikeman/login-bikeman.component';
import { RegisterBikemanComponent } from './register-bikeman/register-bikeman.component';


import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AmountComponent } from './amount/amount.component';
import { CheckOrderComponent } from './check-order/check-order.component';
import { LoginStoreadminComponent } from './login-storeadmin/login-storeadmin.component';
import { SinginStoreadminComponent } from './singin-storeadmin/singin-storeadmin.component';
import { TotalListComponent } from './total-list/total-list.component';








import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';












const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,

     CustomerLoginComponent,

     CustomerOrderComponent,

     CustomerSignupComponent,

     HomeStoreComponent,

     CheckoutComponent,

     LoginStoreComponent,

     SinginStoreComponent,

     StatusCustomerComponent,

     StatusMoneyComponent,

     AddCostomerComponent,

     BikeManComponent,

     DeliverBikemanComponent,

     LoginBikemanComponent,

     RegisterBikemanComponent,

     AdminHomeComponent,

     AmountComponent,

     CheckOrderComponent,

     LoginStoreadminComponent,

     SinginStoreadminComponent,

     TotalListComponent



  ],
  imports: [
    BrowserModule,
  MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,




    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    A11yModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,

        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        PortalModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
