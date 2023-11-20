/*
    * Use to write functions which will filter only available relatives in asbaat / zaweAlFarooz
*/


function filterZaweAlFarooz() {

    let tempZAF = [[]]
    // let tempZAFpp = [[]]

    // Put only the available Zawe Al Farooz from availableRelativesArr array to selectedZaweAlFaroozArr array
    for ( let i = 0, z = 0; z < availableRelativesArr.length; z++ ) {
        if ( availableRelativesArr[z][0] !== 0 && availableRelativesArr[z][1] !== zero) {

            // perPerson = new Frac(availableRelativesArr[z][1].numerator(), availableRelativesArr[z][1].denominator() * availableRelativesArr[z][0])
            // tempZAFpp[i] = [availableRelativesArr[z][0], perPerson, availableRelativesArr[z][2], availableRelativesArr[z][3]]
            // console.log(`selectedZaweAlFaroozArr[${i}] = ${tempZAFpp[i][0]}, ${tempZAFpp[i][1].valueOf()}, ${tempZAFpp[i][2]}, ${tempZAFpp[i][3]}`)

            tempZAF[i] = availableRelativesArr[z]
            console.log(`selectedZaweAlFaroozArr[${i}] = ${tempZAF[i][0]}, ${tempZAF[i][1].solvedDisplay()}, ${tempZAF[i][2]}, ${tempZAF[i][3]}`)

            if ( tempZAF[i][2] ) {
                flag1 = true
                console.log(`My name is tempAZF[${i}][3] : ${tempZAF[i][3]} and my Flag is: ${flag1}`)
            }

            i++
        } 
        
    }
    
    return tempZAF
}

function filterSelectedZaweAlFarooz(perPerson, myArr) {

    let tempZAFpp = [[]]

    console.log(`INSIDE filterSelectedZaweAlFarooz Function`)
    console.log(`%c Selected Zawe Al Farooz: `, 
    "color: black; font-size: 12px; font-weight: bold;")

    // Put only the available Zawe Al Farooz from availableRelativesArr array to selectedZaweAlFaroozArr array
    for ( let i = 0, z = 0; z < myArr.length; z++ ) {
        if ( myArr[z][0] !== 0 && myArr[z][1] !== zero) {

            perPerson = new Frac(myArr[z][1].numerator(), myArr[z][1].denominator() * myArr[z][0])
            tempZAFpp[i] = [myArr[z][0], perPerson, myArr[z][2], myArr[z][3]]
            console.log(`
                %c ${i + 1})   ${tempZAFpp[i][0]}, ${tempZAFpp[i][1].solvedDisplay()}, ${tempZAFpp[i][2]}, ${tempZAFpp[i][3]}`, 
                "color: black; font-size: 12px; font-weight: bold;"
            )

            if ( tempZAFpp[i][2] && (tempZAFpp[i][3] === fatherName || tempZAFpp[i][3] === gfName) ) {
                flag1 = true

                // console.log(`My Index in selectedZaweAlFaroozArr is : %c ${i} `, "color: black; font-size: 12px; font-weight: bold;")
                // console.log(`My name is : %c ${tempZAFpp[i][3]} `, "color: black; font-size: 12px; font-weight: bold;")
            }

            i++
        } 
        
    }
        
    console.log(`flag1 is True if Father/Grand Father is present in Selected ZAF Array for Hanfi and Hanbali`)
    console.log(`flag1 is True if Father is present in Selected Asbaat Array for Maliki and Shaafi`)
    console.log(`%c FLAG1: ${flag1}`, "color: black; font-size: 12px; font-weight: bold;")

    console.log(`Selected Zawe Al Farooz Array length = ${tempZAFpp.length}`)
    
    return tempZAFpp
}

// Filter Selected Asbaat
function filterSelectedAsbaat() {

    console.log(`INSIDE filterSelectedAsbaat Function`)
    console.log(`%c Selected Asbaat: `, "color: black; font-size: 12px; font-weight: bold;")

    let tempAsbaat = [[]]

    // Put only the available Asbaat from availableRelativesArr array to selectedAsbaatArr array
    for ( let i = 0, z = 0; z < availableRelativesArr.length; z++ ) {
        
        if ( availableRelativesArr[z][2] ) {
            tempAsbaat[i] = availableRelativesArr[z]
            console.log(`
                %c ${i + 1})   ${tempAsbaat[i][0]}, ${selectedAsbaatArr[0][1]}, ${tempAsbaat[i][2]}, ${tempAsbaat[i][3]}`, 
                "color: black; font-size: 12px; font-weight: bold;"
                // The Type OF availableRelativesArr[${z}][1] when assigned to tempAbsaat is: ${typeof(tempAsbaat[i][1].display())}
                // The Value OF availableRelativesArr[${z}][1] when assigned to tempAbsaat is: ${tempAsbaat[i][1].display()}
                )

            if ( tempAsbaat[i][2] && (tempAsbaat[i][3] === fatherName || tempAsbaat[i][3] === gfName) ) {
                flag2 = true
            }

            i++
        }
        
    }

    console.log(`flag2 is True if Father/Grand Father is present in Selected Asbaat Array`)
    console.log(`%c FLAG2: ${flag2}`, "color: black; font-size: 12px; font-weight: bold;")

    console.log(`Selected Asbaat Array length = ${tempAsbaat.length}`)

    return tempAsbaat
}

function filterRelativeCounts(myArr) {

    let tempdenom = []

    for(let i = 0; i < myArr.length; i++) {
        tempdenom[i] = parseInt(myArr[i][0])
    }
    return tempdenom
}

function filterNumerators(myArr) {

    let tempdenom = []

    for(let i = 0; i < myArr.length; i++) {
        tempdenom[i] = parseInt(myArr[i][1].numerator())
    }
    return tempdenom
}

function filterDenominators(myArr) {

    let tempdenom = []

    for(let i = 0; i < myArr.length; i++) {
        tempdenom[i] = parseInt(myArr[i][1].denominator())
    }
    return tempdenom
}

// check for second LCM
function checkForSecondLCM(anyArr) {
    let myArr = anyArr
    if (myArr.find(element => element[0] > 1)) {
        return true
    } else {
        return false
    }
}

function display(any2DArr) {

    let myArr = any2DArr

    for ( let i = 0; i < myArr.length; i++ ) {
        console.log(`%c 
        ${i + 1}) ${myArr[i][0]}, ${myArr[i][1].solvedDisplay()}, ${myArr[i][2]}, ${myArr[i][3]}`, 
        "color: black; font-size: 12px; font-weight: bold;")
    }
}

function testAfterFilterSelectedAsbaat() {
    console.log(`remainingPart.display() : ${remainingPart.display()}`) // test statement
    // console.log(`remainingPart : ${remainingPart}`) // test statement
    // console.log(`remainingPart.valueOf() : ${remainingPart.valueOf()}`) // test statement
    // console.log(`remainingPart.numerator() : ${remainingPart.numerator()}`) // test statement
    // console.log(`remainingPart.denominator() : ${remainingPart.denominator()}`) // test statement
    // console.log(`counterMale(${counterMale}) + counterFemale(${counterFemale})= ${counterMale + counterFemale}`) // test statement
    // console.log(`typeof(counterMale) : ${typeof(counterMale)} \n typeof(counterFemale) : ${typeof(counterFemale)}`) // test statement
}

// check for second LCM For Asbaat
// function checkSecondLCMForAsbaat(anyArr) {
//     let myArr = anyArr
//     if (myArr.find(element => element[2] < 1)) {
//         return true
//     } else {
//         return false
//     }
// }

