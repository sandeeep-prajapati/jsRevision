let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a)

}
console.log(a)
// console.log(b)
// console.log(c)
function one(){
    const username = "sandeep Parajapati"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    two()
}
one()


if(true){
    const username = "Sandeep Prajapri"
    if(username == "Sandeep Prajapri"){
        const website="youtube"
        console.log(username+website)
    }
    // console.log(website)
}


console.log(addone(10))
function addone(num){
    return num+1
}

// console.log(addTwo1(5))
// const addTwo1 = function(num){
//     return num+1
// }

