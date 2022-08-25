
// Calculates Husband Part
function calculateHusbandPart() {

	if (parseInt(husband.value) === 1) {
        // in zawe al farooz chart in absence of childern, Husband part is 1/4
		if(childernCheck) {
			return 1/4
		} else { // in zawe al farooz chart in presence of childern, Husband part is 1/2
			return 1/2
		}
	} else {
		return 0
	}

}

// Calculates Wife Part
function calculateWifePart() {
	if (parseInt(wife.value) > 0) {
		if(childernCheck) {
			return 1/8
		} else {
			return 1/4
		}
	} else {
		return 0
	}
}

//calculates Daughter part
function calculateDaughterPart() {

	// in zawe al farooz chart in absence of son, if daughter is only one, then daughter's part is 1/2
    if ( !sonCheck && parseInt(daughter.value) === 1 ) {
        return 1/2
    }

	// in zawe al farooz chart in absence of son, if daughter is more than one, then daughter's part is 2/3
    if ( !sonCheck && parseInt(daughter.value) > 1 ) {
        return 2/3
    }
}

// calculates Son's Daughter part
function calculateSDaughterPart() {

    // in zawe al farooz chart in absence of son and son of son, if there is only one daughter,
    // then daughter of son will get 1/6
    if( !sonCheck && parseInt(daughter.value) === 1 ) {
        return 1/6
    }

    // in zawe al farooz chart in absence of daughter, son and son of son, if there is only one daughter of son, 
    // then she will get 1/2
    if ( !sonCheck && parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 1 ){
        return 1/2
    }

    // in zawe al farooz chart in absence of daughter, son and son of son, if there is more than one daughter of son, 
    // then all of them will get 2/3
    if ( !sonCheck && parseInt(daughter.value) === 0 && parseInt(sDaughter.value) > 1 ) {
        return 2/3
    }
}
/*
// calculates Son's Son's Daughter part
function calculateSSDaughterPart() {

    // in zawe al farooz chart in absence of son and son of son, if there is only one daughter,
    // then daughter of son will get 1/6
    if( !sonCheck && parseInt(daughter.value) === 0 ) {
        return 1/6
    }

    // in zawe al farooz chart in absence of daughter, son and son of son, if there is only one daughter of son, 
    // then she will get 1/2
    if ( !sonCheck && parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 1 ){
        return 1/2
    }

    // in zawe al farooz chart in absence of daughter, son and son of son, if there is more than one daughter of son, 
    // then all of them will get 2/3
    if ( !sonCheck && parseInt(daughter.value) === 0 && parseInt(sDaughter.value) > 1 ) {
        return 2/3
    }
} */
