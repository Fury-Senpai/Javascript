// // Question : 1 
// Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values. 

class Student {
    constructor(name , rollNum){
        this.name = name;
        this.rollNum = rollNum;
    }
    print(){
        console.log(`Hello ${this.name} , your roll no is : ${this.rollNum}`);
    }
}

let s1 = new Student('Nitish' , '122BASs')
console.log(s1);

// // Question 2 :
// Create an object with two methods: One method using a normal function One method using an arrow function

const obj = {
    greet(){
        console.log(this);
    },
    welcome : () => {
        console.log(this);
    }
}

obj.greet();
obj.welcome();