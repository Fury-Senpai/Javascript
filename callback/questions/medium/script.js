//// Array Processor
// Create a function processArray(arr, callback)
// Loop through array
// Apply callback to each element

function processArray(arr , cb){
    arr.forEach(element => {
        cb(element)
    });
}

let arr = [2,12,12,122]
// processArray(arr , function(e){
//     console.log("Traversing Element" , e);
// })

//// Calculator
// Create calculate(a, b, operationCallback)
// operationCallback decides whether to add, subtract, multiply, etc.

function calculate(a,b,cb){
    console.log(cb(a,b));
}

function add(a,b){
    return a+b
}

function subtract(a , b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

// calculate(2,4,subtract)

//// Login System
// Create login(username, password, callback)
// If username = "admin" and password = "1234"
// Call callback with "Login Successful"
// Else call callback with "Invalid Credentials"

function login(username , password , callback){
    if(username === 'admin' && password === '1234') callback('Login Successful');
    else callback('Invalid Credentials')
}

// login('admin' , '1234' , function(msg){
//     console.log(msg)
// })

function login2(username , password , cb){
    cb(username , password)
}

// login2('admin' , '1234' , function(username , password){
//     if(username === 'admin' && password === '1234'){
//         console.log('Login Successful');
//     }
//     else{
//         console.log('Invalid Credentials');
//     }
// })

//// Filter Numbers
// Create filterNumbers(arr, callback)
// Callback decides which numbers to keep
// Return filtered array via callback

function filterNumbers(arr , callback){
    let result = [];

    arr.forEach(num => {
        if(callback(num)) {
            result.push(num)
        }
    });

    return result;
}

let nums = [-1, 2, 301, 4, 5, 123, 213, 400, -1201, 99, 0];

let filtered = filterNumbers(nums,function(num){
    return num > 100;
});

// console.log(filtered);

//// Fake API Call
// Create fetchData(callback)
// Use setTimeout (2 sec)
// After delay, send "Data received" to callback

function fetchData(cb){
    setTimeout(() => {
        cb('Data received')
    }, 2000);
}

// fetchData(function(data){
//     console.log(data);
// })

//// Order System
// Create placeOrder(order, callback)
// Wait 3 seconds
// Then call callback with "Order <order> completed"

function placeOrder(order , cb){
    setTimeout(() => {
        cb(`Order ${order} completed`)
    }, 3000);
}

// placeOrder('Pizza' , function(data){
//     console.log(data);
// })

//// Error-First Callback
// Create divide(a, b, callback)
// If b === 0, send error message
// Else send result
// Hint: callback(error, result)

function divide(a,b,cb){
    
    if(b === 0){
        cb('Error occured',null)
    }
    else cb(null , a/b)
}

// divide(4,2,function(error,result){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// })

//// Sequential Callbacks
// Create two functions:
// stepOne(callback)
// stepTwo(callback)
// Call stepTwo only after stepOne completes.

function stepOne(cb) {
    cb('complete step one')
}

function stepTwo(cb) {
    cb('complete step two')
}

// stepOne(function(msg){
//     console.log(msg);
//     stepTwo(function(msg){
//         console.log(msg);
//     });
// })

//// Callback Hell
// Simulate this flow using callbacks:
// Login user
// Fetch user data
// Fetch user posts
// Each step should depend on the previous one.

function loginUser(cb){
    cb('User logged in')
}

function fetchUser(cb){
    cb('user fetched');
}

function fetchPosts(cb){
    let posts = [{id:0 , image: 'img.jpg'} , {id:1 , image: 'img1.jpg'}]
    cb('Fetched User Posts' , posts);
}

// loginUser(function(data){
//     console.log(data);
//     fetchUser(function(data){
//         console.log(data);
//         fetchPosts(function(data , posts){
//             console.log(data , posts);
//         })
//     })
// })

//// Async Validation
// Create registerUser(data, callback)
// Steps:
// Validate data
// Check username availability
// Save user
// All steps must use callbacks.

function registerUser(data ,cb){
    setTimeout(() => {
        cb(data,'user registered')
    }, 1000);
}

function validateData(data , cb){
    setTimeout(() => {
        cb(data,'validating data')
    }, 1000);
}
function checkUsername(data , cb){
    setTimeout(() => {
        cb(data,'User checking...');
    }, 1000);
    
}
function saveUser(data , cb){
    setTimeout(() => {
        cb(data,'data saved')
    }, 1000);
}
const data = [{username : 'fury12'},{username : 'ramu12'},{username : 'psyche'}];

registerUser(data , function(data , msg){
    
    validateData(data , function(data , msg){
        console.log(msg);
        checkUsername(data , function(data , msg){
            console.log(msg);
            saveUser(data , function(data , msg){
                console.log(msg);
            })
            
        })
        
    })
    console.log(msg)
})