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
      if (d == 0) {
        throw new Error("denominator cannot be zero!");
      }
      this.n = n;
      this.d = d;
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
  
    // numerator() { return this.n }
    // denominator() { return this.d }
    numerator() { return this.n / gcd_two_numbers(this.n, this.d) }
    denominator() { return this.d / gcd_two_numbers(this.n, this.d)}
}

// calculate GCD
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
