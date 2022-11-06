"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Drink {
    constructor() {
        this.drinkId = (0, uuid_1.v4)();
        this.name = ``;
        this.price = 0;
        this.calories = 0;
    }
    static from() {
        return new Drink();
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    setCalories(calories) {
        this.calories = calories;
        return this;
    }
}
exports.default = Drink;
