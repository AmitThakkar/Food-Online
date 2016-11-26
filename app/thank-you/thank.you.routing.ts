/**
 * Created by NamitaMalik on 9/28/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ThankYouComponent}    from './thank.you.component';

const THANK_YOU_ROUTES:Routes = <any>[
    {
        path: '',
        component: ThankYouComponent
    }
];

export const THANK_YOU_ROUTING:ModuleWithProviders = RouterModule.forChild(THANK_YOU_ROUTES);