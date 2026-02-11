// 13.	Create a function that prints this.name. 
// 14.	Create an object that contains a name property.

// Use call to run the function using the object Use apply to run the function using the object Use bind to create a new function and then call it 

function printName(){
    console.log(this.name);
}

const obj = {
    name : "Nitish harbola"
}

printName.call(obj)

// 15.	Borrow a method from one object and run it for another object using call.

const student = {
    greet(){
        console.log("hello we are students from" , this.school);
    }
}

const school = {
    school : 'Campus'
}

console.log(student.greet.call(school));

// Create two objects:

// employee with:
    // property: name
    // method: printRole()
    
// // → logs:
// // <name> is an employee


// manager with:
    // property: name

// Task:
// Use call() to run employee.printRole() for the manager object.

const employee = {
    name : 'Nitish',
    printRole(){
        console.log(`${this.name} is an employee`);
    }
}

const manager = {
    name : 'Pawni'
}

employee.printRole.call(manager);

//// Statement:
// Create an object calculator with a method add(a, b) that prints the sum.
// Use apply() to call add with:
// a = 10
// b = 20
// ✍️ Paste your code when ready.

const calculator = {
    add(a,b){
        console.log(a+b);
    }
}

calculator.add.apply(calculator ,[10,20])

//// Statement:
// Create an object user with:
// property: name
// method: sayHi()
// → logs:
// Hi, <name>

// Create another object guest with:
// property: name
// Task:
// Use bind() to create a new function that permanently binds sayHi() to guest,
// then call that new function.

const user = {
    name : 'Pawni Dixit',
    sayHi(){
        console.log(`Hi, ${this.name}`);
    }
}

const guest = {
    name : 'Nitish' ,
}

let hi = user.sayHi.bind(guest)

hi();

//// Statement:
// Create an object car with:
// property: brand
// method: details(price, year)
// → logs:
// <brand> costs <price> and was launched in <year>
// Create another object bike with:
// property: brand
// Task:
// Use call() to run car.details() for bike with:
// price = 80000
// year = 2023

const car = {
    brand : 'Audi',
    details(price,year){
        console.log(`${this.brand} costs ${price} and was launched in ${year}`);
    }
}

const bike = {
    brand : 'Honda'
}

car.details.call(bike , 75000 , 2026)

//// Statement:
// Create an object mathOps with a method:
// multiply(a, b, c) → logs the product
// You are given an array:
// const nums = [2, 3, 4];
// Task:
// Use apply() to call multiply using the values from the nums array.

const mathOps = {
    multiply(a,b,c){
        console.log(a*b*c);
    }
}

const nums = [2,3,4];

mathOps.multiply.apply(mathOps,nums)

//// Statement:
// Create an object logger with a method:
// log(level, message)
// → logs:
// [<level>] <message>
// Task:
// Use bind() to create a new function that:
// permanently sets level to "ERROR"
// does not execute immediately
// later logs the message "Something went wrong"

const logger = {
    log(level , message){
        console.log(`[${level}] ${message}`);
    }
}



let l1 = logger.log.bind(logger , 'Error')

l1('Something went wrong')


//// Statement:
// You are given this code:
// const counter = {
//     count: 0,
//     increment(step) {
//         this.count += step;
//         console.log(this.count);
//     }
// };

// Create a new function incByTwo such that:
// it always increments count by 2
// it does not execute immediately
// it can be called multiple times

// After calling incByTwo() three times, the output should be:
// 2
// 4
// 6

// Constraint:
// You must use either call or bind
// Do not modify the counter object

const counter = {
    count :  0,
    increment(step) {
        this.count += step;
        console.log(this.count);
    }
}

function incByTwo(){
    this.count += 2;
    console.log(this.count);
}

incByTwo.call(counter);
incByTwo.call(counter);
incByTwo.call(counter);