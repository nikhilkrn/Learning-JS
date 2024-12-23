const promiseOne =new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task Completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");   
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
    
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Task 3");
        resolve({username: "Rahul",
            email : "rahulsekhejs@js.com"
        })
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Rahul",
                email : "rahulsekhejs@js.com"
            })
        }      
        else{
            reject('ERR :SOMETHING WENT WRONG')
        } 
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
    
}).catch((error) =>{
    console.log(error);
    
}).finally(()=>{
    console.log("Promise is resolved or rejected");
    
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Rahul",
                email : "rahulsekhejs@js.com"
            })
        }      
        else{
            reject('ERR :js WENT WRONG')
        } 
    }, 1000);
})



async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }

}
consumePromiseFive()

async function getalluser() {
   try {
       const response = await fetch("https://api.nationalize.io/?name=nathaniel")
    
       const data =await response.json()
       console.log(data);
    
   } catch (error) {
    console.log(error);
    
   }    
}

// getalluser()


fetch("https://api.nationalize.io/?name=rahul").then((response)=>{
    return response.json()
}).then((data) =>{
    console.log(data);
}).catch((error) =>{
    console.log(error);
    
})


