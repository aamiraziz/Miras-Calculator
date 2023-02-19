/*
	* This file contains the functions which solves the problem.
	* All necessary data in the form of array is given to function in this file.
	* This function will perform computation and stores the result in output array
	* Khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/

function solveZAF(anyArr, LCM1, LCM2, LCM2Arr) {

    let myArr = anyArr

	if(!secondLCM) {			
			
		for (let i = 0; i < myArr.length; i++) {
			// Assign 2D array to a new array
			// Array       =	Name, Value, Part * LCM
			outputArray[i] = [myArr[i][3], myArr[i][0], myArr[i][1] * LCM1]
			outputParts += myArr[i][1] * myArr[i][0] * LCM1
		}

	} else {
		// this loop will fill the array of numbers required for the second LCM
		for (let i = 0; i < myArr.length; i++) {

			tempNumerator = parseInt(myArr[i][1].numerator() * LCM1)
			tempDenominator = parseInt(myArr[i][1].denominator() * myArr[i][0])
			// LCM2Arr[i] = new Frac(myArr[i][1].numerator() * LCM1, myArr[i][1].denominator() * myArr[i][0])
			LCM2Arr[i] = new Frac(tempNumerator, tempDenominator)	// same as above line
			LCM2Arr[i] = LCM2Arr[i].denominator()

			console.log(`LCM2Arr[i]: ${LCM2Arr[i]}`)
			
		}

		LCM2 = nerdamer(`lcm(${LCM2Arr})`)	// calculates the second LCM
		console.log(`LCM2Arr: ${LCM2Arr}`)
		console.log(`LCM2 = ${LCM2}`)
		
		for (let i = 0; i < myArr.length; i++) {
			// Assign 2D array to a new array
			// Array       =	Name, Value, ( Per Head = (Part * 1stLCM * 2ndLCM / value) )
			outputArray[i] = [myArr[i][3], myArr[i][0], 
			(( myArr[i][1] * LCM1 * LCM2 ) / myArr[i][0])]
			outputParts += (( myArr[i][1] * LCM1 ) * LCM2)
		}			
	}

}


function solveAsbaat(anyArr, LCM) {

    let myArr = anyArr
	outputParts = 0

	for (let i = 0; i < myArr.length; i++) {
		// Assign 2D array to a new array
		// Array       =	Name, Value, Part * LCM
		outputArray[i] = [myArr[i][3], myArr[i][0], ( myArr[i][1] * LCM) ]
		outputParts += outputArray[i][1] * outputArray[i][2]
	}
	
	console.log(`myArr.length : ${myArr.length}`)
	console.log(`outputParts : ${outputParts}`)
	console.table(`outputArray : ${outputArray}`)
	
}

// makes ZAF array length to zero when there is no ZAF
function ZAFNotFound() {
	if ( flag3 ) {
		selectedZaweAlFaroozArr.length = 0
		console.log(`selectedZaweAlFaroozArr.length (when this array is empty before IF): ${selectedZaweAlFaroozArr.length}`)
	}
}

// This function will combine the ZAF andAsbaat array
function combineZAFandAsbaat() {
	if (flag1 === flag2) {
		selectedRelativesArr = selectedZaweAlFaroozArr
		display(selectedRelativesArr) // test function
	} else if (selectedZaweAlFaroozArr.length === 0) {
		console.log(`selectedZaweAlFaroozArr.length = 0 (when this array is empty): ${selectedZaweAlFaroozArr.length}`)
			selectedRelativesArr = selectedAsbaatArr
	} else {
		selectedRelativesArr = selectedZaweAlFaroozArr.concat(selectedAsbaatArr)
	}

	console.log(`selectedRelativesArr: ${selectedRelativesArr}`)
	
}

// calculates the ZAF and ASBAAT combined array LCM
function allRelativesLCM() {

	selectedRelativesDenominatorArr = filterDenominators(selectedRelativesArr)

	if (selectedRelativesDenominatorArr.length === 1) {
		selectedRelatives1stLCM = selectedRelativesDenominatorArr	 // First LCM
	} else {
		selectedRelatives1stLCM = nerdamer(`lcm(${selectedRelativesDenominatorArr})`) // First LCM
	}
	
	console.log(`selectedRelativesDenominatorArr: ${selectedRelativesDenominatorArr}`)
	console.log(`selectedRelativesDenominatorArr.length: ${selectedRelativesDenominatorArr.length}`)
	console.log(`selectedRelatives1stLCM: ${selectedRelatives1stLCM}`)

}


function solveZAFandAsbaat() {

	ZAFNotFound()	// This will makes ZAF array length to zero when there is no ZAF

	if ( selectedAsbaatArr.length === 1 /* && remainingPart !== 1 */) {

		// these flag will use to find the existance of father/grandFather in Selected ZAF and Selected Asbaat
		if ( flag1 === flag2 ) {
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

					console.log(`selectedZaweAlFaroozArr[i][1]: ${selectedZaweAlFaroozArr[i][1]}`)
				}
			}
		} else if ( flag3 && (imam === "hanfi" || imam === "hanbali") ) { // this flag will become true when ZAF array is empty
			// Here Imam condition is in doubt --- Please Confirm it through TESTING
			selectedAsbaatArr[0][1] = new Frac(remainingPart.numerator(), remainingPart.denominator())
			console.log(`selectedAsbaatArr[0][1] (ifelse) [in Absence of ZAF]: ${selectedAsbaatArr[0][1].display()}`)
		} else {
			selectedAsbaatArr[0][1] = new Frac(remainingPart.numerator(), remainingPart.denominator() * selectedAsbaatArr[0][0])
			console.log(`selectedAsbaatArr[0][1] (ifelse)  [in presensce of ZAF]: ${selectedAsbaatArr[0][1].display()}, 
							${new Frac(remainingPart.numerator(), remainingPart.denominator() * selectedAsbaatArr[0][0])}`)
			console.log(`FLAG3: ${flag3}`)
		}
	} else if ( !((grandFatherVal > 0) && (imam === "shaafi" || imam === "maliki")) ) { 
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

	} else if (imam === "shaafi" || imam === "maliki") {

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
		gfRule1 = Math.max(gfRule1.valueOf(),gfRule2.valueOf(),gfRule3.valueOf())

		// makeFrac function is written in Frac.js file
		// this function will convert the float to Frac.
		gfRule1 = makeFrac(gfRule1)

		// Now Assign the greatest value among all the rules to Grand Father's part.
		const row = selectedAsbaatArr.findIndex(row => row.includes(gfName))
		selectedAsbaatArr[row][1] = gfRule1

		console.log(`gfRule1: ${gfRule1.solvedDisplay()} is the greatest`)
		console.log(`selectedAsbaatArr[${row}][1]: ${selectedAsbaatArr[row][1].solvedDisplay()} is the greatest`)
		console.log(`selectedAsbaatArr[${row}][3]: ${selectedAsbaatArr[row][3]} is the greatest`)
		console.log(`**********************************************`)

		// Now Remove the Paternal Brothers and Sisters
		const pBroRow = selectedAsbaatArr.findIndex(row => row.includes(pBrotherName))
		const pSisRow = selectedAsbaatArr.findIndex(row => row.includes(pSisterName))

		console.log(`pBroRow: ${pBroRow}`)

		if ( pBroRow === -1 ) {
			counterMale = counterMale - 2 * (selectedAsbaatArr[row][0])
		} else {
			counterMale = counterMale - 2 * (selectedAsbaatArr[pBroRow][0] + selectedAsbaatArr[row][0])
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
		calculatePerAsbaSiblingPart()

		// Now calculates the remaining brother(s) and sister(s) part.
		
		for ( let i = 0; i < selectedAsbaatArr.length; i++ ) {
			if ( selectedAsbaatArr[i][3] === rBrotherName ) {
					selectedAsbaatArr[i][1] = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
			} else if ( selectedAsbaatArr[i][3] === rSisterName ) {
				selectedAsbaatArr[i][1] = perAsbaSiblingPart
			}		
		}

		

	}
	

	// combines zawe al farooz and asbaat
	// on line 81 of same file
	combineZAFandAsbaat()
	
	display(selectedRelativesArr) // test function
	allRelativesLCM()
	
	console.log(`selectedRelatives1stLCM = ${selectedRelatives1stLCM}`)

	solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)

}