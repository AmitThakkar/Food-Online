/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {ThankYouComponent}    from './thank.you.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ThankYouComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ThankYouRoutingModule {
}