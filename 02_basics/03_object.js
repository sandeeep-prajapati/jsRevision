const mysym = Symbol("key1");
const JsUser = {
    name : "Sandeep Prajapati",
    "full name" : "mark zuckerburg",
    [mysym] : "mykey1",
    age : 18,
    location : "Maharajganj",
    email : "mark@zuck.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
console.log(JsUser.email)
JsUser.email = "6392424180sandeep@gmail.com"
JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())