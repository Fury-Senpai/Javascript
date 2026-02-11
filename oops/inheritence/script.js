class Parle {
    constructor(item , quantity){
        this.item = item;
        this.quantity = quantity;
    }
}

let p1 = new Parle('Biscuit' , 10)
class Biscuits extends Parle {
    constructor( biscuitName , mfd , item , quantity){
        super(item , quantity)
        this.biscuitName = biscuitName;
        this.mfd = mfd;
        
    }
}

let b1 = new Biscuits(
    'Parle-G',
    '2025/10/03',
    'Biscuit',
    10
);

//// 🧩 PROBLEM STATEMENT

//? Create a JavaScript class system for an Online Shopping App.

// // Requirements:
//! 1️⃣ Create a parent class called Product
//! properties:
//! name
//! price
//! constructor should initialize both

//// 2️⃣ Create a child class called Electronics that extends Product
//! additional properties:
//! brand
//! warrantyYears
//! constructor should:
//! accept name, price, brand, warrantyYears
//! use super() correctly
//! initialize its own properties

class Product {
    constructor(name , price){
        this.name = name;
        this.price = price;
    }

    getDiscountedPrice(discountPercent){
        let discount = (this.price * discountPercent) / 100;
        return this.price - discount
    }
}

class Electronics extends Product{
    constructor(name , price , brand , warrantyYears){
        super(name , price);
        this.brand = brand;
        this.warrantyYears = warrantyYears;
    }
}

let e1 = new Electronics("Laptop", 60000, "HP", 2);


// // Setter and Getter method in js

function car() {
    const fuel = 50;
    return {
        fuel
    };
}

const car1 = car();
console.log(car1.fuel);
car1.fuel = 100;
console.log(car1.fuel);


function bike(){
    const fuel = 40;
    return {
        get fuel(){
            return fuel
        }
    }
}

const bike1 = bike();
console.log('bike :' ,bike1.fuel);

bike1.fuel = 1000;
console.log('bike :' ,bike1.fuel);


