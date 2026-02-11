# JavaScript Classes – Complete Notes

This document explains **JavaScript classes** using:
- Class declaration
- Class expression
- Constructors
- Methods
- `this` keyword
- Hoisting behavior

---

## 1. What is a Class in JavaScript?

A **class** is a blueprint for creating objects.  
It allows us to define:
- properties (data)
- methods (behavior)

Classes help in writing **structured, reusable, and readable code**.

---

## 2. Class Declaration (Basic Way)

```js
class Animal {
    constructor(animalName, weight) {
        this.animalName = animalName;
        this.weight = weight;
    }

    welcome() {
        console.log(`Hi I am ${this.animalName}`);
    }
}

let lion = new Animal('lion', 300);

```
**Explanation**

class Animal → creates a class named Animal

*   constructor() → special method that runs when new is used
*   this → refers to the newly created object
*   welcome() → method shared by all instances
*   new Animal() → creates a new object (instance)

```js
// output
lion.welcome();
// Hi I am lion
```

## 3. Class Expression (Class Stored in a Variable)

```js
let Fruits = class {
    constructor(fruitName, price, season) {
        this.fruitName = fruitName;
        this.price = price;
        this.season = season;
    }

    welcome() {
        console.log("Hello I am", this.fruitName);
    }
};

let mango = new Fruits('Mango', '50kg', 'summer');
```

**Explanation**

- Class is stored inside a variable (`Fruits`)
- Behaves exactly like a normal class
- Useful when classes need to be:
  - passed as arguments
  - created dynamically
  - conditionally defined


> Note :  **Classes are not hosited**