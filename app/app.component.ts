/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
     <nav>
        <a routerLink="/home">Home</a>
        <a routerLink="/checkout">Checkout</a>
        <a routerLink="/thank-you">Thank You</a>
      </nav>
      <router-outlet></router-outlet>
    `
})

export class AppComponent {
}