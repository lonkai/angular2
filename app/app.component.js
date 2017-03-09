"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Item = (function () {
    function Item(purchase, price) {
        this.price = 0;
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Item;
}());
;
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            { purchase: "Bread", done: false, price: 15.9 },
            { purchase: "Butter", done: false, price: 60 },
            { purchase: "Potatoes", done: true, price: 22.6 },
            { purchase: "Cheese", done: false, price: 310 },
        ];
    }
    AppComponent.prototype.addItem = function (text, price) {
        if (text === null || text === undefined || text.trim() === "") {
            return;
        }
        if (price === null || price === undefined) {
            return;
        }
        this.items.push(new Item(text, price));
    };
    AppComponent.prototype.deleteItem = function (item) {
        if (item) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['app/app.component.css'],
        templateUrl: 'app/app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map