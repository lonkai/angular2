import { Component } from '@angular/core';

class Item {
    public purchase: string;
    public done: boolean;
    public price: number = 0;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
};

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
})

export class AppComponent {

    public items: Item[] =
    [
        { purchase: "Bread", done: false, price: 15.9 },
        { purchase: "Butter", done: false, price: 60 },
        { purchase: "Potatoes", done: true, price: 22.6 },
        { purchase: "Cheese", done: false, price: 310 },
    ];
    public addItem(text: string, price: number): void {

        if (text === null || text === undefined || text.trim() === "") {
            return;
        }
        if (price === null || price === undefined) {
            return;
        }
        this.items.push(new Item(text, price));
    }

    public deleteItem(item: Item): void {
        if (item) {
           this.items.splice(this.items.indexOf(item), 1);
        }
    }
}
