/**
 * Created by AmitThakkar on 9/28/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {HomeComponent}    from './home.component';
import {HOME_ROUTING} from "./home.routing";

@NgModule({
    imports: [
        CommonModule,
        HOME_ROUTING
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {
}