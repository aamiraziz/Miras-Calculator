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

    if (!grandMother.checked) {
        return "Grand Mother Does Not Exist"
    }

    let gmTypeArr = []

    // if father and grand mother is checked the default grand mother is mother of mother
    
    // Grand Mother from mother
    if ( mm.checked ) {
        mmm.checked = false
        mmmm.checked = false
        // Father related Grand Mother
        mfm.checked = false
        mff.checked = false
        mmfm.checked = false
        mmff.checked = false
        mfff.checked = false

        gmTypeArr.push(mm.name)
    }

    if ( mmm.checked && !mf.checked) {
        mmmm.checked = false
        // Father related Grand Mother
        mmfm.checked = false
        mmff.checked = false
        mfff.checked = false
        gmTypeArr.push(mmm.name)
    }

    if ( mmmm.checked  && !mf.checked && !mfm.checked && !mff.checked) {gmTypeArr.push(mmmm.name)}

    // grand Mother from father
    if ( mf.checked ) {        
        mfm.checked = false
        mff.checked = false
        mmfm.checked = false
        mmff.checked = false
        mfff.checked = false

        // Mother related grand Mother
        mmm.checked = false
        mmmm.checked = false
        gmTypeArr.push(mf.name)
    }

    if ( mfm.checked ) {
        mmfm.checked = false
        mmff.checked = false
        mfff.checked = false
        gmTypeArr.push(mfm.name)
    }

    if ( mff.checked ) {
        mmfm.checked = false
        mmff.checked = false
        mfff.checked = false
        gmTypeArr.push(mff.name)
    }

    if ( mmfm.checked ) {gmTypeArr.push(mmfm.name)}

    if ( mmff.checked ) {gmTypeArr.push(mmff.name)}

    if ( mfff.checked ) {gmTypeArr.push(mfff.name)}

    return gmTypeArr

}