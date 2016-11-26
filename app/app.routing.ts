/**
 * Created by AmitThakkar on 9/27/2016.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const APP_ROUTES:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    {path: 'checkout', loadChildren: 'app/checkout/checkout.module#CheckoutModule'},
    {path: 'thank-you', loadChildren: 'app/thank-you/thank.you.module#ThankYouModule'},
];
export const appRoutingProviders:any[] = [];
export const APP_ROUTING:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);