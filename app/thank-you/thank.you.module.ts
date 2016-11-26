/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {ThankYouComponent}    from './thank.you.component';
import {ThankYouRoutingModule} from "./thank.you.routing.module";

@NgModule({
    imports: [
        CommonModule,
        ThankYouRoutingModule
    ],
    declarations: [
        ThankYouComponent
    ]
})
export class ThankYouModule {
}