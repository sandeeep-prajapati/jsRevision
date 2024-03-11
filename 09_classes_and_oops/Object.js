function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype);

function createUser(username,scope){
    this.username = username
    this.scope = scope
}

createUser.prototype.increment = function(){
    this.scope++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.scope}`);
}
const chai = new createUser("Chai",25)
const tea = createUser("tea",250)
chai.increment()
chai.printMe()