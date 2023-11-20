/*
	* This file contains the MAIN FUNCTION 
    * Which contains the main logic to solve the problem.
	* This function will perform computation and stores the result in output array
	* Khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on Feburary 08, 2023
*/

/*
	APPLICATION lOGIC:
	==================

	* If this sum (zaweAlFaroozSum) is equal to 1 or greater than 1 then all these parts are the zawe al farooz parts

	* If this sum (zaweAlFaroozSum) is Less than 1 and asbat is/are present in the first page of interface,
		then first solve the zaweAlFarooz problem and then asbat problem

	* If this sum (zaweAlFaroozSum) is Less than 1 and asbat is not present in the first page of interface,
		then go the second page of interface and select the asbat (from chart).

	* If this sum (zaweAlFaroozSum) is less than 1 but asbat are not present in Asbaat Chart then use رد کا طریقہ

	* If only SPOUSE is present OR neither any ZaweAlFarooz nor any Asbaat is present then go to ZaweAlArham
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

		selectedZaweAlFaroozArr = filterZaweAlFarooz()
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

		selectedZaweAlFaroozArr = filterSelectedZaweAlFarooz(perZAFSiblingPart, availableRelativesArr)
			
		// calculate the remaining part from zawe al farooz
		remainingPart = calculateRemainingPart()

		console.log(`%c remainingPart: ${remainingPart.solvedDisplay()}`, 
        			"color: black; font-size: 12px; font-weight: bold;")
		// console.log(`typeof(remainingPart): ${typeof(remainingPart.valueOf())}`)

		// available Asbaat {Number of relatives, Part, flag(true/false), Name of relative}
		selectedAsbaatArr = filterSelectedAsbaat()

		// This will makes ZAF array length to zero when there is no ZAF
		// on line 72 of solve.js
		ZAFNotFound()

		// This if section is true for all Imams but its else section is not true for all Imams
		if ( selectedAsbaatArr.length === 1 ) {

			// common method for all Imams
			forAllMethods()

		} else {

			// This will differentiate the different methods for different Imams
			solveParts()

		}

		// combines zawe al farooz and asbaat
		// on line 83 of solve.js file
		combineZAFandAsbaat()

		// aqdariyaExists if husband, mother, grandfather and realsister exists
		if ((imam === "shaafi" || imam === "maliki") && aqdariyaExists && selectedRelativesArr.length === 4) {
				
			aqdariyaMethod()
			
		}
		
		// display(selectedRelativesArr) // test function
		allRelativesLCM()
		solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)

		
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
			selectedZaweAlFaroozArr = filterSelectedZaweAlFarooz(perZAFSiblingPart, availableRelativesArr)
			
			// calculate the remaining part from zawe al farooz
			remainingPart = calculateRemainingPart()
			ZAFNotFound()	// makes ZAF array length to zero whern there is no ZAF available.
			
			console.log(` %c remainingPart: ${remainingPart.solvedDisplay()}`, 
						"color: black; font-size: 12px; font-weight: bold;")

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

				// if (husbandVal === 0 && wifeVal === 0 && imam !== "hanbali") {

				// 	// ===================================================
				// 	/*		Hanbali Rad Testing			*/
				// 	// ===================================================
				// 	// hanbaliRad()
				// 	// ===================================================
					
				// 	display(selectedRelativesArr)
				// 	allRelativesLCM()	// LCM of ZAF 
				// 	// Here this function will solve the Rad Problem only for ZAF Nasbi (زوی الفروض نسبی).
				// 	solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)
				// 	outputAllValues()

				// } else 
				if (selectedRelativesArr.length === 1 && (husbandVal > 0 || wifeVal > 0)) {
					let bookLink = "Implement (زوی الارحام) Method with remaining part (other than Husband Or Wife)"
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
						Algortihm: (رد کا طریقہ)
						==========
												
						
						* Add all relatives parts together and subtract it from 1
						* keep the remaining part in some variable

						* remove 1st element i.e ZAF sababi
							* for Imam = Hanbali, write function in ikhtilafiyat.js 
						* take lcm of remaining array elements

						* Multiply LCM (say selectedRelatives1stLCM) with Numerator and devide it by its denominator of 
								every element and add their sum in sum variable
						* add all its elements and save it in a variable (e.g ratioSum)

						* add remianing part in ZAF Nasbi parts according to their ratio.
						
						* insert the removed element in start of selectedRelativesArr.

						* Calculate per Head Part i.e if multiply denominator by 1st index of selected Relatives Array (selectedRelativesArr)
						* Take LCM of denominators
						* Solve it
						* Show Output on Screen.
					*/

					// =============================================================================
					
					console.log(`=============================================================================`)

					

					//	* remove 1st element i.e ZAF sababi
					let ZAFsababi
					if (husbandVal !== 0 || wifeVal !== 0) {

						ZAFsababi = selectedRelativesArr.shift()
						display(selectedRelativesArr)
					
					}	

					// =======================================================
					/*						Hanbali Rad						*/
					// =======================================================
					if ( imam === "hanbali" ) {hanbaliRad()}
					console.log(`Hanbali RAD not elligible persons: ${hanbaliRadArr}`)
					// ===================================================
					
					//	* take lcm of remaining array elements
					allRelativesLCM()	// LCM of ZAF  // this function is written In solve.js File
					
					// =================================================
					//	* Multiply LCM (say selectedRelatives1stLCM) with Numerator and devide it by its denominator of 
					// 			every element and add their sum in sum variable
					//	* add all its elements and save it in a variable (e.g ratioSum)
					let ratioSum = 0, ratio = [], ratioSumTemp = 0, addRemaining = []

					for (let i = 0; i < selectedRelativesArr.length; i++){
						ratioSumTemp = new Frac(selectedRelatives1stLCM * selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][1].denominator())
						ratio[i] = ratioSumTemp

						ratioSum += ratio[i]
					}

					// * add remianing part in ZAF Nasbi parts according to their ratio.
					for (let i = 0; i < selectedRelativesArr.length; i++){
						console.log(`ratio[${i}]: ${ratio[i].numerator()}`)
						addRemaining[i] = new Frac(remainingPart.numerator() * ratio[i], remainingPart.denominator() * ratioSum)
						// ADD TWO OBJECTS HERE
						// selectedRelativesArr[i][1] + addRemaining[i]
						console.log(`ADD TWO OBJECTS HERE\nselectedRelativesArr[${i}][1] + addRemaining[${i}]`)
						console.log(`%c ${selectedRelativesArr[i][1].display()} + (${remainingPart.numerator()} / ${remainingPart.denominator()}) * (${ratio[i].numerator()} / ${ratioSum})`, 
						"color: orange; font-size: 12px; font-weight: bold;")

						selectedRelativesArr[i][1] = addTwoFracs(selectedRelativesArr[i][1], addRemaining[i])

						console.log(`%c selectedRelativesArr[${i}][1] = ${selectedRelativesArr[i][1].display()}`, 
						"color: orange; font-size: 12px; font-weight: bold;")
					}

					// Testing Statements
					// =================================================

					console.log(`================================================================`)
					// console.log(`addRemaining[0]: ${addRemaining[0].solvedDisplay()}`)
					// console.log(`addRemaining[1]: ${addRemaining[1].solvedDisplay()}`)
					// console.log(`ratio[0]: ${ratio[0].numerator()}`)
					// console.log(`ratio[1]: ${ratio[1].numerator()}`)
					// console.log(`ratioSum: ${ratioSum}`)

					// =================================================
					display(selectedRelativesArr)

					console.log(`================================================================`)

					// * insert the removed element in start of selectedRelativesArr.
					if (husbandVal !== 0 || wifeVal !== 0) { 
						selectedRelativesArr.unshift(ZAFsababi)
					}

					if ( imam === "hanbali") {

						// 1st index is removed because its always empty.
						hanbaliRadArr.shift()
						selectedRelativesArr = selectedRelativesArr.concat(hanbaliRadArr)
						console.log(`selectedRelativesArr After Concatination: ${selectedRelativesArr}`)

					}
					display(selectedRelativesArr)
					console.log(`================================================================`)
										
					// * Calculate per Head Part i.e if multiply denominator by 1st index of selected Relatives Array (selectedRelativesArr)
					for (let i = 0; i < selectedRelativesArr.length; i++){
						selectedRelativesArr[i][1].set(selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][0] * selectedRelativesArr[i][1].denominator())
					}
					display(selectedRelativesArr)
					console.log(`================================================================`)
					
					// * Take LCM of denominators
					allRelativesLCM()
					
					// * Solve it
					solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)

					// * Show Output on Screen.
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