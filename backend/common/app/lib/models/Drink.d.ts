declare class Drink {
    static from(): Drink;
    drinkId: string;
    name: string;
    price: number;
    calories: number;
    constructor();
    setName(name: string): this;
    setPrice(price: number): this;
    setCalories(calories: number): this;
}
export default Drink;
