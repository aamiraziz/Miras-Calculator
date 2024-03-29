/*
    * Grand Parents are of many type
    * This file contains the functions which will return the correct grandparents
    * This file also contains the functions of Show/Hide Main/AsbaatChart div
    * Khanqah Rehmkariya Imdadia
    * Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/

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

    return null
}

// this fucntion will show the grand Mother type
function showGrandMotherType() {

    if (!grandMother.checked) {
        return null
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

    // There is no grand Mother then this function will retrn 0 to get rid of errors
    // if (gmTypeArr === []) {gmTypeArr = 0}
    // gmTypeArr.push(gmTypeArr.length)

    return gmTypeArr

}

// This function can use to hide the asbaat chart after calculate button is clicked
// function hideAsbaatChart() {
//     main.style.display = 'block'
// 	asbaatChart.style.display = 'none'
// }