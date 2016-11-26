/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {HomeComponent}    from './home.component';
import {HomeRoutingModule} from "./home.routing.module";
import {ValuesPipe} from "../shared/values.pipe";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ValuesPipe
    ]
})
export class HomeModule {
}