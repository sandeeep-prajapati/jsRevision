let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23)
 myCreatedDate = new Date(2023, 0, 23,5,2)

let newCreatedDate = new Date("01-14-2023")
let myTimeStamp = Date.now()

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
newDate.toLocaleDateString('default',{
    weekday: "long",
})