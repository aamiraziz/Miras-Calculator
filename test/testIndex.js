// var Fraction = require('Fraction.js-master/fraction.js')

class Frac {
    constructor(n, d = 1) {
      if (d == 0) {
        throw new Error("denominator cannot be zero!");
      }
      this.n = n;
      this.d = d;
    }

    Frac(n, d = 1) {
      
      if (d == 0) {
        throw new Error("denominator cannot be zero!");
      }
      this.n = n;
      this.d = d;

    } 

    add(num, denum) {

      // program to find the LCM of two integers

      // take input
      const num1 = denum
      const num2 = this.d

      // higher number among number1 and number2 is stored in LCM
      let LCM = (num1 > num2) ? num1 : num2;

      // while loop
      while (true) {
          if (LCM % num1 == 0 && LCM % num2 == 0) {
              console.log(`The LCM of ${num1} and ${num2} is ${LCM}`);
              break;
          }
          LCM++;
      }

      this.n = LCM * this.n/this.d + LCM * num/denum
      this.d = LCM

    }
    
    valueOf() {
      return this.n / this.d;
    }
  
    display() {
      return this.n + "/" + this.d
    }

    solvedDisplay() {
      return this.n / gcd_two_numbers(this.n, this.d) + "/" + this.d / gcd_two_numbers(this.n, this.d)
    }
  
    numerator() { return this.n / gcd_two_numbers(this.n, this.d) }
    denominator() { return this.d / gcd_two_numbers(this.n, this.d)}
}

function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

let num11 = new Frac(1, 2)
let num22 = new Frac(3, 48)
num11.add(3, 48)

console.log(`gcd_two_numbers(12, 13): ${gcd_two_numbers(12, 13)}`);
console.log(`gcd_two_numbers(9, 3) ${gcd_two_numbers(9, 3)}`);
console.log(`Frac(9, 3) `);
console.log(`num11.add(num22) ${num11.solvedDisplay()}`);


let oneByTwo = Fraction(1).div(2);      oneByTwo = oneByTwo.toFraction(true); 
let oneByThree = Fraction(1).div(3);    oneByThree = oneByThree.toFraction(true);
let twoByThree = Fraction(2).div(3);    twoByThree = twoByThree.toFraction(true);
let oneByFour = Fraction(1).div(4);     oneByFour = oneByFour.toFraction(true);
let oneBySix = Fraction(1, 6);      oneBySix = oneBySix.toFraction(true);
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
y = oneByEight

// y =  add(oneByFour, oneBySix)
// y = oneBySix.add(oneBySix)

console.log(`typeof y = ${typeof y}, y = ${y} , sum ${oneBySix + oneBySix} typeof oneByTwo = ${typeof oneByTwo}`)

console.log(`res = ${res}, typeof res = ${typeof res}`)
console.log(`x = ${x}, typeof  = ${typeof x}`)