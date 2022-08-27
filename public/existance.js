
// checks son/daughter or any of their offspring.
function childernExists() {
	if (parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 
		&& parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 0 && parseInt(sssDaughter.value) === 0 ) {
		console.log ("childern does not exists")
		return false
	} else {
		console.log("childern exists")
		return true
	}
}

// checks son(s) exist or not
function sonExists() {
    if (parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0) {
        console.log("son(s) does not exist")
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

// checks Ikhwa (اخوہ)
function ikhwaExists () {
    let ik = parseInt(rSister.value) + parseInt(pSister.value) + 
    parseInt(mSister.value) + parseInt(rBrother.value) + 
    parseInt(pBrother.value) + parseInt(mBrother.value)

    if (ik > 1) {
        console.log("Ikhwa Exists")
        return true
    } else {
        console.log("Ikhwa does not Exists")
        return false
    }
}