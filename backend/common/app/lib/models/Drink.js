import { v4 as uuidv4 } from "uuid";
class Drink {
    constructor() {
        this.drinkId = uuidv4();
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
export default Drink;
