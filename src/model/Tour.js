export default class Tour {
 constructor(id, name,price, information) {
     this._name = name;
     this._price = price;
     this._information = information;
     this._id = id;
 }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get information() {
        return this._information;
    }

    set information(value) {
        this._information = value;
    }
}