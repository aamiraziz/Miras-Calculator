
// Calculates Husband Part (شوہر)
function calculateHusbandPart() {

	if (parseInt(husband.value) === 1) {

		if(childernExists) {
            // in zawe al farooz chart in presence of childern, Husband part is 1/4
			return 1/4
		} else { 
            // in zawe al farooz chart in absence of childern, Husband part is 1/2
			return 1/2
		}
	}
    
    return 0

}

// Calculates Wife Part (بیوی)
function calculateWifePart() {

	// Check if Wife exists
    if (parseInt(wife.value) > 0) {
		if(childernExists) {
			return 1/8
		} else {
			return 1/4
		}
	}
    
    return 0

}

//calculates Daughter part (بیٹی)
function calculateDaughterPart() {

    // Check if Daughter exists
    if ( parseInt(daughter.value) !== 0) {

        // in zawe al farooz chart in absence of son, if daughter is more than one, then daughter's part is 2/3
        if ( parseInt(son.value) === 0 && parseInt(daughter.value) > 1 ) {
            return 2/3
        }

        // in zawe al farooz chart in absence of son, if daughter is only one, then daughter's part is 1/2
        if ( parseInt(son.value) === 0 && parseInt(daughter.value) === 1 ) {
            return 1/2
        }

    }
    
    return 0

}

// calculates Son's Daughter part (پوتی)
function calculateSDaughterPart() {

    // Check if Son's Daughter exists
    if ( parseInt(sDaughter.value) !== 0) {
    
        // in zawe al farooz chart in absence of son, son's son and daughter, if there is more than one daughter of son, 
        // then all of them will get 2/3
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
             parseInt(daughter.value) === 0 && parseInt(sDaughter.value) > 1 ) {
    
            return 2/3
            
        }
    
        // in zawe al farooz chart in absence of son, son's son and daughter, if there is only one daughter of son, 
        // then she will get 1/2
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
             parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 1 ){
    
            return 1/2
    
        }
    
        // in zawe al farooz chart in absence of son and son's son, if there is only one daughter,
        // then daughter of son will get 1/6
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(daughter.value) === 1 && parseInt(sDaughter.value) > 0 ) {
    
            return 1/6
    
        }

    }
    
    return 0

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
    
            return 2/3
    
        }
    
        // in zawe al farooz chart in absence of son, son's son, son's son's son, daughter and daughter of son.
        // if Daughter of son's son's son is only 1
        // then daughter of son's son's son will get 1/2
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(ssSon.value) === 0 && parseInt(daughter.value) === 0 && 
            parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 1 ) {
    
            return 1/2
    
        }
    
        // in zawe al farooz chart in absence of son, son's son, son's son's son, 
        // if only one daughter OR only one daughter of son exists.
        // no matter how many Daughter of son of son exists
        // then daughter of son's son's son will get 1/6
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && 
            (parseInt(daughter.value) === 1 || parseInt(sDaughter.value) === 1) && 
            !(parseInt(daughter.value) === 1 && parseInt(sDaughter.value) === 1) && 
            parseInt(ssDaughter.value) > 0 ) {
    
            return 1/6
    
        }
    } 
    
    return 0

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
    
            return 2/3
    
        }
    
        // in zawe al farooz chart in absence of son, son of son, son of son of son, daughter and daughter of son.
        // if Daughter of son of son is only 1
        // then daughter of son of son will get 1/2
        if( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
            parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 && 
            parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 && 
            parseInt(ssDaughter.value) === 0 && parseInt(sssDaughter.value) === 1 ) {
    
            return 1/2
    
        }
    
        // in zawe al farooz chart in absence of son, son of son, son of son of son, 
        // if only one daughter OR only one daughter of son exists.
        // no matter how many Daughter of son of son exists
        // then daughter of son of son will get 1/6
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && 
             parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 && 
             (parseInt(daughter.value) === 1 || parseInt(sDaughter.value) === 1 || parseInt(ssDaughter.value) === 1) && 
             // !(parseInt(daughter.value) === 1 && parseInt(sDaughter.value) === 1) && 
             // !(parseInt(sdaughter.value) === 1 && parseInt(ssDaughter.value) === 1) &&
             !(parseInt(daughter.value) === 1 && parseInt(ssDaughter.value) === 1) &&
             parseInt(sssDaughter.value) > 0 ) {
    
             return 1/6
    
        }
    } 
    
    return 0

}

