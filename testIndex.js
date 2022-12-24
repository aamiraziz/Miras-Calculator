// var Fraction = require('Fraction.js-master/fraction.js')


let oneByTwo = Fraction(1).div(2);      oneByTwo = oneByTwo.toFraction(true); 
let oneByThree = Fraction(1).div(3);    oneByThree = oneByThree.toFraction(true);
let twoByThree = Fraction(2).div(3);    twoByThree = twoByThree.toFraction(true);
let oneByFour = Fraction(1).div(4);     oneByFour = oneByFour.toFraction(true);
let oneBySix = Fraction(1).div(6);      oneBySix = oneBySix.toFraction(true);
let oneByEight = Fraction(1).div(8);    oneByEight = oneByEight.toFraction(true);

// let myLCM = oneByTwo lcm(oneByThree)

// console.log(`LCM of 1/2, 1/3 and 1/6 Results: ${myLCM.toFraction(true)}`)

console.log(`oneByTwo = ${oneByTwo}, oneByThree = ${oneByThree}, twoByThree = ${twoByThree}, oneByFour =  ${oneByFour},
             oneBySix =  ${oneBySix}, oneByEight = ${oneByEight}
             The numirator of oneByTwo is ${oneByTwo.n}
             The denominator of oneByTwo is ${oneByTwo.d}`)


let x = new Fraction(1.88);
let res = x.toFraction(true); // String "1 22/25"

let y = new Fraction(0, 1)

y =  oneBySix + oneBySix + twoByThree
// y = oneBySix.add(oneBySix).add(twoByThree)

console.log(`typeof y = ${typeof y}, y = ${y} , sum ${oneBySix + oneBySix} typeof oneByTwo = ${typeof oneByTwo}`)

console.log(`res = ${res}, typeof res = ${typeof res}`)
console.log(`x = ${x}, typeof  = ${typeof x}`)