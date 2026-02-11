// // Basic way to write class
class Animal {
    constructor(animalName , weight) {
        this.animalName = animalName;
        this.weight = weight;
    }
    welcome(animalName){
        console.log(`Hi I am ${this.animalName}`);
    }
}

let lion = new Animal('lion' , 300)

// // But we can store classes in expression or a variable 

// ! HOISTING IS NOT POSSIBLE IN CLASSES
let Fruits = class {
    constructor(fruitName , price , season){
        this.fruitName = fruitName;
        this.price = price;
        this.season = season;
    }
    welcome(){
        console.log("Hello I am ",this.fruitName);
    }
}

let mango = new Fruits('Mango', '50kg' , 'summer')

