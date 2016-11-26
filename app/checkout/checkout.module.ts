/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {CheckoutComponent}    from './checkout.component';
import {CheckoutRoutingModule} from "./checkout.routing.module";

@NgModule({
    imports: [
        CommonModule,
        CheckoutRoutingModule
    ],
    declarations: [
        CheckoutComponent
    ]
})
export class CheckoutModule {
}