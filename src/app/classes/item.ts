export class Item {
    category: string;
    type: string;
    name: string;
    mfg: string;
    price: number;
    active: boolean;
    id: number;
    constructor(type: string, name: string, price: number, mfg: string, category: string, active: boolean, id: number) {
        this.category = category;
        this.type = type;
        this.name = name;
        this.price = price;
        this.mfg = mfg;
        this.active = active;
        this.id = id;
    }
}