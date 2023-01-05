/*
    * This file contains the check of relatives
    * For instance, Ikhwa Check, Childern Check and etc
    * Khanqah Rehmkariya Imdadia
    * Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/


// checks son/daughter or any of their offspring.
function childernCheck() {
    if (parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 
    && parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 0 && parseInt(sssDaughter.value) === 0 ) {
    // console.log ("childern does not exists")
        return false
    } else {
        // console.log("childern exists")
        return true
    }
}

// checks Ikhwa (اخوہ)
function ikhwaCheck () {
    let ik = parseInt(rSister.value) + parseInt(pSister.value) + 
    parseInt(mSister.value) + parseInt(rBrother.value) + 
    parseInt(pBrother.value) + parseInt(mBrother.value)

    if (ik > 1) {
        // console.log("Ikhwa Exists")
        return true
    } else {
        // console.log("Ikhwa does not Exists")
        return false
    }
}

// // checks son/daughter or any of their offspring.
// function childernCheck() {
	// if ( parseInt(son.value) > 0 || parseInt(sSon.value) > 0 || parseInt(ssSon.value) > 0 || parseInt(sssSon.value) > 0 
	// 	|| parseInt(daughter.value) > 0 || parseInt(sDaughter.value) > 0 || parseInt(ssDaughter.value) > 0 || parseInt(sssDaughter.value) > 0 ) {
	// 	console.log ("childern exists")
	// 	return true
	// } else {
	// 	console.log("childern does not exists")
	// 	return false
	// }
// }

// Not Needed
// ----------------------------------------------------------------------------------------------
// checks son(s) exist or not
function sonExists() {
    if (parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0) {
        console.log("son(s) and any their offspring does not exist")
        return false
    } else {
        return true
    }
}

// checks Son's Son exists or not
function sSonExists() {
    if (parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0) {
        console.log("Son's son(s) does not exist")
        return false
    } else {
        return true
    }
}

// checks Son's Son's Son exists or not
function ssSonExists() {
    if (parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0) {
        console.log("Son's Son's son(s) does not exist")
        return false
    } else {
        return true
    }
}

// checks Son's Son's Son's Son exists or not
function sssSonExists() {
    if (parseInt(sssSon.value) === 0) {
        console.log("Son's Son's Son's son(s) does not exist")
        return false
    } else {
        return true
    }
}

// if real brother, paternal brother, son, sSon, ssSon or sssSon exists then asbat are present
function asbatCheck() {

    let ACArr = []

    // Real Sister(s) present
    if (parseInt(rSister.value) > 0 && rSisterPart === zero) {rSisterAsba = true}
    // console.log(`rSisterAsba: ${rSisterAsba}`)

    // paternal sister(s) present
    if (parseInt(pSister.value) > 0 && pSisterPart === zero)  {
        // in absence of paternal brother, if real sister is more than 1 
        // then paternal sister can not become asba
        if (parseInt(rSister.value) < 2 || parseInt(pBrother.value) > 0) {
            pSisterAsba = true
        }
    }
    // console.log(`pSisterAsba: ${pSisterAsba}`)

    // daughter present
    if (parseInt(daughter.value) > 0) { 
        
        if ( parseInt(son.value) > 0 || parseInt(sSon.value) > 0 || parseInt(ssSon.value) > 0 || parseInt(sssSon.value) > 0 ) {
            daughterAsba = true
        }

    }
    // console.log(`daughterAsba: ${daughterAsba}`)

    // sDaughter present
    if (parseInt(sDaughter.value) > 0) { 
        
        if ( parseInt(son.value) === 0 && (parseInt(sSon.value) > 0 || parseInt(ssSon.value) > 0 || parseInt(sssSon.value) > 0) ) {
            sDaughterAsba = true
        }

    }
    // console.log(`sDaughterAsba: ${sDaughterAsba}`)

    // ssDaughter present
    if (parseInt(ssDaughter.value) > 0) { 
        
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && (parseInt(ssSon.value) > 0 || parseInt(sssSon.value) > 0) ) {
            ssDaughterAsba = true
        }

    }
    // console.log(`ssDaughterAsba: ${ssDaughterAsba}`)

    // sssDaughter present
    if (parseInt(sssDaughter.value) > 0) { 
        
        if ( parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) > 0 ) {
            sssDaughterAsba = true
        }

    }
    // console.log(`sssDaughterAsba: ${sssDaughterAsba}`)

    // father present
    if (parseInt(father.value) > 0) {fatherAsba = true}
    // console.log(`fatherAsba: ${fatherAsba}`)

    // Grandfather present
    if (parseInt(grandFather.value) > 0) {grandFatherAsba = true}
    // console.log(`grandFatherAsba: ${grandFatherAsba}`)

    // Paternal Brother present
    if (parseInt(pBrother.value) > 0) {pBrotherAsba = true}
    // console.log(`pBrotherAsba: ${pBrotherAsba}`)

    // Real Brother present
    if (parseInt(rBrother.value) > 0) {rBrotherAsba = true}
    // console.log(`rBrotherAsba: ${rBrotherAsba}`)

    // Son present
    if (parseInt(son.value) > 0) {sonAsba = true}
    // console.log(`sonAsba: ${sonAsba}`)

    // sSon present
    if (parseInt(sSon.value) > 0) {sSonAsba = true}
    // console.log(`sSonAsba: ${sSonAsba}`)

    // ssSon present
    if (parseInt(ssSon.value) > 0) {ssSonAsba = true}
    // console.log(`ssSonAsba: ${ssSonAsba}`)

    // sssSon present
    if (parseInt(sssSon.value) > 0) {sssSonAsba = true}
    // console.log(`sssSonAsba: ${sssSonAsba}`)

    ACArr = [rSisterAsba, pSisterAsba, daughterAsba, sDaughterAsba, ssDaughterAsba, sssDaughterAsba, 
            fatherAsba, grandFatherAsba, pBrotherAsba, rBrotherAsba, sonAsba, sSonAsba, ssSonAsba, sssSonAsba]

    if (ACArr.indexOf(true) >= 0) {return true}

    if (parseInt(rBrother.value) === 0 && parseInt(pBrother.value) === 0 && parseInt(son.value) === 0 && 
        parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0) {
        return false
    }

    // return true
}
