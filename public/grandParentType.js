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
        ffff.checked === false && ffff.checked === false) {

        return ff.value
    }
}