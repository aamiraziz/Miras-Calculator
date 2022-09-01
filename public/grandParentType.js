// show the grand parent type

// this function will show the grand father type
function showGrandFatherType() {
    if (ff.checked === true) {
        return "Father's Father"
    }

    if (fff.checked === true) {
        return "Father's Father's Father"
    }

    if (ffff.checked === true) {
        return "Father's Father's Father's Father"
    }
}