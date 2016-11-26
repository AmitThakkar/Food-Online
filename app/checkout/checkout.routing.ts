/**
 * Created by AmitThakkar on 9/28/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckoutComponent}    from './checkout.component';

const CHECKOUT_ROUTES:Routes = <any>[
    {
        path: '',
        component: CheckoutComponent
    }
];

export const CHECKOUT_ROUTING:ModuleWithProviders = RouterModule.forChild(CHECKOUT_ROUTES);