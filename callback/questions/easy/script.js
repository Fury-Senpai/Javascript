// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

function afterDelay(time , cb){
    setTimeout(() => {
        cb()
    }, time);
}

afterDelay(3000 , function(){
    console.log("callback executed");
})




// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

function getUser(username , cb){
    setTimeout(() => {
        cb({id : 1 , username})
    }, 1000);
}

// Create a function greetUser(name, callback)

// It should print "Hello <name>"

// Then call the callback function.

function greetUser(name , cb){
    cb(name)
}

greetUser('Nitish' , function(name){
    console.log('Hello',name);
})

//// Sum with Callback
// Create a function add(a, b, callback)
// Calculate the sum
// Pass the result to the callback

function add(a,b,cb){
    const res = a+b;
    cb(res)
}

add(2,23,function(res){
    console.log(res);
})

//// Delayed Message
// Create a function showMessage(msg, callback)
// Print the message
// Then execute the callback

function showMessage(msg , cb){
    console.log(msg);
    cb()
}

showMessage('Hello world' , function(){
    console.log('callback executed');
})

//// Callback Check
// Write a function isEven(num, callback)
// Check if number is even
// Send true or false to callback

function isEven(num,cb){
    if(num % 2 === 0) {
        cb(true);
    }
    else{
        cb(false);
    }

}

isEven(31 , function(res){
    console.log(res);
})