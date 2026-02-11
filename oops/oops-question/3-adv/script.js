const User = class {
    constructor(name , course){
        this.name = name;
        this.course = course;
        this.swagat = function(){
            console.log('Swagat hai');
        }
    }
    login(){
        console.log(this.name , 'logged in');
    }
}

User.prototype.welcome = function(){
    console.log('Welcome User');
}

const u1 = new User('Ram' , 'Btech')
const u2 = new User('Seeta' , 'BCA')

console.log(u1.welcome());
console.log(u1.login());
console.log(u1.swagat());

if(u1.welcome() === u2.welcome()){
    console.log(true);
}
else{
    console.log(false);
}