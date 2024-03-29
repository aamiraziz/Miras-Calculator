/*
    * This file contains the functions for every zawe al farooz heir
    * functions for other than zawe al farooz heirs are written but they return zero for the time being
    * the return value of every function is object which is written in Frac.js in lib folder
    * Khanqah Rehmkariya Imdadia
    * Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/

// Calculates Husband Part (شوہر)
function calculateHusbandPart() {

	if (parseInt(husband.value) === 1) {

		if(childernExists) {
            // in zawe al farooz chart in presence of childern, Husband part is 1/4
			return oneByFour // 1/4
		} else { 
            // in zawe al farooz chart in absence of childern, Husband part is 1/2
			return oneByTwo // 1/2
		}
	}
    
    return zero

}

// Calculates Wife Part (بیوی)
function calculateWifePart() {

	// Check if Wife exists
    if (parseInt(wife.value) > 0) {
		if(childernExists) {
			return oneByEight // 1/8
		} else {
			return oneByFour // 1/4
		}
	}
    
    return zero

}

//calculates Daughter part (بیٹی)
function calculateDaughterPart() {

    // Check if Daughter exists
    if ( parseInt(daughter.value) !== 0) {

        // in zawe al farooz chart in absence of son, if daughter is more than one, then daughter's part is 2/3
        if ( parseInt(son.value) === 0 && parseInt(daughter.value) > 1 ) {
            return twoByThree // 2/3
        }

        // in zawe al farooz chart in absence of son, if daughter is only one, then daughter's part is 1/2
        if ( parseInt(son.value) === 0 && parseInt(daughter.value) === 1 ) {
            return oneByTwo // 1/2
        }

    }
    
    return zero

}

// calculates Son's Daughter part (پوتی)
function calculateSDaughterPart() {

    // Check if Son's Daughter exists
    if ( parseInt(sDaughter.value) !== 0) {
    
        // in zawe al farooz chart in absence of son, son's son and daughter, if there is more than one daughter of son, 
        // then all of them will get 2/3
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
             parseInt(daughter.value) === 0 && parseInt(sDaughter.value) > 1 ) {
    
            return twoByThree // 2/3
            
        }
    
        // in zawe al farooz chart in absence of son, son's son and daughter, if there is only one daughter of son, 
        // then she will get 1/2
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
             parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 1 ){
    
            return oneByTwo // 1/2
    
        }
    
        // in zawe al farooz chart in absence of son and son's son, if there is only one daughter,
        // then daughter of son will get 1/6
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(daughter.value) === 1 && parseInt(sDaughter.value) > 0 ) {
    
            return oneBySix // 1/6
    
        }

    }
    
    return zero

}

// calculates Son's Son's Daughter part (پڑپوتی)
function calculateSSDaughterPart() {

    // Check if Son's Son's Daughter exists
    if ( parseInt(ssDaughter.value) !== 0) {

        // in zawe al farooz chart in absence of son, son's son, son's son's son, daughter and daughter of son.
        // if Daughter of son's son's son is greater than 1
        // then daughter of son's son's son will get 2/3
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(ssSon.value) === 0 && parseInt(daughter.value) === 0 && 
            parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) > 1 ) {
    
            return twoByThree // 2/3
    
        }
    
        // in zawe al farooz chart in absence of son, son's son, son's son's son, daughter and daughter of son.
        // if Daughter of son's son's son is only 1
        // then daughter of son's son's son will get 1/2
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(ssSon.value) === 0 && parseInt(daughter.value) === 0 && 
            parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 1 ) {
    
            return oneByTwo // 1/2
    
        }
    
        // in zawe al farooz chart in absence of son, son's son, son's son's son, 
        // if only one daughter OR only one daughter of son exists.
        // no matter how many Daughter of son of son exists
        // then daughter of son's son's son will get 1/6
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && 
            (parseInt(daughter.value) === 1 && parseInt(sDaughter.value) === 0) || 
            (parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 1) && 
            parseInt(ssDaughter.value) > 0 ) {
    
            return oneBySix // 1/6
    
        }
        
    } 
    
    return zero

}

// calculates Son's Son's Son's Daughter part (سکڑ پوتی)
function calculateSSSDaughterPart() {

    // Check if Son's Son's Son's daughter exists
    if ( parseInt(sssDaughter.value) !== 0) {

        // in zawe al farooz chart in absence of son, son's son, son's son's son, son's son's son's son, daughter and daughter of son.
        // if Daughter of son of son is greater than 1
        // then daughter of son of son will get 2/3
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 && 
            parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 &&
            parseInt(ssDaughter.value) === 0 && parseInt(sssDaughter.value) > 1 ) {
    
            return twoByThree // 2/3
    
        }
    
        // in zawe al farooz chart in absence of son, son of son, son of son of son, daughter and daughter of son.
        // if Daughter of son of son is only 1
        // then daughter of son of son will get 1/2
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 && 
            parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 && 
            parseInt(ssDaughter.value) === 0 && parseInt(sssDaughter.value) === 1 ) {
    
            return oneByTwo // 1/2
    
        }
    
        // in zawe al farooz chart in absence of son, son of son, son of son of son, 
        // if only one daughter OR only one daughter of son exists.
        // no matter how many Daughter of son of son exists
        // then daughter of son of son will get 1/6
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
             parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 && 
             (parseInt(daughter.value) === 1 && parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 0) || 
             (parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 1 && parseInt(ssDaughter.value) === 0) || 
             (parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 1) &&
             parseInt(sssDaughter.value) > 0 ) {
    
             return oneBySix // 1/6
    
        }
    } 
    
    return zero

}

// calculate Son part
function calculateSonPart(){return zero}

// calculate Son's Son part
function calculateSSonPart(){return zero}

// calculate son's Son's Son part
function calculateSSSonPart(){return zero}

// calculate Son's Son's Son's Son part
function calculateSSSSonPart(){return zero}

// function to calculate father's part (والد)
function calculateFatherPart() {

    // Check if Father exists
    if ( parseInt(father.value) !== 0 ) {
        if (childernExists) {
            return oneBySix // 1/6
        } // else {return zero}
    }
    
    return zero
    
}

// function to calculate Mother's Part
function calculateMotherPart() {

    // Check if mother exists
    if ( parseInt(mother.value) !== 0 ) {

        // in zawe al farooz chart, if childern are present OR Ikhwa are Present OR Father and Husband are present
        // then mother will get 1/6
        if ( childernExists || ikhwaExists || ( parseInt(father.value) === 1 && parseInt(husband.value) === 1 ) ) {
            return oneBySix // 1/6
        } else if ( !(childernExists || ikhwaExists) && ( parseInt(wife.value) > 0 && parseInt(father.value) === 1 ) ) {

        // in zawe al farooz chart, if childern and Ikhwa are Absent AND Wife and Father are present
        // then mother will get 1/4
        
            return oneByFour // 1/4
        } else {
            return oneByThree // 1/3
        }

    }
    
    return zero
    
}

// function to calculate Real Sister's Part
function calculateRSisterPart() {

    // Check if Real Sister exists
    if ( parseInt(rSister.value) !== 0 ) {

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father) and real brother
        // if there are more than one Real Sister then she will get 2/3
        if ( parseInt(rSister.value) > 1 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 ) {

            return twoByThree // 2/3
        }

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father) and real brother
        // if there is only one Real Sister then she will get 1/2
        if ( parseInt(rSister.value) === 1 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 ) {

            return oneByTwo // 1/2
        }
    }
    
    return zero

}

// function to calculate Real Brother's Part
function calculateRBrotherPart() { return zero }


// function to calculate Paternal (who has same father but different mother) Sister's Part
function calculatePSisterPart() {

    // Check if Paternal Sister exists
    if ( parseInt(pSister.value) !== 0) {

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father), real brother(s), 
        // real sister(s) and paternal brother
        // if there is more than one paternal sister, then she will get 2/3
        if ( parseInt(pSister.value) > 1 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 && parseInt(rSister.value) === 0 && 
        parseInt(pBrother.value) === 0 ) {

            return twoByThree // 2/3
        }

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father), real brother(s), 
        // real sister(s) and paternal brother
        // if there is only one paternal sister, then she will get 1/2
        if ( parseInt(pSister.value) === 1 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 && parseInt(rSister.value) === 0 && 
        parseInt(pBrother.value) === 0 ) {

            return oneByTwo // 1/2
        }

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father), real brother(s), 
        // real sister(s) and paternal brother, but only one real sister exist.
        // no matter how many paternal sisters are, then she will get 1/6
        if ( parseInt(pSister.value) > 0 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 && parseInt(rSister.value) === 1 && 
        parseInt(pBrother.value) === 0 ) {

            return oneBySix // 1/6
        }

    } 
    
    return zero

}

// function to calculate Paternal (who has same father but different mother) Brother's Part
function calculatePBrotherPart() { return zero }

// function to calculate maternal (who has same mother but different father) Brother's or Sister's part
function calculateMBroSisPart() {

    // checks if Maternal Brother or sister Exists
    if ( parseInt(mBrother.value) !== 0 || parseInt(mSister.value) !== 0 ) {

        // in zawe al farooz chart, in absence of childern, father and grand father (Father 0f Father)
        // no matter how many maternal brother or sister exists
        // then they will get 1/3
        if ( (parseInt(mBrother.value) === 1 && parseInt(mSister.value) === 1) && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 &&
        !childernExists ) {

            return oneByThree // 1/3
        }

        // in zawe al farooz chart, in absence of childern, father and grand father (Father 0f Father)
        // no matter how many maternal brother or sister exists
        // then they will get 1/3
        if ( (parseInt(mBrother.value) > 1 || parseInt(mSister.value) > 1) && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 &&
        !childernExists ) {

            return oneByThree // 1/3
        }

        // in zawe al farooz chart, in absence of childern, father and grand father (Father 0f Father)
        // if there is only one  brother or sister exists
        // then he/she will get 1/6
        if ( (parseInt(mBrother.value) === 1 || parseInt(mSister.value) === 1) && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        !childernExists ) {

            return oneBySix // 1/6
        }

    } 
    
    return zero

}

// function to calculate Grand Father's Part i.e Father's Father Part, Father's Father's Father Part and 
// Father's Father's Father's part
function calculateGrandFatherPart() {

    // in presence of childern if father is not present then grandFather will get 1/6
    if ( parseInt(grandFather.value) === 1 && childernExists && parseInt(father.value) === 0) {
        return oneBySix // 1/6
    }

    // write condition to fulfill asbaat here 
    // e.g 1 daughter and 1 grandfather

    return zero
}

// function to calculate grand Mother's Part i.e total 9 types of grand Mothers
function calculateGrandMotherPart() {

    // if GrandMother (Mother of Mother) exists in absebce of Mother then grandMother will get 1/6
    if ( parseInt(grandMother.value) === 1 && parseInt(mother.value) === 0 ) {
        return oneBySix // 1/6
    }

    // if GrandMother (Mother of Father) exists in absebce of father then grandMother will get 1/6
    if ( parseInt(grandMother.value) === 1 && parseInt(father.value) === 0 ) {
        return oneBySix // 1/6
    }

    // to remove "undefined"
    return zero
}

// when ZaweAlFaroozSum is less than 1 then calculate the remaining part
function calculateRemainingPart() {

    let remaining = 1 - zaweAlFaroozSum 
    let part = new Frac(0, 1)

    if (remaining === parseInt(1)) {
        flag3 = true
        part = new Frac(remaining, 1)
    } else {
        remaining = new Fraction(remaining)
        
        // console.log(`remaining = new Fraction(remaining): ${remaining}`)
        
        const myString = remaining.toFraction()
        let myFrac = myString.split('/')
        part = new Frac(parseInt(myFrac[0]), parseInt(myFrac[1]))
    }
    

    // ================= For Testing Purpose =================
    console.log(`================= For Testing Purpose Start =================`)
    console.log(`zaweAlFaroozSum.toFraction() : ${zaweAlFaroozSum.toFraction()}`)
    console.log(`remaining: ${part.display()}`)
    console.log(`remaining Denominator: ${part.denominator()}`)

    // console.log(`myFrac[1] : ${myFrac[1]}`)
    // console.log(`zaweAlFaroozSum : ${zaweAlFaroozSum}`)
    // console.log(`myString : ${myString}`)
    // console.log(`part Numerator: ${part.numerator()}`)
    // console.log(`part display(): ${part.display()}`)
    // console.log(`part valueOf(): ${part.valueOf()}`)
    console.log(`================= For Testing Purpose Start =================`)
    return part
}

// calculates the LCM or any Array
function calculateLCM(LCM) {
    if (LCM.length > 1) {
        LCM = nerdamer(`lcm(${LCM})`) // Numerators LCM
    } 
    // else {
    //     LCM = selectedRelativesArr[0][0] // first element value
    // }
    return LCM
}