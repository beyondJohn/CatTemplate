export class Item {
    category: String;
    type: String;
    name: String;
    mfg: String;
    price: Number;
    active: Boolean;
    id: Number;
    constructor(type: String, name: String, price: Number, mfg: String, category: String, active: Boolean, id: Number) {
        this.category = category;
        this.type = type;
        this.name = name;
        this.price = price;
        this.mfg = mfg;
        this.active = active;
        this.id = id;
    }
}