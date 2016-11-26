/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
            {path: 'checkout', loadChildren: 'app/checkout/checkout.module#CheckoutModule'},
            {path: 'thank-you', loadChildren: 'app/thank-you/thank.you.module#ThankYouModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}