export default class OrderItem {
    private _id: string;
    private _name: string;
    private _price: number;
    private _quantity: number;
    private _productId: string;

    constructor(id: string, name: string, price: number, productId: string, quantity: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
    }

    get id(): string {
        return this._id;
    }
    
    get name(): string {
        return this._name;
    }
    
    get productId(): string {
        return this._productId;
    }
    
    get price(): number {
        return this._price;
    }

    get quantity(): number {
        return this._quantity;
    }

    orderItemTotal(): number {
        return this._price * this._quantity;
    }

    changeQuantity(quantity: number): void {
        this._quantity = quantity;
    }
}