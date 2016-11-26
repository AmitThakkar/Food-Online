/**
 * Created by AmitThakkar on 9/28/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {ThankYouComponent}    from './thank.you.component';
import {THANK_YOU_ROUTING} from "./thank.you.routing";

@NgModule({
    imports: [
        CommonModule,
        THANK_YOU_ROUTING
    ],
    declarations: [
        ThankYouComponent
    ]
})
export class ThankYouModule {
}