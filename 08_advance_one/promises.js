const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task is completed")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})
const promiseOne2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2 is completed")
        resolve()
    },1000)
})
promiseOne2.then(function(){
    console.log("promise consumed")
})
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task is completed")
        resolve({username:'Chai', email : "6392424180sandeep@gmail.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user)
})
const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task is completed")
        let error = true;
        if(!error){
            resolve({username:'Chai', email : "6392424180sandeep@gmail.com"})
        }
        else{
            reject('Error : Something went wrong')
        }
    },1000)
})
promisefour.then(function(user){
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{console.log("the promise is either resolve or reject")})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username: "Javascript",password: "123"})
        }
        else{
            reject('Error : js went wrong')
        }
    }, 1000)
});
async function consumePromisefive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error);
    }
} 
consumePromisefive()