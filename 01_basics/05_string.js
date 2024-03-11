const name = "mark"
const repoCount = 50

console.log(`hello my name is ${name} and repo count is ${repoCount}`)

const gameName = new String("hi i am sandeep")
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1))
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString)
const newStringOne = "     mark     "
console.log(newStringOne)
console.log(newStringOne.trim())

