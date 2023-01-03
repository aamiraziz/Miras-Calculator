/*
	* This file contains the functions which solves the problem.
	* All necessary data in the form of array is given to function in this file.
	* This function will perform computation and stores the result in output array
	* Khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/

function solveZAF(zaweAlFaroozArr) {

    	// Put only the available relatives in zaweAlFaroozArr array to selectedZaweAlFaroozArr array
		for ( let i = 0, z = 0; z < zaweAlFaroozArr.length; z++ ) {
			if ( zaweAlFaroozArr[z][0] !== 0 && zaweAlFaroozArr[z][1] !== zero ) {

				selectedZaweAlFaroozArr[i] = zaweAlFaroozArr[z]
				zaweAlFaroozDenominatorArr[i] = parseInt(selectedZaweAlFaroozArr[i][1].denominator())
				console.log(`zaweAlFaroozDenominatorArr[${i}] = ${zaweAlFaroozDenominatorArr[i]}`)

				// check for second LCM
				if ( selectedZaweAlFaroozArr[i][0] > 1) {
					secondLCM = true
				}

				i++
			} 
		}

		
		zaweAlFarooz1stLCM = nerdamer(`lcm(${zaweAlFaroozDenominatorArr})`) // First LCM
		console.log(`zaweAlFarooz1stLCM = ${zaweAlFarooz1stLCM}`)
		console.log(`secondLCM = ${secondLCM}`)

		
		if(!secondLCM) {			
			
			for (let i = 0; i < selectedZaweAlFaroozArr.length; i++) {
				// Assign 2D array to a new array
				// Array       =	Name, Value, Part * LCM
				outputArray[i] = [selectedZaweAlFaroozArr[i][2], selectedZaweAlFaroozArr[i][0], selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM]
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
				outputArray[i] = [selectedZaweAlFaroozArr[i][2], selectedZaweAlFaroozArr[i][0], 
				(( selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM * zaweAlFarooz2ndLCM ) / selectedZaweAlFaroozArr[i][0])]
				outputParts += (( selectedZaweAlFaroozArr[i][1] * zaweAlFarooz1stLCM ) * zaweAlFarooz2ndLCM)
			}			
		}
}