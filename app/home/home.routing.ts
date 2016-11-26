/**
 * Created by AmitThakkar on 9/28/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent}    from './home.component';

const HOME_ROUTES:Routes = <any>[
    {
        path: '',
        component: HomeComponent
    }
];

export const HOME_ROUTING:ModuleWithProviders = RouterModule.forChild(HOME_ROUTES);