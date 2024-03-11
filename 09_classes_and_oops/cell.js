function setUsername(username){
    this.username = username
    console.log("cailed")

}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@sutta.com","123")
console.log(chai)