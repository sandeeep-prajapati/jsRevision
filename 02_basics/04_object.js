const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "mark_of_ind"
tinderUser.isLoggegIn = false
const regularUser = {
    email : "sandeep@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Sandeep",
            lastname : "Prajapati"
        }
    }
}
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

const obj4 = {...obj1,...obj2}

const users = [
    {
        id : 1,
        email : "mark@zuck.com"
    },
    {
        id:2,
        email : "mark2@zuck.com"
    }
]
console.log(users[1].email)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))



