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

			// console.log(`selectedAsbaatArr: ${selectedAsbaatArr}`)
			// console.log(`selectedRelativesArr: ${selectedRelativesArr}`)
	} else {
		selectedRelativesArr = selectedZaweAlFaroozArr.concat(selectedAsbaatArr)
	}

	console.log(`selectedRelativesArr: ${selectedRelativesArr}`)
	
}

// calculates the ZAF and ASBAAT combined array LCM
function allRelativesLCM() {

	selectedRelativesDenominatorArr = filterDenominators(selectedRelativesArr)
	console.log(`selectedRelativesDenominatorArr: ${selectedRelativesDenominatorArr}`)
	console.log(`selectedRelativesDenominatorArr.length: ${selectedRelativesDenominatorArr.length}`)

	if (selectedRelativesDenominatorArr.length === 1) {
		selectedRelatives1stLCM = selectedRelativesDenominatorArr	 // First LCM
	} else {
		selectedRelatives1stLCM = nerdamer(`lcm(${selectedRelativesDenominatorArr})`) // First LCM
	}

}


function solveZAFandAsbaat() {

	// if ( flag3 ) {
	// 	selectedZaweAlFaroozArr.length = 0
	// 	console.log(`selectedZaweAlFaroozArr.length (when this array is empty before IF): ${selectedZaweAlFaroozArr.length}`)
	// }

	ZAFNotFound()
	
	if ( selectedAsbaatArr.length === 1 /* && remainingPart !== 1 */) {

		if ( flag1 === flag2 ) {
			let remaining
			// assign the remaining part in ZAF array in which asba part is true
			for ( let i = 0; i < selectedZaweAlFaroozArr.length; i++ ) {
				if ( selectedZaweAlFaroozArr[i][2]) {
					console.log(`The Part of ${selectedZaweAlFaroozArr[i][3]} is 
					${selectedZaweAlFaroozArr[i][1].solvedDisplay()} + ${remainingPart.solvedDisplay()} = `)
					
					remaining = selectedZaweAlFaroozArr[i][1] + remainingPart

					remaining = new Fraction(remaining)
					const myString = remaining.toFraction()
					let myFrac = myString.split('/')
					remaining = new Frac(parseInt(myFrac[0]), parseInt(myFrac[1]))

					selectedZaweAlFaroozArr[i][1] = remaining

					console.log(`selectedZaweAlFaroozArr[i][1]: ${selectedZaweAlFaroozArr[i][1]}`)
				}
			}
		} else if ( flag3 ) {
			selectedAsbaatArr[0][1] = new Frac(remainingPart.numerator(), remainingPart.denominator())
			console.log(`selectedAsbaatArr[0][1] (ifelse) [in Absence of ZAF]: ${selectedAsbaatArr[0][1].display()}`)
		} else {
			selectedAsbaatArr[0][1] = new Frac(remainingPart.numerator(), remainingPart.denominator() * selectedAsbaatArr[0][0])
			console.log(`selectedAsbaatArr[0][1] (ifelse)  [in presensce of ZAF]: ${selectedAsbaatArr[0][1].display()}, 
							${new Frac(remainingPart.numerator(), remainingPart.denominator() * selectedAsbaatArr[0][0])}`)
			console.log(`FLAG3: ${flag3}`)
		}
	} else {
		let totalFemales = parseInt(counterMale) + parseInt(counterFemale)
		let temp = remainingPart.denominator() * totalFemales
		perAsbaSiblingPart = new Frac(remainingPart.numerator(), temp)
		console.log(`totalFemales : ${totalFemales}`)						// Test Statement
		console.log(`typeof(totalFemales) : ${typeof(totalFemales)}`)		// Test Statement
		console.log(`perAsbaSiblingPart: ${perAsbaSiblingPart.display()}`)	// Test Statement

		// use FOR loop to assign values to array and multiply value by 2 on last index
		for ( let i = 0; i < selectedAsbaatArr.length; i++ ) {
			if ( i === selectedAsbaatArr.length -1 ) {
				selectedAsbaatArr[i][1] = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
			} else {
				selectedAsbaatArr[i][1] = perAsbaSiblingPart
			}		
		}
	}

	// combines zawe al farooz and asbaat
	combineZAFandAsbaat()
	// if (flag1 === flag2) {
	// 	selectedRelativesArr = selectedZaweAlFaroozArr
	// 	display(selectedRelativesArr) // test function
	// } else if (selectedZaweAlFaroozArr.length === 0) {
	// 	console.log(`selectedZaweAlFaroozArr.length = 0 (when this array is empty): ${selectedZaweAlFaroozArr.length}`)
	// 	// if (selectedZaweAlFaroozArr.length === 0) {
	// 		selectedRelativesArr = selectedAsbaatArr

	// 		// console.log(`selectedAsbaatArr: ${selectedAsbaatArr}`)
	// 		// console.log(`selectedRelativesArr: ${selectedRelativesArr}`)
	// } else {
	// 	selectedRelativesArr = selectedZaweAlFaroozArr.concat(selectedAsbaatArr)
	// }
	
	display(selectedRelativesArr) // test function
	allRelativesLCM()
	// console.log(`selectedZaweAlFaroozArr (when this array is empty After Display Function): ${selectedZaweAlFaroozArr}`)
	// }		

	// selectedRelativesDenominatorArr = filterDenominators(selectedRelativesArr)
	// console.log(`selectedRelativesDenominatorArr: ${selectedRelativesDenominatorArr}`)
	// console.log(`selectedRelativesDenominatorArr.length: ${selectedRelativesDenominatorArr.length}`)

	// if (selectedRelativesDenominatorArr.length === 1) {
	// 	selectedRelatives1stLCM = selectedRelativesDenominatorArr	 // First LCM
	// } else {
	// 	selectedRelatives1stLCM = nerdamer(`lcm(${selectedRelativesDenominatorArr})`) // First LCM
	// }
	
	console.log(`selectedRelatives1stLCM = ${selectedRelatives1stLCM}`)

	solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)

}

