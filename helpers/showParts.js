/*
	* This file will show and perform computations on every heir's part
	* Many functions writeen in different files are called here
	* khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/


// Show Parts
function showParts() {

	// Existance necessary to get parts
    childernExists = childernCheck()	// If childern exists then it will return true
	ikhwaExists = ikhwaCheck()			// if ikhwa exists then it will return true

	// Calculates Husband Part
	husbandPart = calculateHusbandPart()

	// Calculates Wife Part
	wifePart = calculateWifePart()

	// Calculates Daughter Part
	daughterPart = calculateDaughterPart()

	// Calculates Son's Daughter Part
	sDaughterPart = calculateSDaughterPart()

	// Calculates Son's Son's Daughter Part
	ssDaughterPart = calculateSSDaughterPart()

	// Calculates Son's Son's Son's Daughter Part
	sssDaughterPart = calculateSSSDaughterPart()

	// Calculates Son Part
	sonPart = calculateSonPart()

	// Calculates Son's Son Part
	sSonPart = calculateSSonPart()

	// Calculates Son's Son's Son Part
	ssSonPart = calculateSSSonPart()

	// Calculates Son's Son's Son's Son Part
	sssSonPart = calculateSSSSonPart()

	// calculates Father's Part
	fatherPart = calculateFatherPart()

	// Calculates Mother's part
	motherPart = calculateMotherPart()

	// Calculates Real Sister's Part
	rSisterPart = calculateRSisterPart()

	// Calculates Real Brother's Part
	rBrotherPart = calculateRBrotherPart()

	// Calculates Paternal Sister's Part
	pSisterPart = calculatePSisterPart()

	// Calculates Paternal Brother's Part
	pBrotherPart = calculatePBrotherPart()

	// Calculates Maternal Brother's or Sister's Part
	mBroSisPart = calculateMBroSisPart()

	// this function will show the grand father type written in grandParentType.js file
	grandFatherType = showGrandFatherType()

	// calculates Grand Father's Part
	grandFatherPart = calculateGrandFatherPart()

	// this function will show the grand Mother type written in grandParentType.js file
	grandMotherType = showGrandMotherType()

	// calculates Grand Mother's Part
	grandMotherPart = calculateGrandMotherPart()

    // ------------------------------------------------------------------
    // ---------------------------- Calculations ------------------------
    // ------------------------------------------------------------------
	
	asbatExists = asbatCheck()			// if asbat exists then it will return true
	// asbatExists ? console.log(`Asbat Exists`) : console.log(`Asbat Does Not Exists`)
	
	// ------------------------------------
	// ---- Zawe Al Farooz Starts Here ----
	// ------------------------------------

    // ---- Array For Husband Calculations ----
	husbandVal = parseInt(husband.value)

	husbandArr = [husbandVal, husbandPart, false, husbandName]

	// ----Array For wife Caculations ----
	wifeVal = parseInt(wife.value)

	wifeArr = [wifeVal, wifePart, false, wifeName]

    // ---- Array for Daughter Calculations ----
	daughterVal= parseInt(daughter.value)

	daughterArr = [daughterVal, daughterPart, daughterAsba, daughterName]

	// ---- Array for sDaughter Calculations ----
	sDaughterVal= parseInt(sDaughter.value)

	sDaughterArr = [sDaughterVal, sDaughterPart, sDaughterAsba, sDaughterName]

	// ---- Array for ssDaughter Calculations ----
	ssDaughterVal= parseInt(ssDaughter.value)

	ssDaughterArr = [ssDaughterVal, ssDaughterPart, ssDaughterAsba, ssDaughterName]

	// ---- Array for sssDaughter Calculations ----
	sssDaughterVal= parseInt(sssDaughter.value)

	sssDaughterArr = [sssDaughterVal, sssDaughterPart, sssDaughterAsba, sssDaughterName]

	// ---- Array for Father Calculations ----
	fatherVal = parseInt(father.value)

	fatherArr = [fatherVal, fatherPart, fatherAsba, fatherName] 

	// ---- Array for Mother Calculations ----
	motherVal = parseInt(mother.value)
	
	motherArr = [motherVal, motherPart, false, motherName] 
    
    // ---- Array For Real Sisters Calculations ----
	rSisterVal = parseInt(rSister.value)

	rSisterArr = [rSisterVal, rSisterPart, rSisterAsba, rSisterName]

	// ---- Array For Paternal Sisters Calculations ----
	pSisterVal = parseInt(pSister.value)

	pSisterArr = [pSisterVal, pSisterPart, pSisterAsba, pSisterName]

	// Maternal Brothers and sisters calculations
	totalBroSis = parseInt(mBrother.value) + parseInt(mSister.value)	// total number of brothers and sisters
	
	mSisArr = [totalBroSis, mBroSisPart, false, mBroSisName]	// maternal brother(s) / sister(s) array

	// ---- Array For grand Father Calculations	----
	
	// grandFatherPart										// decides the total parts of all grand fathers
	grandFatherVal = parseInt(grandFather.value) 			// decides the total number of grand father(s)
	gfName = grandFatherType

	gfArr = [grandFatherVal, grandFatherPart, grandFatherAsba, gfName]

	// ---- Array For Grand Mother Calculations ----

	// decides the total number of grand mother(s)
	if (grandMotherType === null) {
		grandMotherVal = 0
	} else {
		grandMotherVal = grandMotherType.length
	}
	// console.log(`grandMotherVal is: ${grandMotherVal}`)
	// console.log(`typeof grandMotherVal is: ${typeof grandMotherVal}`)
	
	// grandMotherVal 										// decides the total number of grand mother(s)
	// grandMotherPart										// decides the total parts of all grand mothers
	gmName = grandMotherType

	gmArr = [grandMotherVal, grandMotherPart, false, gmName]
	
	// -----------------------------------
	// ---- Zawe Al Farooz Ends Here ----
	// -----------------------------------
	
	// ---- Array For Real Brothers Calculations ----
	rBrotherVal = parseInt(rBrother.value)

	rBrotherArr = [rBrotherVal, rBrotherPart, rBrotherAsba, rBrotherName]

	// ---- Array For Paternal Sisters Calculations ----
	pBrotherVal = parseInt(pBrother.value)

	pBrotherArr = [pBrotherVal, pBrotherPart, pBrotherAsba, pBrotherName]

	// ---- Array for son Calculations ----
	sonVal= parseInt(son.value)

	sonArr = [sonVal, sonPart, sonAsba, sonName]

	// ---- Array for sSon Calculations ----
	sSonVal= parseInt(sSon.value)

	sSonArr = [sSonVal, sSonPart, sSonAsba, sSonName]

	// ---- Array for ssSon Calculations ----
	ssSonVal= parseInt(ssSon.value)

	ssSonArr = [ssSonVal, ssSonPart, ssSonAsba, ssSonName]

	// ---- Array for sssSon Calculations ----
	sssSonVal= parseInt(sssSon.value)

	sssSonArr = [sssSonVal, sssSonPart, sssSonAsba, sssSonName]

	// this is the 2D array which will hold the details of all available relatives in form of first page
	availableRelativesArr = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
		motherArr, rSisterArr, pSisterArr, mSisArr, gfArr, gmArr, rBrotherArr, pBrotherArr, 
		sonArr, sSonArr, ssSonArr, sssSonArr ]

	/*
		APPLICATION lOGIC:
		==================

		* If this sum (zaweAlFaroozSum) is equal to 1 or greater than 1 then all these parts are the zawe al farooz parts

		* If this sum (zaweAlFaroozSum) is Less than 1 and asbat is/are present in the first page of interface,
		  then first solve the zaweAlFarooz problem and then asbat problem

		* If this sum (zaweAlFaroozSum) is Less than 1 and asbat is not present in the first page of interface,
		  then go the second page of interface and select the asbat (from chart).

		* If this sum (zaweAlFaroozSum) is less than 1 but asbat not present then use رد کا طریقہ

		* If only SPOUSE is present and neither ZaweAlFarooz nor Asbaat is present then go to ZaweAlArham
	*/

	// CHECK ZaweAlFarooz PARTS
	zaweAlFaroozSum = husbandPart + wifePart + daughterPart + sDaughterPart + ssDaughterPart + 
						sssDaughterPart + fatherPart + motherPart + rSisterPart + pSisterPart 
						+ mBroSisPart + grandFatherPart + grandMotherPart

	// conver the zaweAlFaroozSum to fraction to find the exact value of its sum
	zaweAlFaroozSum = new Fraction(zaweAlFaroozSum)
	
	
	zaweAlFaroozArr = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
		motherArr, rSisterArr, pSisterArr, mSisArr, gfArr, gmArr ]
	
	// computeSolution()

	// // =============================================================================
	// // check to solve the problem 
	// if (parseFloat(zaweAlFaroozSum) === 1 || parseFloat(zaweAlFaroozSum) > 1) {
	// 	/*
	// 		* Solve zawe al farooz and these are their parts
	// 		* if zaweAlFaroozSum is greater than 1 or equal to 1 then solve the zaweAlFaroozSum problem and the parts are their parts
	// 		* In Solve.js, solveZAF is the function to calculate the solution of only zaweAlFarooz problem.
	// 	*/
	// 	console.log(`Solve zawe al farooz and these are their parts`) // test statement

	// 	selectedZaweAlFaroozArr = filterSelectedZaweAlFarooz()
	// 	zaweAlFaroozDenominatorArr = filterDenominators(selectedZaweAlFaroozArr)

	// 	zaweAlFarooz1stLCM = nerdamer(`lcm(${zaweAlFaroozDenominatorArr})`) // First LCM
	// 	console.log(`zaweAlFarooz1stLCM = ${zaweAlFarooz1stLCM}`)

	// 	secondLCM = checkForSecondLCM(selectedZaweAlFaroozArr)
	// 	console.log(`secondLCM = ${secondLCM}`)

	// 	solveZAF(selectedZaweAlFaroozArr, zaweAlFarooz1stLCM, zaweAlFarooz2ndLCM, zaweAlFarooz2ndLCMArr)
		
	// } else if (parseFloat(zaweAlFaroozSum) < 1 && asbatExists) {
	// 	// if zaweAlFaroozSum is Less than 1 and asbat are present in the first page of interface, 
	// 	// then first solve the zaweAlFarooz problem and then asbat problem
	// 	console.log(`calculate zawe al farooz and then asbat`)

	// 	/*
	// 		ALGORITHM:
	// 		==========
			
	// 		* Find ZaweAlFarooz Relatives and store it in "selectedZaweAlFaroozArr" Array
	// 		* Find Remaining Part from ZaweAlFarooz Relatives
	// 		* Find Asbaat Relatives and store it in "selectedAsbaatArr" Array
	// 		* if selectedAsbaatArr.length === 1
	// 			* if Asbaat is already present in ZAF (Only Father and GrandFather)
	// 				* Add Asbaat part in that particular Zawe al farooz
	// 			* else
	// 				* selectedAsbaatArr[0][1] = remainingPart 
	// 		* if selectedAsbaatArr.length > 1
	// 			* perAsbaSiblingPart = remainingPart / totalFemales
	// 			* femaleAsbaPart = perAsbaSiblingPart
	// 			* find maleAsba (everytime at the last index of the array)
	// 				* maleAsbaPart = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
	// 		* find LCM of Parts in selectedRelativesArr
	// 		* Multiply LCM with parts of selectedRelativesArr // Answer
	// 	*/


	// 	// available Zawe al farooz Relatives
	// 	selectedZaweAlFaroozArr = filterSelectedZaweAlFaroozPP(perZAFSiblingPart)
		
	// 	// calculate the remaining part from zawe al farooz
	// 	remainingPart = calculateRemainingPart()

	// 	console.log(`remainingPart: ${remainingPart.valueOf()}`)
	// 	console.log(`typeof(remainingPart): ${typeof(remainingPart.valueOf())}`)

	// 	// available Asbaat {Number of relatives, Part, flag(true/false), Name of relative}
	// 	selectedAsbaatArr = filterSelectedAsbaat()

	// 	// if ( (!zaweAlFaroozArr.find(element => element[0] > 0)) ) {

	// 	solveZAFandAsbaat()
		
	// } else if (parseFloat(zaweAlFaroozSum) < 1 && !asbatExists) {
	// 	// if zaweAlFaroozSum is Less than 1 and asbat is not present in the first page of interface,
	// 	// then go the second page of interface and select the asbat (from chart).

	// 	main.style.display = 'none'
	// 	asbaatChart.style.display = 'block'

	// 	console.log(`GoTo Asbat Chart`)

	// 	const myFirstPromise = new Promise((resolve, reject) => {
	// 		// We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
	// 		// In this example, we use setTimeout(...) to simulate async code.
	// 		// In reality, you will probably be using something like XHR or an HTML API.
	// 		setInterval(() => {

	// 			if (asbaFromChart !== undefined) {
	// 				resolve("Success! and asbaFromChart is: " + asbaFromChart) // Yay! Everything went well!
	// 			}

	// 		}, 1)
	// 	})
		  
	// 	myFirstPromise.then((successMessage) => {
	// 		// successMessage is whatever we passed in the resolve(...) function above.
	// 		// It doesn't have to be a string, but if it is only a succeed message, it probably will be.
	// 		console.log(`Yay! ${successMessage}`)
	// 	  }, (error) => {
	// 		console.error(error)
	// 	})

	// 	myFirstPromise.then(() => {

	// 		// available Zawe al farooz Relatives
	// 		selectedZaweAlFaroozArr = filterSelectedZaweAlFaroozPP(perZAFSiblingPart)
			
	// 		// calculate the remaining part from zawe al farooz
	// 		remainingPart = calculateRemainingPart()
	// 		ZAFNotFound()	// makes ZAF array length to zero whern there is no ZAF available.
			
	// 		console.log(`remainingPart: ${remainingPart.solvedDisplay()}`)

	// 		/*
	// 			* if asbaFromChart[2] === 0 && selectedZaweAlFaroozArr.length === 0
	// 			* Goto output screen to provide book link because it is Zawe Al Arhaam problem

	// 			* if selectedZaweAlFaroozArr.length !== 0 && asbaFromChart[2] === 0 
	// 			* Implement Rad Method
	// 		*/

	// 		if (asbaFromChart[2] === 0 && selectedZaweAlFaroozArr.length === 0) {
	// 			let bookLink = "This is Zawe Al Arhaam (ذوی الارحام) problem. Please consult the book"
	// 			document.getElementById("main").innerHTML = bookLink
	// 		} else if (selectedZaweAlFaroozArr.length !== 0 && asbaFromChart[2] === 0) {
	// 			console.log(`IMplement Rad (رد) Method`)

	// 			selectedRelativesArr = selectedZaweAlFaroozArr

	// 			if (husbandVal === 0 && wifeVal === 0) {
					
	// 				display(selectedRelativesArr)
	// 				allRelativesLCM()	// LCM of ZAF 
	// 				// Here this function will solve the Rad Problem only for ZAF Nasbi (زوی الفروض نسبی).
	// 				solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)
	// 				outputAllValues()

	// 			} else if (selectedRelativesArr.length === 1 && (husbandVal > 0 || wifeVal > 0)) {
	// 				let bookLink = "IMplement (زوی الارحام) Method with remaining part (other than Husband Or Wife)"
	// 				document.getElementById("main").innerHTML = bookLink

	// 			} else {

	// 				display(selectedRelativesArr)
	// 				console.log(`=============================================================================`)

	// 				// =============================================================================
	// 				// converts per person part back to all persons part
	// 				console.log(`selectedZaweAlFaroozArr.length: ${selectedZaweAlFaroozArr.length}`)
	// 				for ( let i = 0; i < selectedZaweAlFaroozArr.length; i++ ) {

	// 					selectedZaweAlFaroozArr[i][1].set(selectedZaweAlFaroozArr[i][0] * selectedZaweAlFaroozArr[i][1].numerator(), selectedZaweAlFaroozArr[i][1].denominator())

	// 				} 
	// 				// =============================================================================

	// 				/*
	// 					Algortihm:
	// 					==========
						
	// 					* take lcm of Relative Values array elements
	// 						if there number is greater than 1 then we need to multiply our answer with that LCM 
	// 						in the end.
	// 					* remove 1st element i.e ZAF sababi
	// 					* take lcm of remaining array elements
	// 					* store all the numerators
	// 					* Multiply LCM (say selectedRelatives1stLCM) with Numerator and devide it by its denominator of 
	// 							every element and add their sum in sum variable
	// 					* add all its elements and save it in a variable (e.g ratioSum)
	// 					* in selectedRelativesArr every person part should be allNumerators[i]/ratioSum
	// 					* myltiply ratioSum with Denominator of ZAF Sababi and store it in variable (say tempTotalParts)
	// 					* the total parts for ZAFsababi will be tempTotalParts * ZAFSababi PartS (e.g ZAFSababiTotalParts)
	// 					* The remainingTotalParts will be tempTotalParts - ZAFSababiTotalParts
	// 					* Multiply it with every part element in selectedRelativesArr.
	// 					* insert the removed element in start of selectedRelativesArr.

	// 					* Multiply it with relativeCountsLCM 
	// 						(if number of every/any type of relatives is greater than 1)
	// 					* Show Output on Screen.
	// 				*/

	// 				// =============================================================================
					
	// 				console.log(`=============================================================================`)
	// 				//	* take lcm of Relative Values array elements
	// 				let relativeCountsLCM = []
	// 				relativeCountsLCM = filterRelativeCounts(selectedRelativesArr)
	// 				console.log(`relativeCountsLCM Array: ${relativeCountsLCM}`)
	// 				relativeCountsLCM = calculateLCM(relativeCountsLCM)
	// 				console.log(`relativeCountsLCM: ${relativeCountsLCM}`)

	// 				//	* remove 1st element i.e ZAF sababi
	// 				let ZAFsababi = selectedRelativesArr.shift()
	// 				display(selectedRelativesArr)	
					
	// 				//	* take lcm of remaining array elements
	// 				allRelativesLCM()	// LCM of ZAF 

	// 				//	* store all the numerators
	// 				let allNumeratorsLCM = filterNumerators(selectedRelativesArr)
	// 				console.log(`allNumeratorsLCM Array: ${allNumeratorsLCM}`)
	// 				allNumeratorsLCM = calculateLCM(allNumeratorsLCM)
	// 				console.log(`allNumeratorsLCM: ${allNumeratorsLCM}`)

	// 				//	* Multiply LCM (say selectedRelatives1stLCM) with Numerator and devide it by its denominator of 
	// 				// 			every element and add their sum in sum variable
	// 				//	* add all its elements and save it in a variable (e.g ratioSum)

	// 				let ratioSum = 0

	// 				for (let i = 0; i < selectedRelativesArr.length; i++){
	// 					selectedRelativesArr[i][1].set(selectedRelatives1stLCM * selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][1].denominator())

	// 					ratioSum += selectedRelativesArr[i][1].numerator()
	// 				}

	// 				for (let i = 0; i < selectedRelativesArr.length; i++){
	// 					selectedRelativesArr[i][1].set(selectedRelativesArr[i][1].numerator(), ratioSum)
	// 				}
	// 				console.log(`================================================================`)
	// 				console.log(`ratioSum: ${ratioSum}`)
	// 				display(selectedRelativesArr)

	// 				// * myltiply ratioSum with Denominator of ZAF Sababi and store it in variable (say tempTotalParts)
	// 				let tempTotalParts = ratioSum * ZAFsababi[1].denominator()
	// 				console.log(`tempTotalParts: ${tempTotalParts}`)


	// 				// * the total parts for ZAFsababi will be tempTotalParts * ZAFSababi PartS (e.g ZAFSababiTotalParts)
	// 				ZAFsababi[1].set(tempTotalParts * ZAFsababi[1].numerator(), ZAFsababi[0] * ZAFsababi[1].denominator())
	// 				console.log(`TotalParts of ZAFSababi: ${ZAFsababi[1].solvedDisplay()}`)


	// 				// * The remainingTotalParts will be tempTotalParts - ZAFSababiTotalParts
	// 				let remainingTotalParts = parseInt(tempTotalParts - ZAFsababi[1].numerator())
	// 				console.log(`remainingTotalParts: ${remainingTotalParts}`)

	// 				// * Multiply it with every part element in selectedRelativesArr.
	// 				for (let i = 0; i < selectedRelativesArr.length; i++){
	// 					selectedRelativesArr[i][1].set(remainingTotalParts * selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][0] * selectedRelativesArr[i][1].denominator())
	// 				}
	// 				display(selectedRelativesArr)
	// 				console.log(`================================================================`)

	// 				// * insert the removed element in start of selectedRelativesArr.
	// 				selectedRelativesArr.unshift(ZAFsababi)
	// 				display(selectedRelativesArr)
	// 				console.log(`================================================================`)
					
	// 				// * Multiply it with relativeCountsLCM 
	// 				// 		(if number of every/any type of relatives is greater than 1)
	// 				if (relativeCountsLCM > 1) {
	// 					for (let i = 0; i < selectedRelativesArr.length; i++){
	// 						selectedRelativesArr[i][1].set(relativeCountsLCM * selectedRelativesArr[i][1].numerator(), selectedRelativesArr[i][1].denominator())
	// 					}

	// 					tempTotalParts *= relativeCountsLCM
	// 				}
	// 				display(selectedRelativesArr)
	// 				console.log(`================================================================`)
					
	// 				outputParts = tempTotalParts
	// 				for (let i = 0; i < selectedRelativesArr.length; i++) {
	// 					outputArray[i] = [selectedRelativesArr[i][3], selectedRelativesArr[i][0], selectedRelativesArr[i][1].valueOf()]
	// 				}

	// 				outputAllValues()

	// 			}
	// 		} else {

	// 			if (flag3) { // if there is no ZAF
	// 				perAsbaSiblingPart = new Frac(1, asbaFromChart[2])		
	// 			} else {
	// 				perAsbaSiblingPart = new Frac(remainingPart.numerator(), remainingPart.denominator() * asbaFromChart[2])
	// 			}
				
	// 			// available Asbaat {Number of relatives, Part = zero, flag(true/false), Name of relative}
	// 			asbaatChartArr = [asbaFromChart[2], perAsbaSiblingPart, true, asbaFromChart[1]]
	// 			console.log(`asbaatChartArr: ${asbaatChartArr[0]}, ${asbaatChartArr[1].display()}, ${asbaatChartArr[2]}, ${asbaatChartArr[3]}`)
	
	// 			// ---------------------------------------------------------------------------------------
	// 			availableRelativesArr.push([asbaFromChart[2], perAsbaSiblingPart, true, asbaFromChart[1]])
	// 			// ---------------------------------------------------------------------------------------
					
	// 			selectedAsbaatArr = filterSelectedAsbaat()
	// 			combineZAFandAsbaat()
	// 			display(selectedRelativesArr) // test function
	// 			allRelativesLCM()
		
	// 			console.log(`selectedRelatives1stLCM = ${selectedRelatives1stLCM}`)
	
	// 			solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)
	
	// 			outputAllValues()

	// 		}
			
	// 	})
		
	// } 
	// // =============================================================================

}

