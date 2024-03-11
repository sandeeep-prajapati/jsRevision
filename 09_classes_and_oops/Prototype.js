let myHero = ["iron-man","spider-man"]
let heroPower = {
    ironman : "Science",
    spiderMan : "sling",
    getSpiderpower : function(){
        console.log(`Spider man Power is ${this.spiderMan}`);
    }
}
Object.prototype.mark = function(){
    console.log("mark is present in all object")
}
Array.prototype.heyMark = function(){
    console.log("mark is saying hello : )")
} 
heroPower.mark()

myHero.heyMark()
// heroPower.heyMark()

const User = {
    name : "chai",
    email : "6392424180sandeep@gmail.com"
}
const Teacher = {
    makeVideo : true
}
const TeacherSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime : true,
    __proto__: TeacherSupport
}
Teacher.__proto__ = user

Object.setPrototypeOf(TeacherSupport, Teacher)
let anotherUsername= "ChaiAurCode          "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this,trim().length}`)
}
anotherUsername.trueLength()
'hitesh'.trueLength()
'icetea'.trueLength()
