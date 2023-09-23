/*
	* This file contains the functions which performs the computation according to differnt imams..
	* All necessary data is available already.
	* Khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development For This Page Started on Feburary 21, 2023
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/

// This is common code when there is only one type of relative in Asbaat Array
// I.E only one item in asbaat array.
function forAllMethods() {

    // these flag will use to find the existance of father/grandFather in Selected ZAF and Selected Asbaat
	// if Imam is maaliki or shaafi then it is only true for father but not for grand father
    if ( flag1 && flag2 ) {
        // if ( flag1 === true && flag2 === true ) {    // for All Imams
        let remaining
        // assign the remaining part in ZAF array in which asba part is true
        for ( let i = 0; i < selectedZaweAlFaroozArr.length; i++ ) {
            if ( selectedZaweAlFaroozArr[i][2]) {
                console.log(`The Part of ${selectedZaweAlFaroozArr[i][3]} is 
                ${selectedZaweAlFaroozArr[i][1].solvedDisplay()} + ${remainingPart.solvedDisplay()} = `)
                
                remaining = selectedZaweAlFaroozArr[i][1] + remainingPart

                // makeFrac function is written in Frac.js file
                remaining = makeFrac(remaining)

                selectedZaweAlFaroozArr[i][1] = remaining

                console.log(`%c ${selectedZaweAlFaroozArr[i][1].display()}`, "color: black; font-size: 12px; font-weight: bold;")
            }
        }

    } else if ( flag3 ) { // this flag will become true when ZAF array is empty
        //   && selectedAsbaatArr.length === 1

        selectedAsbaatArr[0][1] = new Frac(remainingPart.numerator(), remainingPart.denominator())
        console.log(`selectedAsbaatArr[0][1] (ifelse) 
        in Absence of ZAF, ${selectedAsbaatArr[0][3]} will get ${selectedAsbaatArr[0][1].display()}`)

    } else { 

        selectedAsbaatArr[0][1] = new Frac(remainingPart.numerator(), remainingPart.denominator() * selectedAsbaatArr[0][0])
        console.log(`Inside (ifelse)  
            %c In presensce of ZAF, ${selectedAsbaatArr[0][3]} will get ${selectedAsbaatArr[0][1].display()}`
            , "color: black; font-size: 12px; font-weight: bold;"
            , `\n When FLAG1, FLAG2 and FLAG3 are false`)

    }

}

// this function will assign parts according to Imam Hanfi and Hanbali Method
function hanfiMethod() {

    // This if section is true for all Imams but its else section is not true for all Imams
	// if ( selectedAsbaatArr.length === 1 /* && remainingPart !== 1 */) {} else {}

    //  if ( !((grandFatherVal > 0) && (imam === "shaafi" || imam === "maliki")) )
    // this block of code will work for all imams
    // for shaafi and maliki this will only work if grand father is not present i.e (grandFatherVal === 0)

    calculatePerAsbaSiblingPart()

    // use FOR loop to assign values to array and multiply value by 2 on last index
    for ( let i = 0; i < selectedAsbaatArr.length; i++ ) {
        if ( i === selectedAsbaatArr.length -1 ) {
            selectedAsbaatArr[i][1] = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
        } else {
            selectedAsbaatArr[i][1] = perAsbaSiblingPart
        }		
    }
    
}

