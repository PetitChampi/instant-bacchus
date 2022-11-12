declare class Drink {
    static from(): Drink;
    id: string;
    name: string;
    price: number;
    calories: number;
    constructor();
    setName(name: string): this;
    setPrice(price: number): this;
    setCalories(calories: number): this;
}
export default Drink;
