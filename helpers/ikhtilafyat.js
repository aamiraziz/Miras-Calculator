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
            * RULE 3: Calculate the one sixth (1/6) of total
        * Assign the the Greatest value to Grand Father's part
        * Remove Paternal Brothers and sisters
        * Calculate remaining part for siblings i.e remainingPart - GrandFather's part
            * remainingForSiblings = remainingPart - gfRule1
        * Distribute the remaining part among the Real Brothers and sisters.

    */
    
    // * Calculate per Asba Sibling part which is equal to every female part
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
                    gfRule1.set(selectedAsbaatArr[i][1].numerator(), remainingPart.denominator() * totalFemales)}
        } else {
            selectedAsbaatArr[i][1] = perAsbaSiblingPart
        }		
    }

    console.log(`**********************************************`)
    console.log(`gfRule1: ${gfRule1.display()}, gfRule2: ${gfRule2.display()}, gfRule3: ${gfRule3.display()}`)

    // gfRule1 will now contain the maximum value among all the rules.
    gfRule1 = Math.max(2 * parseFloat(gfRule1.valueOf()), parseFloat(gfRule2.valueOf()), parseFloat(gfRule3.valueOf()))
    
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

// this function will do RAD operation only for Imam === hanbali
function hanbaliRad() {

    console.log(`Inside hanbaliRad Function`)

    /*
        Rule 1:
        ============

        * In presenece of Daughter, (sDaughter, ssDaughter and sssDaughter) will not elligble for RAD
        * Similarly in presenece of sDaughter, ssDaughter and sssDaughter will not elligble for RAD
        * Similarly in presenece of ssDaughter, sssDaughter will not elligble for RAD
    */

    if (daughterExistanceHR()) {
    } else if (sDaughterExistanceHR()) {
    } else if (ssDaughterExistanceHR()) {}
  

    /*
        Rule 2:
        ============

        * In Presence of Mother, Maternal Brother(s) and Sister(s) are not elligible for RAD
    */
   if(motherExistanceHR()) {}

   /*
        Rule 3:
        ============

        * In Presence of Real Sister, Maternal Sister(s) and Paternal Sister(s) are not elligible for RAD
    */
   if (rSisterExistanceHR()) {}


    /*
        Rule 4:
        ============

        * In Presence of any ZAF, Grand Mother is not elligible for RAD
    */
   if (ZAFExistanceHR()) {}


}

// check daughter existance in selectedRelativesArr
// if exists then it will remove sDaughter, ssDaughter or sssDaughter
function daughterExistanceHR() {

    const Daughter = selectedRelativesArr.findIndex(Daughter => Daughter.includes(daughterName))
    const SD = selectedRelativesArr.findIndex(SD => SD.includes(sDaughterName))
    const SSD = selectedRelativesArr.findIndex(SSD => SSD.includes(ssDaughterName))
    const SSSD = selectedRelativesArr.findIndex(SSSD => SSSD.includes(sssDaughterName))

    // console.log(`${selectedRelativesArr.findIndex(Daughter => Daughter.includes(sDaughterName))}`)

    if ( Daughter === -1 ) {
        return false
    }

    if ( selectedRelativesArr.length > parseInt(Daughter + 1)) {

        // if SD Exists
        if (selectedRelativesArr[Daughter + 1][3] === sDaughterName ) {

            hanbaliRadArr.push( selectedRelativesArr[SD] )  // First push the SD element
            selectedRelativesArr.splice(SD, 1)              // Then remove the SD element from array
        
        } else if (selectedRelativesArr[Daughter + 1][3] === ssDaughterName ) { // if SSD Exists    

            hanbaliRadArr.push( selectedRelativesArr[SSD] )  // First push the SSD element
            selectedRelativesArr.splice(SSD, 1)              // Then remove the SSD element from array
        
        } else if (selectedRelativesArr[Daughter + 1][3] === sssDaughterName) { // if SSSD Exists    

            hanbaliRadArr.push( selectedRelativesArr[SSSD] )  // First push the SSSD element
            selectedRelativesArr.splice(SSSD, 1)              // Then remove the SSSD element from array
        
    }

}

    // console.log(`Removed From RAD: ${display(hanbaliRadArr)}`)
    console.log(`Removed From RAD: ${hanbaliRadArr}`)

    return true

}

// check ssDaughter existance in selectedRelativesArr
// if exists then it will remove sssDaughter
function sDaughterExistanceHR() {

    const SD = selectedRelativesArr.findIndex(SD => SD.includes(sDaughterName))

    if ( SD === -1 ) {
        return false
    }

    if (selectedRelativesArr[SD][3] === sDaughterName && ( parseInt(SD + 1) <= selectedRelativesArr.length )  && ( 
        selectedRelativesArr[SD + 1][3] === ssDaughterName ||
        selectedRelativesArr[SD + 1][3] === sssDaughterName) ) {
        
        hanbaliRadArr.push( selectedRelativesArr[SD + 1] )  // First push the required element
        selectedRelativesArr.splice(SD + 1, 1)              // Then remove the required element from array
        
        console.log(`Removed From RAD: ${hanbaliRadArr}`)
    }

    return true

}