/*

function solveZAF(zaweAlFaroozArr) {
function solveZAF() {
    	
		zaweAlFarooz1stLCM = nerdamer(`lcm(${zaweAlFaroozDenominatorArr})`) // First LCM
		console.log(`zaweAlFarooz1stLCM = ${zaweAlFarooz1stLCM}`)
		// console.log(`secondLCM = ${secondLCM}`)
	
		if(!secondLCM) {			
			
			for (let i = 0; i < selectedZaweAlFaroozArr.length; i++) {
				// Assign 2D array to a new array
				// Array       =	Name, Value, Part * LCM
				outputArray[i] = [selectedZaweAlFaroozArr[i][3], selectedZaweAlFaroozArr[i][0], selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM]
				outputParts += selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM
			}

		} else {
			// this loop will fill the array of numbers required for the second LCM
			for (let i = 0; i < selectedZaweAlFaroozArr.length; i++) {

				tempNumerator = parseInt(selectedZaweAlFaroozArr[i][1].numerator() * zaweAlFarooz1stLCM)
				tempDenominator = parseInt(selectedZaweAlFaroozArr[i][1].denominator() * selectedZaweAlFaroozArr[i][0])
				// zaweAlFarooz2ndLCMArr[i] = new Frac(selectedZaweAlFaroozArr[i][1].numerator() * zaweAlFarooz1stLCM, selectedZaweAlFaroozArr[i][1].denominator() * selectedZaweAlFaroozArr[i][0])
				zaweAlFarooz2ndLCMArr[i] = new Frac(tempNumerator, tempDenominator)	// same as above line
				zaweAlFarooz2ndLCMArr[i] = zaweAlFarooz2ndLCMArr[i].denominator()

				// console.log(`zaweAlFarooz2ndLCMArr[i]: ${zaweAlFarooz2ndLCMArr[i]}`)
				
			}

			zaweAlFarooz2ndLCM = nerdamer(`lcm(${zaweAlFarooz2ndLCMArr})`)	// calculates the second LCM
			// console.log(`zaweAlFarooz2ndLCMArr: ${zaweAlFarooz2ndLCMArr}`)
			// console.log(`zaweAlFarooz2ndLCM = ${zaweAlFarooz2ndLCM}`)
			
			for (let i = 0; i < selectedZaweAlFaroozArr.length; i++) {
				// Assign 2D array to a new array
				// Array       =	Name, Value, ( Per Head = (Part * 1stLCM * 2ndLCM / value) )
				outputArray[i] = [selectedZaweAlFaroozArr[i][3], selectedZaweAlFaroozArr[i][0], 
				(( selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM * zaweAlFarooz2ndLCM ) / selectedZaweAlFaroozArr[i][0])]
				outputParts += (( selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM ) * zaweAlFarooz2ndLCM)
			}			
		}
}

*/