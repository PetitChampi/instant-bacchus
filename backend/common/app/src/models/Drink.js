const { v4: uuidv4 } = require('uuid');

class Drink {
  static from() {
    return new Drink();
  }

  constructor() {
    this.drinkId = uuidv4();
    this.name = ``;
    this.price = 0;
    this.calories = 0;
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

module.exports = Drink;