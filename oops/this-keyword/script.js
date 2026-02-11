let obj = {
    fruit : "mango",
    fn : function(){
        console.log(this);
    }
}

obj.fn();

let obj2 = {
    fruit : "apple",
    name : () => {
        console.log(this);
    }
}

obj2.name()

let obj3 = {
    fruit : "apple",
    name : () => {
         a = () => {
            console.log(this);
        }
        a()
    }
}

console.log(obj3.name());

let obj4 = {
    name : function(){
        a = () =>  {
            console.log(this);
        }
        a()
    }
    
}

obj4.name()

let obj5 = {
    name : function(){
        function a() {
            console.log(this);
        }
        a()
    }
    
}

obj5.name()


let obj6 = { //! doubt
    
    name (){ 
            setTimeout(function() {
                console.log('obj6',this);
        }, 0)
    }
    
}

obj6.name()