// this function will assign parts according to Imam Malik and Shaafi Method
function malikiMethod() {

    // if (imam === "shaafi" || imam === "maliki") {
    console.log(`rSisterPart: ${rSisterPart.display()}`)

    // we calculate total females then calculate one female part
    // then assign the double value of female to male.
    // totalFemales = parseInt(counterMale) + parseInt(counterFemale)
    console.log(`for imam === shaafi || imam === maliki and totalFemales: ${totalFemales}`)
    // first of all find Grand Father's part here

    /*
        * ALGORITHM:
            ==========

        * Remaining part is calculated already
        * Total females are calculated already
        * Calculate per Asba Sibling part which is equal to every female part
        * Calculate every Male Part
        * Calculate Grand Father's part which is equal to the greatest among the three rules below.
            * RULE 1: Calculate the male part
            * RULE 2: Calculate the one third (1/3) of remaining part
            * RULE 3: Calculate the one sixth (1/6) of remaining part
        * Assign the the Greatest value to Grand Father's part
        * Remove Paternal Brothers and sisters
        * Calculate remaining part for siblings i.e remainingPart - GrandFather's part
            * remainingForSiblings = remainingPart - gfRule1
        * Distribute the remaining part among the Real Brothers and sisters.

    */
    
    calculatePerAsbaSiblingPart()
    console.log(`for imam === shaafi || imam === maliki and totalFemales: ${totalFemales}`)

    let gfRule1 = new Frac(0, 1), gfRule2, gfRule3 = oneBySix 

    // gfRule2 = one 3rd of remainingPart
    gfRule2 = new Frac(remainingPart.numerator(), 3 * remainingPart.denominator())

    // use FOR loop to assign values to array and multiply value by 2 on last index
    // Assign All Brothers/GrandFather parts values in respective array
    // Assign Grand Father's part values in gfRule1 variable for comparison.
    for ( let i = 0; i < selectedAsbaatArr.length; i++ ) {
        if ( selectedAsbaatArr[i][3] === gfName || selectedAsbaatArr[i][3] === rBrotherName || 
                selectedAsbaatArr[i][3] === pBrotherName ) {
                selectedAsbaatArr[i][1] = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
                if (selectedAsbaatArr[i][3] === gfName) { 
                    gfRule1.set(selectedAsbaatArr[i][1].numerator(), remainingPart.denominator() * selectedAsbaatArr[i][1].denominator())}
        } else {
            selectedAsbaatArr[i][1] = perAsbaSiblingPart
        }		
    }

    console.log(`**********************************************`)
    console.log(`gfRule1: ${gfRule1.display()}, gfRule2: ${gfRule2.display()}, gfRule3: ${gfRule3.display()}`)

    // gfRule1 will now contain the maximum value among all the rules.
    gfRule1 = Math.max(parseFloat(gfRule1.valueOf()), parseFloat(gfRule2.valueOf()), parseFloat(gfRule3.valueOf()))
    
    // makeFrac function is written in Frac.js file
    // this function will convert the float to Frac.
    gfRule1 = makeFrac(gfRule1)

    // Now Assign the greatest value among all the rules to Grand Father's part.
    const row = selectedAsbaatArr.findIndex(row => row.includes(gfName))
    selectedAsbaatArr[row][1] = gfRule1

    // Reduce counter by one brother because Grand Father has taken the part
    counterMale = counterMale - 2

    console.log(`gfRule1: ${gfRule1.solvedDisplay()} is the greatest`)
    console.log(`selectedAsbaatArr[${row}][1]: ${selectedAsbaatArr[row][1].solvedDisplay()} is the greatest`)
    console.log(`selectedAsbaatArr[${row}][3]: ${selectedAsbaatArr[row][3]} is the greatest`)
    console.log(`**********************************************`)

    // Now Remove the Paternal Brothers and Sisters
    const rBroRow = selectedAsbaatArr.findIndex(row => row.includes(rBrotherName))
    const pBroRow = selectedAsbaatArr.findIndex(row => row.includes(pBrotherName))
    const pSisRow = selectedAsbaatArr.findIndex(row => row.includes(pSisterName))

    console.log(`pBroRow: ${pBroRow}`)

    if(imam === "maliki" && rBroRow !== -1 && pSisRow === -1 && totalBroSis > 0) { // special case
        selectedAsbaatArr.splice(rBroRow, 1)
        selectedAsbaatArr[row][1] = oneByThree
    } else if(imam === "maliki" && pBroRow !== -1 && pSisRow === -1 && totalBroSis > 0) { // special case
        selectedAsbaatArr.splice(pBroRow, 1)
        selectedAsbaatArr[row][1] = oneByThree
    } else if ( pBroRow !== -1 ) { 
        counterMale = counterMale - 2 * (selectedAsbaatArr[pBroRow][0])
        selectedAsbaatArr.splice(pBroRow, 1)
    }

    if ( pSisRow !== -1 ) {
        counterFemale = counterFemale - selectedAsbaatArr[pSisRow][0]
        selectedAsbaatArr.splice(pSisRow, 1)
    }

    // console.log(`selectedAsbaatArr[${row}] (pBroRow): ${selectedAsbaatArr[pBroRow]}`)
    // console.log(`selectedAsbaatArr[${row}] (pSisRow): ${selectedAsbaatArr[pSisRow]}`)

    // let remainingForSiblings = remainingPart - gfRule1
    remainingPart = remainingPart - gfRule1
    remainingPart = makeFrac(remainingPart)
    console.log(`remainingForSiblings: ${remainingPart.display()}`)
    // totalFemales = parseInt(counterMale) + parseInt(counterFemale)
    // console.log(`totalFemales: ${totalFemales}`)
    // if (totalFemales === 0 || totalFemales == 0) {break}
    calculatePerAsbaSiblingPart()

    // Now calculates the remaining brother(s) and sister(s) part.
    
    for ( let i = 0; i < selectedAsbaatArr.length; i++ ) {
        if ( selectedAsbaatArr[i][3] === rBrotherName ) {
                selectedAsbaatArr[i][1] = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
        } else if ( selectedAsbaatArr[i][3] === rSisterName ) {
            selectedAsbaatArr[i][1] = perAsbaSiblingPart
        }		
    }

		

	// }	
}

// This function will solve the aqdariya problem.
function aqdariyaMethod() {

    console.log(`%c Special Case (Aqdariya Problem) For Shaafi And Maliki!`, "color: black; font-size: 12px; font-weight: bold;") //

    /*
        ALGORITHM:
        ==========

        *	Collect all ZAF
        * 	Collect all Asbaat
        *	Combine them
        *	Assign values to them according to special case
            *	Husband = 1/2
            *	Mother = 2
            *	Real Sister = 4/3
            *	Grand Father = 8/3
        *	Calculate LCM
        *	Call the solveAsbaat function
    */

    // All Available ZAF and All Available Asbaat are combined already
    // Now Assign Parts to them according to special case

    // For Husbamd
    const hRow = selectedRelativesArr.findIndex(row => row.includes(husbandName))
    selectedRelativesArr[hRow][1] = new Frac(3, 1)

    // For Mother
    const mRow = selectedRelativesArr.findIndex(row => row.includes(motherName))
    selectedRelativesArr[mRow][1] = new Frac(2, 1)

    // For Real Sister
    const rSisRow = selectedRelativesArr.findIndex(row => row.includes(rSisterName))
    selectedRelativesArr[rSisRow][1] = new Frac(4, 3)

    // For Grand Father
    const gfRow = selectedRelativesArr.findIndex(row => row.includes(gfName))
    selectedRelativesArr[gfRow][1] = new Frac(8, 3)

    // to check new assigned values
    console.log(`New Values Are:`)
    display(selectedRelativesArr)
    
}