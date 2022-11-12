import { v4 as uuidv4 } from "uuid";

class Drink {
  static from() {
    return new Drink();
  }

  public id: string;
  public name: string;
  public price: number;
  public calories: number;

  constructor() {
    this.id = uuidv4();
    this.name = ``;
    this.price = 0;
    this.calories = 0;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setPrice(price: number) {
    this.price = price;
    return this;
  }

  setCalories(calories: number) {
    this.calories = calories;
    return this;
  }
}

export default Drink;