// var Fraction = require('Fraction.js-master/fraction.js')


let oneByTwo = Fraction(1).div(2)
let oneByThree = Fraction(1).div(3)
let twoByThree = Fraction(2).div(3)
let oneByFour = Fraction(1).div(4)
let oneBySix = Fraction(1).div(6)
let oneByEight = Fraction(1).div(8)

console.log(`oneByTwo = ${oneByTwo}, oneByThree = ${oneByThree}, twoByThree = ${twoByThree}, oneByFour =  ${oneByFour},
             oneBySix =  ${oneBySix}, oneByEight = ${oneByEight}`)


let x = new Fraction(1.88);
let res = x.toFraction(true); // String "1 22/25"

let y = new Fraction(0, 1)

y =  oneBySix + oneBySix + twoByThree
// y = oneBySix.add(oneBySix).add(twoByThree)

console.log(`typeof y = ${typeof y}, y = ${y} , sum ${oneBySix + oneBySix + twoByThree} typeof oneByTwo = ${typeof oneByTwo}`)

console.log(`res = ${res}`)
console.log(`x = ${x}`)