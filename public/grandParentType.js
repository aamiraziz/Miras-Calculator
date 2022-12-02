// show the grand parent type

// this function will show the grand father type
function showGrandFatherType() {
    if (ff.checked === true) {
        return ff.value
    }

    if (fff.checked === true) {
        return fff.value
    }

    if (ffff.checked === true) {
        return ffff.value
    }

    if ( grandFather.checked === true && ff.checked === false && 
        fff.checked === false && ffff.checked === false) {

        return ff.value
    }

    return "Grand Father Does Not Exist"
}

// this fucntion will show the grand Mother type
function showGrandMotherType() {

    let grandMotherMArr = [mm.checked, mmm.checked, mmmm.checked]
    let grandMotherFArr = [mf.checked, mfm.checked, mff.checked, mmfm.checked, mmff.checked, mfff.checked]

    console.log(`Grand Mother from Mother is: ${grandMotherMArr}`)
    console.log(`Grand Father from Father is: ${grandMotherFArr}`)
    /*
    // if Mother's Mother is selected then mmm and mmmm will get nothing
    if ( mm.checked === true && (mmm.checked === true || mmmm.checked === true) ) {
        return mm.name
    }

    // if Mother's Mother's Mother is selected then mmmm will get nothing
    if ( mmm.checked === true && mmmm.checked === true) {
        return mmm.name
    }

    // in absence of father if grandMother type is not selected then default grandMother is Father's Mother
    if ( mf.checked === true && (mfm.checked === true || mff.checked === true
        || mmfm.checked === true || mmff.checked === true || mfff.checked === true) ) {
            return mf.name
    }
    
    // if Mother of Father is checked
    if (mf.checked === true) {
        return mf.name
    } 
    */

}