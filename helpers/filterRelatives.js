/*
    * Use to write functions which will filter only available relatives in asbaat / zaweAlFarooz
*/


function filterSelectedZaweAlFarooz(myArr) {

    let tempZAF = [[]]

    // Put only the available Zawe Al Farooz from availableRelativesArr array to selectedZaweAlFaroozArr array
    for ( let i = 0, z = 0; z < myArr.length; z++ ) {
        if ( myArr[z][2] === true ) {
            myArr[z][1] = zero
        }
        if ( myArr[z][0] !== 0 && myArr[z][1] !== zero ) {

            tempZAF[i] = myArr[z]
            // myArr[i] = parseInt(tempZAF[i][1].denominator())
            console.log(`selectedZaweAlFaroozArr[${i}] = ${tempZAF[i][0]}, ${tempZAF[i][1].valueOf()}, ${tempZAF[i][2]}, ${tempZAF[i][3]}`)
            i++
        } 
    }
    
    return tempZAF
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


// Filter Selected Asbaat
function filterSelectedAsbaat() {

    let tempAsbaat = [[]]

    // Put only the available Asbaat from availableRelativesArr array to selectedAsbaatArr array
    for ( let i = 0, z = 0; z < availableRelativesArr.length; z++ ) {
        
        if ( availableRelativesArr[z][2] ) {
            tempAsbaat[i] = availableRelativesArr[z]
            console.log(`selectedAsbaatArr[${i}] = ${tempAsbaat[i][0]}, ${tempAsbaat[i][1].valueOf()},
                                    ${tempAsbaat[i][2]}, ${tempAsbaat[i][3]}`)
            i++
        }
        
    }

    return tempAsbaat
}

function display(any2DArr) {

    let myArr = any2DArr

    for ( let i = 0; i < myArr.length; i++ ) {
        console.log(`myArr[${i}] = ${myArr[i][0]}, ${myArr[i][1].solvedDisplay()},
                                    ${myArr[i][2]}, ${myArr[i][3]}`)
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

