const myarr = [0,1,2,3,4,5]
const myhero = ["mark","musk"]
const myarr2 = new Array(1,2,3,4)
console.log(myarr[1])
myarr.push(6)
myarr.push(7)
console.log(myarr)
myarr.pop()
console.log(myarr)
console.log(myarr.unshift(9))
console.log(myarr.shift())
console.log(myarr.includes(9))
console.log(myarr.indexOf(3))
const newArr = myarr.join()
console.log(newArr)

console.log("A ", myarr);
const myn1 = myarr.slice(1,3)
console.log("B ",myn1)

const myn2 = myarr.slice(1,3)
console.log("C ",myarr)
console.log(myn2)
