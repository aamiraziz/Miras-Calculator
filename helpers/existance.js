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
    if (parseInt(rBrother.value) === 0 && parseInt(pBrother.value) === 0 && parseInt(son.value) === 0 && 
        parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0) {
        console.log("Asbat Not Present")
        return false
    } else {
        console.log("Asbat Present")
        return true
    }
}
