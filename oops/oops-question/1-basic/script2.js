//// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.

const laptop = {
    brand : 'Dell',
    price : 60000,
    start(){
        console.log("Laptop started");
    },
    totalPrice(){
        const tax = (this.price * 10) / 100;
        console.log(tax + this.price);
    }
}

laptop.totalPrice()

// I have to create 10 different objects which makes our code messy and unreadable , instead we can make a class which will act as a blue print for creating different objects.
// eg : 
class Laptop {
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
    start(){
        console.log("Laptop started");
    };
    totalPrice(){
        const tax = (this.price * 10) / 100;
        console.log(tax + this.price);
    }
}

const l1 = new Laptop('MSI' , 80000);
l1.totalPrice();
const l2 = new Laptop('HP' , 65000);
l2.totalPrice();
const l3 = new Laptop('Lenovo' , 90000);
l3.totalPrice();


//// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary
// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

class Employee {
    constructor(name , salary){
        this.name = name;
        this.salary = salary;
    }
    showDetails(){
        console.log(`${this.name} ${this.salary}`);
    }
}

const e1 = new Employee('Ravi' , 45000)
console.log(e1);
e1.showDetails()

// It is considered writing classes instead of writing similar objects again as it makes our code messy and difficult to manage . Classes provides us a blue print by which we can different different objects in a much cleaner way

//// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

class BankAccount{
    constructor(accountHolderName , balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amt){
        this.balance += amt;
    }
}

let b1 = new BankAccount('Nitish' , 100000);
let b2  = new BankAccount('Pawni' , 100000);
console.log(b1);
b1.deposit(50000);

console.log(b1);
console.log();
console.log(b2);

// b2 balance is not increased because b1 is not equal to b2 they are two different objects created using a same blue print i.e using a class

