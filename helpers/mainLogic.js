/*
	* This file contains the MAIN FUNCTION 
    * Which contains the main logic to solve the problem.
	* This function will perform computation and stores the result in output array
	* Khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on Feburary 08, 2023
*/

function mainLogic() {

	// =============================================================================
	// check to solve the problem 
	if (parseFloat(zaweAlFaroozSum) === 1 || parseFloat(zaweAlFaroozSum) > 1) {
		/*
			* Solve zawe al farooz and these are their parts
			* if zaweAlFaroozSum is greater than 1 or equal to 1 then solve the zaweAlFaroozSum problem and the parts are their parts
			* In Solve.js, solveZAF is the function to calculate the solution of only zaweAlFarooz problem.
		*/
		console.log(`Solve zawe al farooz and these are their parts`) // test statement

		selectedZaweAlFaroozArr = filterSelectedZaweAlFarooz()
		zaweAlFaroozDenominatorArr = filterDenominators(selectedZaweAlFaroozArr)

		zaweAlFarooz1stLCM = nerdamer(`lcm(${zaweAlFaroozDenominatorArr})`) // First LCM
		console.log(`zaweAlFarooz1stLCM = ${zaweAlFarooz1stLCM}`)

		secondLCM = checkForSecondLCM(selectedZaweAlFaroozArr)
		console.log(`secondLCM = ${secondLCM}`)

		solveZAF(selectedZaweAlFaroozArr, zaweAlFarooz1stLCM, zaweAlFarooz2ndLCM, zaweAlFarooz2ndLCMArr)
		
	} else if (parseFloat(zaweAlFaroozSum) < 1 && asbatExists) {
		// if zaweAlFaroozSum is Less than 1 and asbat are present in the first page of interface, 
		// then first solve the zaweAlFarooz problem and then asbat problem
		console.log(`calculate zawe al farooz and then asbat`)

		/*
			ALGORITHM:
			==========
			
			* Find ZaweAlFarooz Relatives and store it in "selectedZaweAlFaroozArr" Array
			* Find Remaining Part from ZaweAlFarooz Relatives
			* Find Asbaat Relatives and store it in "selectedAsbaatArr" Array
			* if selectedAsbaatArr.length === 1
				* if Asbaat is already present in ZAF (Only Father and GrandFather)
					* Add Asbaat part in that particular Zawe al farooz
				* else
					* selectedAsbaatArr[0][1] = remainingPart 
			* if selectedAsbaatArr.length > 1
				* perAsbaSiblingPart = remainingPart / totalFemales
				* femaleAsbaPart = perAsbaSiblingPart
				* find maleAsba (everytime at the last index of the array)
					* maleAsbaPart = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
			* find LCM of Parts in selectedRelativesArr
			* Multiply LCM with parts of selectedRelativesArr // Answer
		*/


		// available Zawe al farooz Relatives
		selectedZaweAlFaroozArr = filterSelectedZaweAlFaroozPP(perZAFSiblingPart)
		
		// calculate the remaining part from zawe al farooz
		remainingPart = calculateRemainingPart()

		console.log(`remainingPart: ${remainingPart.valueOf()}`)
		console.log(`typeof(remainingPart): ${typeof(remainingPart.valueOf())}`)

		// available Asbaat {Number of relatives, Part, flag(true/false), Name of relative}
		selectedAsbaatArr = filterSelectedAsbaat()

		// if ( (!zaweAlFaroozArr.find(element => element[0] > 0)) ) {

		solveZAFandAsbaat()
		
	} else if (parseFloat(zaweAlFaroozSum) < 1 && !asbatExists) {
		// if zaweAlFaroozSum is Less than 1 and asbat is not present in the first page of interface,
		// then go the second page of interface and select the asbat (from chart).

		main.style.display = 'none'
		asbaatChart.style.display = 'block'

		console.log(`GoTo Asbat Chart`)

		const myFirstPromise = new Promise((resolve, reject) => {
			// We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
			// In this example, we use setTimeout(...) to simulate async code.
			// In reality, you will probably be using something like XHR or an HTML API.
			setInterval(() => {

				if (asbaFromChart !== undefined) {
					resolve("Success! and asbaFromChart is: " + asbaFromChart) // Yay! Everything went well!
				}

			}, 1)
		})
		  
		myFirstPromise.then((successMessage) => {
			// successMessage is whatever we passed in the resolve(...) function above.
			// It doesn't have to be a string, but if it is only a succeed message, it probably will be.
			console.log(`Yay! ${successMessage}`)
		  }, (error) => {
			console.error(error)
		})

		myFirstPromise.then(() => {

			// available Zawe al farooz Relatives
			selectedZaweAlFaroozArr = filterSelectedZaweAlFaroozPP(perZAFSiblingPart)
			
			// calculate the remaining part from zawe al farooz
			remainingPart = calculateRemainingPart()
			ZAFNotFound()	// makes ZAF array length to zero whern there is no ZAF available.
			
			console.log(`remainingPart: ${remainingPart.solvedDisplay()}`)

			/*
				* if asbaFromChart[2] === 0 && selectedZaweAlFaroozArr.length === 0
				* Goto output screen to provide book link because it is Zawe Al Arhaam problem

				* if selectedZaweAlFaroozArr.length !== 0 && asbaFromChart[2] === 0 
				* Implement Rad Method
			*/

			if (asbaFromChart[2] === 0 && selectedZaweAlFaroozArr.length === 0) {
				let bookLink = "This is Zawe Al Arhaam (ذوی الارحام) problem. Please consult the book"
				document.getElementById("main").innerHTML = bookLink
			} else if (selectedZaweAlFaroozArr.length !== 0 && asbaFromChart[2] === 0) {
				console.log(`IMplement Rad (رد) Method`)

				selectedRelativesArr = selectedZaweAlFaroozArr

				if (husbandVal === 0 && wifeVal === 0) {
					
					display(selectedRelativesArr)
					allRelativesLCM()	// LCM of ZAF 
					// Here this function will solve the Rad Problem only for ZAF Nasbi (زوی الفروض نسبی).
					solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)
					outputAllValues()

				} else if (selectedRelativesArr.length === 1 && (husbandVal > 0 || wifeVal > 0)) {
					let bookLink = "IMplement (زوی الارحام) Method with remaining part (other than Husband Or Wife)"
					document.getElementById("main").innerHTML = bookLink

				} else {

					display(selectedRelativesArr)
					console.log(`=============================================================================`)

					// =============================================================================
					// converts per person part back to all persons part
					console.log(`selectedZaweAlFaroozArr.length: ${selectedZaweAlFaroozArr.length}`)
					for ( let i = 0; i < selectedZaweAlFaroozArr.length; i++ ) {

						selectedZaweAlFaroozArr[i][1].set(selectedZaweAlFaroozArr[i][0] * selectedZaweAlFaroozArr[i][1].numerator(), selectedZaweAlFaroozArr[i][1].denominator())

					} 
					// =============================================================================

					/*
						Algortihm:
						==========
						
						* take lcm of Relative Values array elements
							if there number is greater than 1 then we need to multiply our answer with that LCM 
							in the end.
						* remove 1st element i.e ZAF sababi
						* take lcm of remaining array elements
						* store all the numerators
						* Multiply LCM (say selectedRelatives1stLCM) with Numerator and devide it by its denominator of 
								every element and add their sum in sum variable
						* add all its elements and save it in a variable (e.g ratioSum)
						* in selectedRelativesArr every person part should be allNumerators[i]/ratioSum
						* myltiply ratioSum with Denominator of ZAF Sababi and store it in variable (say tempTotalParts)
						* the total parts for ZAFsababi will be tempTotalParts * ZAFSababi PartS (e.g ZAFSababiTotalParts)
						* The remainingTotalParts will be tempTotalParts - ZAFSababiTotalParts
						* Multiply it with every part element in selectedRelativesArr.
						* insert the removed element in start of selectedRelativesArr.

						* Multiply it with relativeCountsLCM 
							(if number of every/any type of relatives is greater than 1)
						* Show Output on Screen.
					*/

					// =============================================================================
					
					console.log(`=============================================================================`)
					//	* take lcm of Relative Values array elements
					let relativeCountsLCM = []
					relativeCountsLCM = filterRelativeCounts(selectedRelativesArr)
					console.log(`relativeCountsLCM Array: ${relativeCountsLCM}`)
					relativeCountsLCM = calculateLCM(relativeCountsLCM)
					console.log(`relativeCountsLCM: ${relativeCountsLCM}`)

					//	* remove 1st element i.e ZAF sababi
					let ZAFsababi = selectedRelativesArr.shift()
					display(selectedRelativesArr)	
					
					//	* take lcm of remaining array elements
					allRelativesLCM()	// LCM of ZAF 

					//	* store all the numerators
					let allNumeratorsLCM = filterNumerators(selectedRelativesArr)
					console.log(`allNumeratorsLCM Array: ${allNumeratorsLCM}`)
					allNumeratorsLCM = calculateLCM(allNumeratorsLCM)
					console.log(`allNumeratorsLCM: ${allNumeratorsLCM}`)

					//	* Multiply LCM (say selectedRelatives1stLCM) with Numerator and devide it by its denominator of 
					// 			every element and add their sum in sum variable
					//	* add all its elements and save it in a variable (e.g ratioSum)

					let ratioSum = 0

					for (let i = 0; i < selectedRelativesArr.length; i++){
						selectedRelativesArr[i][1].set(selectedRelatives1stLCM * selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][1].denominator())

						ratioSum += selectedRelativesArr[i][1].numerator()
					}

					for (let i = 0; i < selectedRelativesArr.length; i++){
						selectedRelativesArr[i][1].set(selectedRelativesArr[i][1].numerator(), ratioSum)
					}
					console.log(`================================================================`)
					console.log(`ratioSum: ${ratioSum}`)
					display(selectedRelativesArr)

					// * myltiply ratioSum with Denominator of ZAF Sababi and store it in variable (say tempTotalParts)
					let tempTotalParts = ratioSum * ZAFsababi[1].denominator()
					console.log(`tempTotalParts: ${tempTotalParts}`)


					// * the total parts for ZAFsababi will be tempTotalParts * ZAFSababi PartS (e.g ZAFSababiTotalParts)
					ZAFsababi[1].set(tempTotalParts * ZAFsababi[1].numerator(), ZAFsababi[0] * ZAFsababi[1].denominator())
					console.log(`TotalParts of ZAFSababi: ${ZAFsababi[1].solvedDisplay()}`)


					// * The remainingTotalParts will be tempTotalParts - ZAFSababiTotalParts
					let remainingTotalParts = parseInt(tempTotalParts - ZAFsababi[1].numerator())
					console.log(`remainingTotalParts: ${remainingTotalParts}`)

					// * Multiply it with every part element in selectedRelativesArr.
					for (let i = 0; i < selectedRelativesArr.length; i++){
						selectedRelativesArr[i][1].set(remainingTotalParts * selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][0] * selectedRelativesArr[i][1].denominator())
					}
					display(selectedRelativesArr)
					console.log(`================================================================`)

					// * insert the removed element in start of selectedRelativesArr.
					selectedRelativesArr.unshift(ZAFsababi)
					display(selectedRelativesArr)
					console.log(`================================================================`)
					
					// * Multiply it with relativeCountsLCM 
					// 		(if number of every/any type of relatives is greater than 1)
					if (relativeCountsLCM > 1) {
						for (let i = 0; i < selectedRelativesArr.length; i++){
							selectedRelativesArr[i][1].set(relativeCountsLCM * selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][1].denominator())
						}

						tempTotalParts *= relativeCountsLCM
					}
					display(selectedRelativesArr)
					console.log(`================================================================`)
					
					outputParts = tempTotalParts
					for (let i = 0; i < selectedRelativesArr.length; i++) {
						outputArray[i] = [selectedRelativesArr[i][3], selectedRelativesArr[i][0], selectedRelativesArr[i][1].valueOf()]
					}

					outputAllValues()

				}
			} else {

				if (flag3) { // if there is no ZAF
					perAsbaSiblingPart = new Frac(1, asbaFromChart[2])		
				} else {
					perAsbaSiblingPart = new Frac(remainingPart.numerator(), remainingPart.denominator() * asbaFromChart[2])
				}
				
				// available Asbaat {Number of relatives, Part = zero, flag(true/false), Name of relative}
				asbaatChartArr = [asbaFromChart[2], perAsbaSiblingPart, true, asbaFromChart[1]]
				console.log(`asbaatChartArr: ${asbaatChartArr[0]}, ${asbaatChartArr[1].display()}, ${asbaatChartArr[2]}, ${asbaatChartArr[3]}`)
	
				// ---------------------------------------------------------------------------------------
				availableRelativesArr.push([asbaFromChart[2], perAsbaSiblingPart, true, asbaFromChart[1]])
				// ---------------------------------------------------------------------------------------
					
				selectedAsbaatArr = filterSelectedAsbaat()
				combineZAFandAsbaat()
				display(selectedRelativesArr) // test function
				allRelativesLCM()
		
				console.log(`selectedRelatives1stLCM = ${selectedRelatives1stLCM}`)
	
				solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)
	
				outputAllValues()

			}
			
		})
		
	} 
	// =============================================================================
}