/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent}    from './home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {
}