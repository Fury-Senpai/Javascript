const prm = new Promise(function(resolve , reject){
    
    setTimeout(() => {
        if(0 < 10) resolve()
        reject()
    }, 1000);
    
})

prm
 .then(function(){
    console.log('resolve')
 })
 .catch(function(){
    console.log('reject')
 })

 const metaData = [
  { id: 1, name: "Nitish" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Anjali" },
  { id: 4, name: "Priya" },
  { id: 5, name: "Aman" }
];


// meta ke pass jao data lao
// data agar available ho to print karo 'welcome <user>
// varna print karo user is not available

const user = 'Pawni'

const newPrm = new Promise((resolve , reject)=>{
    setTimeout(() => {
        metaData.forEach(users => {
            if(users.name === user) resolve()
        });
        
        reject();
        
    }, 2000);
})

newPrm
 .then(()=>{
    console.log(`Welcome ${user}`);
 })
 .catch(()=>{
    console.log(`No User Found!!`);
 })


// fetch data from an API
// resolve it if successful
// else reject

const fetchData = new Promise(function(resolve , reject){
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(rawData => rawData.json())
            .then((data) => {
                resolve(data)
            })
            .catch((error)=>{
                reject(error)
            })
    }, 3000);
    

})

fetchData
 .then((data)=>{
    console.log('data fetched succesully',data);
 })
 .catch((error)=>{
    console.log('data cannot be fetched',error);
 })

