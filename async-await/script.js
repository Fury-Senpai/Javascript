const prm = new Promise(function(resolve , reject){
    let n = Math.floor(Math.random() * 10);
    if(n < 5) resolve();
    else reject();
})

prm 
 .then(()=>{
    console.log('promise resolved');
 })
 .catch(()=>{
    console.log('promise rejected'); 
 })

// 
// // to avoid using then and catch block we can use async & await , it is a modern way to write promises , so that the callback hell can be avoided
// 

async function generateNum(){
    return new Promise(function(resolve , reject){
        let n = Math.floor(Math.random() * 10);
        if(n < 5) resolve(true);
        else reject(false);
    })
}

async function abcd(){
    try {
        let n = await generateNum();
        console.log(n);
    } catch (error) {
        console.log(error);
    }
}

abcd()

// async await with fetch

async function fetchData(){
   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
     const data = await response.json();

     console.log(data);
   } catch (error) {
    console.log(error);
   }
}

fetchData()
