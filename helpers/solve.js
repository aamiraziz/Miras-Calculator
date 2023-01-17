/*
	* This file contains the functions which solves the problem.
	* All necessary data in the form of array is given to function in this file.
	* This function will perform computation and stores the result in output array
	* Khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/

// function solveZAF(zaweAlFaroozArr) {
// function solveZAF() {
    	
// 		zaweAlFarooz1stLCM = nerdamer(`lcm(${zaweAlFaroozDenominatorArr})`) // First LCM
// 		console.log(`zaweAlFarooz1stLCM = ${zaweAlFarooz1stLCM}`)
// 		// console.log(`secondLCM = ${secondLCM}`)
	
// 		if(!secondLCM) {			
			
// 			for (let i = 0; i < selectedZaweAlFaroozArr.length; i++) {
// 				// Assign 2D array to a new array
// 				// Array       =	Name, Value, Part * LCM
// 				outputArray[i] = [selectedZaweAlFaroozArr[i][3], selectedZaweAlFaroozArr[i][0], selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM]
// 				outputParts += selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM
// 			}

// 		} else {
// 			// this loop will fill the array of numbers required for the second LCM
// 			for (let i = 0; i < selectedZaweAlFaroozArr.length; i++) {

// 				tempNumerator = parseInt(selectedZaweAlFaroozArr[i][1].numerator() * zaweAlFarooz1stLCM)
// 				tempDenominator = parseInt(selectedZaweAlFaroozArr[i][1].denominator() * selectedZaweAlFaroozArr[i][0])
// 				// zaweAlFarooz2ndLCMArr[i] = new Frac(selectedZaweAlFaroozArr[i][1].numerator() * zaweAlFarooz1stLCM, selectedZaweAlFaroozArr[i][1].denominator() * selectedZaweAlFaroozArr[i][0])
// 				zaweAlFarooz2ndLCMArr[i] = new Frac(tempNumerator, tempDenominator)	// same as above line
// 				zaweAlFarooz2ndLCMArr[i] = zaweAlFarooz2ndLCMArr[i].denominator()

// 				// console.log(`zaweAlFarooz2ndLCMArr[i]: ${zaweAlFarooz2ndLCMArr[i]}`)
				
// 			}

// 			zaweAlFarooz2ndLCM = nerdamer(`lcm(${zaweAlFarooz2ndLCMArr})`)	// calculates the second LCM
// 			// console.log(`zaweAlFarooz2ndLCMArr: ${zaweAlFarooz2ndLCMArr}`)
// 			// console.log(`zaweAlFarooz2ndLCM = ${zaweAlFarooz2ndLCM}`)
			
// 			for (let i = 0; i < selectedZaweAlFaroozArr.length; i++) {
// 				// Assign 2D array to a new array
// 				// Array       =	Name, Value, ( Per Head = (Part * 1stLCM * 2ndLCM / value) )
// 				outputArray[i] = [selectedZaweAlFaroozArr[i][3], selectedZaweAlFaroozArr[i][0], 
// 				(( selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM * zaweAlFarooz2ndLCM ) / selectedZaweAlFaroozArr[i][0])]
// 				outputParts += (( selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM ) * zaweAlFarooz2ndLCM)
// 			}			
// 		}
// }

function solve(anyArr, LCM1, LCM2, LCM2Arr) {

    let myArr = anyArr

	if(!secondLCM) {			
			
		for (let i = 0; i < myArr.length; i++) {
			// Assign 2D array to a new array
			// Array       =	Name, Value, Part * LCM
			outputArray[i] = [myArr[i][3], myArr[i][0], myArr[i][1] * LCM1]
			outputParts += myArr[i][1] * LCM1
		}

	} else {
		// this loop will fill the array of numbers required for the second LCM
		for (let i = 0; i < myArr.length; i++) {

			tempNumerator = parseInt(myArr[i][1].numerator() * LCM1)
			tempDenominator = parseInt(myArr[i][1].denominator() * myArr[i][0])
			// LCM2Arr[i] = new Frac(myArr[i][1].numerator() * LCM1, myArr[i][1].denominator() * myArr[i][0])
			LCM2Arr[i] = new Frac(tempNumerator, tempDenominator)	// same as above line
			LCM2Arr[i] = LCM2Arr[i].denominator()

			// console.log(`LCM2Arr[i]: ${LCM2Arr[i]}`)
			
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


function solveAsbaat(anyArr, LCM1) {

    let myArr = anyArr
	outputParts = 0

	for (let i = 0; i < myArr.length; i++) {
		// Assign 2D array to a new array
		// Array       =	Name, Value, Part * LCM
		outputArray[i] = [myArr[i][3], myArr[i][0], ( (myArr[i][1] * LCM1) / myArr[i][0]) ]
		outputParts += myArr[i][1] * LCM1

		console.log(`myArr.length : ${myArr.length}`)
		console.log(`outputParts : ${outputParts}`)
		console.log(`outputArray : ${outputArray}`)
	}
}