// function to calculate father's part (والد)
function calculateFatherPart() {

    // Check if Father exists
    if ( parseInt(father.value) !== 0 ) {
        if (childernExists) {
            return 1/6
        }
    }
    
    return 0
    
}

// function to calculate Mother's Part
function calculateMotherPart() {

    // Check if mother exists
    if ( parseInt(mother.value) !== 0 ) {

        // in zawe al farooz chart, if childern are present OR Ikhwa are Present OR Father and Husband are present
        // then mother will get 1/6
        if ( childernExists || ikhwaExists || ( parseInt(father.value) === 1 && parseInt(husband.value) === 1 ) ) {
            return 1/6
        } else if ( !(childernExists || ikhwaExists) && ( parseInt(wife.value) > 0 && parseInt(father.value) === 1 ) ) {

        // in zawe al farooz chart, if childern and Ikhwa are Absent AND Wife and Father are present
        // then mother will get 1/4
        
            return 1/4
        } else {
            return 1/3
        }

    }
    
    return 0
    
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

            return 2/3
        }

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father) and real brother
        // if there is only one Real Sister then she will get 1/2
        if ( parseInt(rSister.value) === 1 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 ) {

            return 1/2
        }
    }
    
    return 0

}

// function to calculate Real Brother's Part
function calculateRBrotherPart() { return null }


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

            return 2/3
        }

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father), real brother(s), 
        // real sister(s) and paternal brother
        // if there is only one paternal sister, then she will get 1/2
        if ( parseInt(pSister.value) === 1 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 && parseInt(rSister.value) === 0 && 
        parseInt(pBrother.value) === 0 ) {

            return 1/2
        }

        // in zawe al farooz chart in absence of childern, father, grand father (Father 0f Father), real brother(s), 
        // real sister(s) and paternal brother, but only one real sister exist.
        // no matter how many paternal sisters are, then she will get 1/6
        if ( parseInt(pSister.value) > 0 && !childernExists && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        parseInt(rBrother.value) === 0 && parseInt(rSister.value) === 1 && 
        parseInt(pBrother.value) === 0 ) {

            return 1/6
        }

    } 
    
    return 0

}

// function to calculate Paternal (who has same father but different mother) Brother's Part
function calculatePBrotherPart() { return null }

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

            return 1/3
        }

        // in zawe al farooz chart, in absence of childern, father and grand father (Father 0f Father)
        // no matter how many maternal brother or sister exists
        // then they will get 1/3
        if ( (parseInt(mBrother.value) > 1 || parseInt(mSister.value) > 1) && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 &&
        !childernExists ) {

            return 1/3
        }

        // in zawe al farooz chart, in absence of childern, father and grand father (Father 0f Father)
        // if there is only one  brother or sister exists
        // then he/she will get 1/6
        if ( (parseInt(mBrother.value) === 1 || parseInt(mSister.value) === 1) && 
        parseInt(father.value) === 0 && parseInt(grandFather.value) === 0 && 
        !childernExists ) {

            return 1/6
        }

    } 
    
    return 0

}

// function to calculate Grand Father's Part i.e Father's Father Part, Father's Father's Father Part and 
// Father's Father's Father's part
function calculateGrandFatherPart() {

    // in presence of childern if father is not present then grandFather will get 1/6
    if ( parseInt(grandFather.value) === 1 && childernExists && parseInt(father.value) === 0) {
        return 1/6
    }

    return 0
}

function calculateGrandMotherPart() {

    // if GrandMother (Mother of Mother) exists in absebce of Mother then grandMother will get 1/6
    if ( parseInt(grandMother.value) === 1 && parseInt(mother.value) === 0 ) {
        return 1/6
    }

    // if GrandMother (Mother of Father) exists in absebce of father then grandMother will get 1/6
    if ( parseInt(grandMother.value) === 1 && parseInt(father.value) === 0 ) {
        return 1/6
    }

    // to remove "undefined"
    return 0
}