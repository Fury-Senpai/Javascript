//// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
//  Observe what happens to this and explain why.
//  14.	Modify the code so that this works correctly again.

const profile = {
    username : 'Fury',
    printName(){
        console.log(this.username);
    }
}

profile.printName()

// If I use ECM5 function then it will print username because this value in ECM5 is the object means it depends who is calling it. meanwhile if I use arrow function then it will return undefined because this value depends where it's parrent is written.

//// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

class Vehicle {
    constructor(type , wheels){
        this.type = type;
        this.wheels = wheels;
        // this.welcome = function(){
        //     console.log("some data");
        // }
    }
}
Vehicle.prototype.welcome = function(){
    console.log("welcome");
}

let v1 = new Vehicle('Truck'  , 'MRF');
v1.welcome()
// prototype is preffered because it is a shared memory . all the objects can share this prototype memory which saves alot of memory

//// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

const showBrand = function(){
    console.log(this.brand);
}

const ob1 = {
    brand : 'Panasonic'
}

const ob2 = {
    brand : 'Godrej'
}

showBrand.call(ob1);
showBrand.call(ob2);

//instead of writing showBrand fn for every object we are binding it with the objects . 

////SECTION 7: apply Method Practice
	// 23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
	// 24.	Create an object with a name property.
	// 25.	Use apply to call introduce using the object and an array of arguments.
	// 26.	Explain in simple words how apply differs from call.

function someFn(city , role){
    console.log(city , role , this.name);
}

const nameObj = {
    name : 'Kia'
}


someFn.apply(nameObj,['Rudrapur' , 'NA'])

// apply accpets an array to pass arguments

//// SECTION 8: bind Method Practice
	// 27.	Create a function greet that prints “Hello” followed by this.name.
	// 28.	Bind this function to an object and store the returned function in a variable.
	// 29.	Call the bound function later and observe the output.
	// 30.	Explain why bind is useful when functions are executed later or inside callbacks.

function greet(){
    console.log("Hello ",this.name);
}

const nameObj2 = {
    name : "Pawni"
}

let wel = greet.bind(nameObj2);
wel()