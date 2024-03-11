function sayMyName(){
    console.log("S")
    console.log("a")
    console.log("n")
    console.log("d")
    console.log("e")
    console.log("e")
    console.log("p")
}
sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumber(num1,num2){
    return num1+num2
}
const result = addTwoNumber(10,12)
function loginUserMessage(username = "maek"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("mark"))


