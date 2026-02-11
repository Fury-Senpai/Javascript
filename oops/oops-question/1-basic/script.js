// // QUESTION - 1

const obj = {
    name : 'Nitish Harbola',
    email : 'nitish@test.com',
    login(){
        console.log('User logged in');
    }
}

// obj.login()

function manageUser (name , email) {
    const user = {
        name ,
        email ,
        login(){
            console.log(`${name} logged in`);
        }
    }
    return user
}

let user1 = manageUser('Pawni' , 'pawni1@test.com');
// user1.login();

let user2 = manageUser('Paul' , 'paul12@test.com')
// user2.login();

let user3 = manageUser('Riya' , 'riya090@test.com')
// user3.login();

let user4 = manageUser('lourem' , 'lorenm@test.com')
// user4.login();

let user5 = manageUser('Tia' , 'tiaosd@test.com')
// user5.login();


class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`${this.name} logged in`);
    }
}

let u1 = new User('Pawni' , 'pawni1@test.com')
console.log(u1);

// // QUESTION 3 
// Create a product object that stores name and price and has a method which returns the final price after discount.
function manageProduct(item , price){
    let product = {
        item ,
        price ,
        discount(disc) {
            const discount = (disc * price) / 100;
            return price - discount;
        }
    }

    return product
}

let p1 = manageProduct('Pen' , 20);


console.log(p1.discount(50));
