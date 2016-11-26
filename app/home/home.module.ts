/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {HomeComponent}    from './home.component';
import {HomeRoutingModule} from "./home.routing.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {
}