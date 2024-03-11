const marval_hero = ["thor","iron man","hulk"]
const dc_hero = ["superman","flash","batman"]
// marval_hero.push(dc_hero)
console.log(marval_hero)
// console.log(marval_hero[3][1])
const another_array = [...marval_hero,...dc_hero]
console.log(another_array)

const another_myarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_myarray = another_myarray.flat(Infinity)
console.log(real_another_myarray)
console.log(Array.isArray("i am mark"))
console.log(Array.from("mark zuckerburg"))
console.log(Array.from({name : "Sandeep"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));