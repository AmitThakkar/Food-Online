/**
 * Created by AmitThakkar on 11/26/2016.
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './home.html'
})
export class HomeComponent {
    public southIndianItems = [
        {name: 'Idly', price: 40},
        {name: 'Vada', price: 50},
        {name: 'Plain Dosa', price: 50},
        {name: 'Masala Dosa', price: 80},
        {name: 'Paneer Dosa', price: 90},
        {name: 'Onion Uttapam', price: 80}
    ];
    public northIndianItems = [
        {name: 'Samosa', price: 20},
        {name: 'Poori Aloo Dum', price: 40},
        {name: 'Aloo Paratha', price: 50},
        {name: 'Masala Paratha', price: 80},
        {name: 'Chana Kulcha', price: 80},
        {name: 'Chola Batura', price: 100}
    ];
    public orderItems = {};
    public totalItems = 0;
    public totalPrice = 0;
    public addItem = function (item) {
        if (!this.orderItems[item.name]) {
            this.orderItems[item.name] = {quantity: 1, price: item.price, name: item.name};
        } else {
            this.orderItems[item.name].quantity++;
        }
        this.totalPrice += item.price;
        this.totalItems++;
    };
    public removeItem = function (item) {
        if (this.orderItems[item.name]) {
            this.orderItems[item.name].quantity--;
            if (this.orderItems[item.name].quantity == 0) {
                delete this.orderItems[item.name];
            }
            this.totalItems--;
            this.totalPrice -= item.price;
        }
    };
}