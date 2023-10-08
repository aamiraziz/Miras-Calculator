/*
    * This file contains the implementation of fractions in JavaScript
    * you can declare and initialize a fraction as:
    * let one3rd = new Frac(1, 3)
    * 
    * You can get the following information of declared fraction
    *   1) you can display the fraction using the "display()"
    *   2) you can get its value using the "valueOf()"
    *   3) you can get its numerator using the "numerator()"
    *   4) you can get its denominator using the "denominator()"
*/

class Frac {
    constructor(n, d = 1) {
      if (d === 0 || d == 0) {
        throw new Error("denominator cannot be zero!");
      } 
      this.n = n;
      this.d = d;
    }

    // this function will set the numerator and denominator of current object
    set(n, d = 1) {
      if (d === 0 || d == 0) {
        throw new Error("denominator cannot be zero!");
      } 
      this.n = n;
      this.d = d;
    }

    reduce() {
      this.n = this.n / GCD(this.n, this.d)
      this.d = this.d / GCD(this.n, this.d)
    }

    // this function will add the passed object in current object
    // add(obj(num, denum)) {

    // }
    
    valueOf() {
      if (this.d === 1) {
        return this.n
      } else {
        return this.n / this.d
      }
    }
  
    display() {
      return this.n + "/" + this.d
    }

    solvedDisplay() {
      return this.n / GCD(this.n, this.d) + "/" + this.d / GCD(this.n, this.d)
    }
  
    // numerator() { return this.n }
    // denominator() { return this.d }
    numerator() { return this.n / GCD(this.n, this.d) }
    denominator() { return this.d / GCD(this.n, this.d)}

}

// calculate GCD
function GCD(x, y) {
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

// Make Fraction
function makeFrac(myFloat) {

  myFloat = new Fraction(myFloat)
  const myString = myFloat.toFraction()
  let myFrac = myString.split('/')
  // myFloat = new Frac(parseInt(myFrac[0]), parseInt(myFrac[1]))

  if (myFrac.length === 1) {
    myFloat = new Frac(parseInt(myFrac[0]), parseInt(1))
  } else {
    myFloat = new Frac(parseInt(myFrac[0]), parseInt(myFrac[1]))
  }

  return myFloat

}

// this function will calculate the part of part e.g 1/3rd of 1/12th

function addTwoFracs(Frac1, Frac2) {

  // filterDenominators(Array)
  // var y = nerdamer('lcm(3, 21)');
  // console.log(y.toString());

  let lcm, n, d, retObj
  lcm = nerdamer(`lcm(${Frac1.denominator()}, ${Frac2.denominator()})`)
  // console.log(`lcm = ${lcm}`)
  // console.log(`Frac1.numerator(): ${Frac1.numerator()}`)
  // console.log(`Frac1.denominator(): ${Frac1.denominator()}`)
  // console.log(`Frac2.numerator(): ${Frac2.numerator()}`)
  // console.log(`Frac2.denominator(): ${Frac2.denominator()}`)
  n = parseInt(lcm * Frac1.numerator()/Frac1.denominator() + lcm * Frac2.numerator()/Frac2.denominator())
  d = parseInt(lcm)

  console.log(`n: ${n}`)
  console.log(`d:${d}`)

  retObj = new Frac(n, d)
  // retObj.reduce()
  console.log(`retObj: ${retObj.display()}`)

  return retObj
}


{
  // partOfPart(remainingPart, ratioSum)
  // let myFloat = new Fraction(ratioSum
  // console.log(`myFloat: ${myFloat}`)

  // const myString = myFloat.toFraction()
  // console.log(`myString: ${myString}`)
  
  // let myFrac = myString.split('/')
  // console.log(`myFrac[0]: ${myFrac[0]}`)
  // console.log(`myFrac[1]: ${myFrac[1]}`)

  // if (myFrac.length === 1) { 
  //     myFloat = new Frac(parseInt(myFrac[0]), parseInt(1))
  // } else {
  //     myFloat = new Frac(parseInt(myFrac[0]), parseInt(myFrac[1]))
  // }

  // // myFloat = new Frac(parseInt(myFrac[0]), parseInt(myFrac[1]))
  // console.log(`parseInt(myFrac[0]), parseInt(myFrac[1]): ${parseInt(myFrac[0])}, ${parseInt(myFrac[1])}`)
  // console.log(`myFloat: ${myFloat.valueOf()}`)
  // console.log(`myFloat: ${myFloat.display()}`)
  // console.log(`myFloat: ${myFloat.solvedDisplay()}`)
}