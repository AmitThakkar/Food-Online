/**
 * Created by AmitThakkar on 9/28/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {CheckoutComponent}    from './checkout.component';
import {CHECKOUT_ROUTING} from "./checkout.routing";

@NgModule({
    imports: [
        CommonModule,
        CHECKOUT_ROUTING
    ],
    declarations: [
        CheckoutComponent,
    ]
})
export class CheckoutModule {
}