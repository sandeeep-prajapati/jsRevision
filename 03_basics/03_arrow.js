const user = {
    username : "Mark",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username},welcom to website`);
        console.log(this)
    }

}
const chai = ()=>{
    let username = "mark@zuck"
    console.log(this)
}
chai()

// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// const addtwo = (num1,num2)=>num1+num2
const addtwo = (num1,num2)=>(num1+num2)