// check sDaughter existance in selectedRelativesArr
// if exists then it will remove ssDaughter or sssDaughter
function ssDaughterExistanceHR() {

    const SSD = selectedRelativesArr.findIndex(SSD => SSD.includes(ssDaughterName))

    if ( SSD === -1 ) {
        return false
    }

    if (selectedRelativesArr[SSD][3] === ssDaughterName && ( parseInt(row + 1) <= selectedRelativesArr.length )  && ( 
        selectedRelativesArr[SSD + 1][3] === sssDaughterName) ) {
        
        hanbaliRadArr.push( selectedRelativesArr[SSD + 1] )  // First push the required element
        selectedRelativesArr.splice(SSD + 1, 1)              // Then remove the required element from array
        
        console.log(`Removed From RAD: ${hanbaliRadArr}`)
    }

    return true

}

// This function will check whether Mother exists or not
// This function will take action accordingly
// In Presence of Mother, Maternal Brother(s) and Sister(s) are not elligible for RAD

function motherExistanceHR() {

    const Mother = selectedRelativesArr.findIndex(Mother => Mother.includes(motherName))
    const MBS = selectedRelativesArr.findIndex(MBS => MBS.includes(mBroSisName))

    if ( Mother === -1 ) {
        return false
    }
   
    if ( (selectedRelativesArr[Mother][3] === motherName) && MBS !== -1) {

        // hanbaliRadArr = selectedRelativesArr.splice(r, 1)
        hanbaliRadArr.push( selectedRelativesArr[MBS] )  // First push the required element
        selectedRelativesArr.splice(MBS, 1)              // Then remove the required element from array
        
        console.log(`Removed From RAD: ${hanbaliRadArr}`)

    }

    return true

}

// This function will check whether Real Sister exists or not
// This function will take action accordingly (Maternal Brother(s))
// In Presence of Real Sister, Maternal Sister(s) and Paternal Sister(s) are not elligible for RAD

function rSisterExistanceHR() {

    const RealSister = selectedRelativesArr.findIndex(RealSister => RealSister.includes(rSisterName))
    const PaternalSister = selectedRelativesArr.findIndex(PaternalSister => PaternalSister.includes(pSisterName)) 

    if ( RealSister === -1 ) {
        return false
    }

    // makes paternal sister not elligible for RAD
    if ( PaternalSister !== -1 ) {

        hanbaliRadArr.push( selectedRelativesArr[PaternalSister] )  // First push the required element
        selectedRelativesArr.splice(PaternalSister, 1)              // Then remove the required element from array
        
        console.log(`Paternal Sister Removed From RAD: ${hanbaliRadArr}`)

    }

    // finds Maternal sister's index in array 
    // can not declare it above. It will create problem especially when Paternal sister exists
    const MaternalSister = selectedRelativesArr.findIndex(MaternalSister => MaternalSister.includes(mBroSisName))

    // Makes Maternal Brother(s) / Sister(s) not elligible for RAD
    if ( MaternalSister !== -1 ) {

        hanbaliRadArr.push( selectedRelativesArr[MaternalSister] )  // First push the required element
        selectedRelativesArr.splice(MaternalSister, 1)              // Then remove the required element from array
        
        console.log(`Maternal Sister Removed From RAD: ${hanbaliRadArr}`)

    }

    return true

}

// This function will check whether Real Sister exists or not
// This function will take action accordingly (Grand Mother(s))
// In Presence of any ZAF, Grand Mother is not elligible for RAD
function ZAFExistanceHR(){

    const anyZAF = selectedRelativesArr.findIndex(anyZAF => anyZAF.includes(false))
    const GrandMother = selectedRelativesArr.findIndex(GrandMother => GrandMother.includes(gmName))

    // if ZAF Exists and Grand Mother also exists
    // then Grand Mother is not elligible for RAD
    if (GrandMother !== -1 && selectedRelativesArr[anyZAF][3] !== gmName) {

        // hanbaliRadArr = selectedRelativesArr.splice(GrandMother, 1)
        hanbaliRadArr.push( selectedRelativesArr[GrandMother] )  // First push the required element
        selectedRelativesArr.splice(GrandMother, 1)              // Then remove the required element from array
        console.log(`Removed From RAD: ${hanbaliRadArr}`)

        return true
    }

    // if there is no ZAF
    return false

}