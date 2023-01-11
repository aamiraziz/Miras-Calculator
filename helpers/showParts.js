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

	
	// console.log(`==============================================================`)
	// console.log(`I am at the end of Show Parts page`)
	// console.log(`==============================================================`)

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

	asbatExists = asbatCheck()			// if asbat exists then it will return true
	asbatExists ? console.log(`Asbat Exists`) : console.log(`Asbat Does Not Exists`)

	// if (fatherAsba) {
	// 	fatherArr[1] = zero
	// }

	// if (grandFatherAsba) {
	// 	fatherArr[1] = zero
	// }

	availableRelativesArr = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
		motherArr, rSisterArr, pSisterArr, mSisArr, gfArr, gmArr, rBrotherArr, pBrotherArr, 
		sonArr, sSonArr, ssSonArr, sssSonArr ]
	
	// =============================================================================
	// check to solve the problem 
	if (parseFloat(zaweAlFaroozSum) === 1 || parseFloat(zaweAlFaroozSum) > 1) {
		// if zaweAlFaroozSum is greater than 1 or equal to 1 then solve the zaweAlFaroozSum problem and the parts are their parts
		// In Solve.js, solveZAF is the function to calculate the solution of only zaweAlFarooz problem.
		selectedZaweAlFaroozArr = filterSelectedZaweAlFarooz(zaweAlFaroozArr)
		zaweAlFaroozDenominatorArr = filterDenominators(selectedZaweAlFaroozArr)

		zaweAlFarooz1stLCM = nerdamer(`lcm(${zaweAlFaroozDenominatorArr})`) // First LCM
		console.log(`zaweAlFarooz1stLCM = ${zaweAlFarooz1stLCM}`)
		// console.log(`secondLCM = ${secondLCM}`)

		secondLCM = checkForSecondLCM(selectedZaweAlFaroozArr)
		console.log(`secondLCM = ${secondLCM}`)

		solveZAF(selectedZaweAlFaroozArr, zaweAlFarooz1stLCM, zaweAlFarooz2ndLCM, zaweAlFarooz2ndLCMArr)
		// console.log(`Solve zawe al farooz and these are their parts`) // test statement

	} else if (parseFloat(zaweAlFaroozSum) < 1 && asbatExists) {
		// if zaweAlFaroozSum is Less than 1 and asbat are present in the first page of interface, 
		// then first solve the zaweAlFarooz problem and then asbat problem
		console.log(`calculate zawe al farooz and then asbat`)

			
		// // CHECK ZaweAlFarooz PARTS in availableRelativesArr
		// availableRelativesZAFSum = husbandPart + wifePart + daughterPart + sDaughterPart + ssDaughterPart + 
		// sssDaughterPart + fatherPart + motherPart + rSisterPart + pSisterPart 
		// + mBroSisPart + availableRelativesArr[11][1] + grandMotherPart

		// // conver the zaweAlFaroozSum to fraction to find the exact value of its sum
		// availableRelativesZAFSum = new Fraction(availableRelativesZAFSum)

		// available Zawe al farooz Relatives
		selectedZaweAlFaroozArr = filterSelectedZaweAlFarooz(availableRelativesArr)
				
		// calculate the remaining part from zawe al farooz
		remainingPart = calculateRemainingPart()

		// available Asbaat
		selectedAsbaatArr = filterSelectedAsbaat()

		/*
			* ALGORITHM
			* Find ZaweAlFarooz Relatives and store it in "selectedZaweAlFaroozArr" Array
			* Find Remaining Part from ZaweAlFarooz Relatives
			* Find Asbaat Relatives and store it in "selectedAsbaatArr" Array
			* if selectedAsbaatArr.length === 1
				* selectedAsbaatArr[0][1] = remainingPart 
			* if selectedAsbaatArr.length > 1
				* perAsbaSiblingPart = remainingPart / totalFemales
				* femaleAsbaPart = perAsbaSiblingPart
				* find maleAsba (everytime at the last index of the array)
					* maleAsbaPart = new Frac( 2 * perAsbaSiblingPart.numerator(), perAsbaSiblingPart.denominator() )
			* find LCM of Parts in selectedRelativesArr
			* Multiply LCM with parts of selectedRelativesArr // Answer
		*/

		if ( selectedAsbaatArr.length === 1 ) {
			selectedAsbaatArr[0][1] = remainingPart
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
		selectedRelativesArr = selectedZaweAlFaroozArr.concat(selectedAsbaatArr)
		display(selectedRelativesArr) // test function

		selectedRelativesDenominatorArr = filterDenominators(selectedRelativesArr)

		selectedRelatives1stLCM = nerdamer(`lcm(${selectedRelativesDenominatorArr})`) // First LCM
		console.log(`selectedRelatives1stLCM = ${selectedRelatives1stLCM}`)

		solveAsbaat(selectedRelativesArr, selectedRelatives1stLCM)

		// solve(selectedRelativesArr, selectedRelatives1stLCM, selectedRelatives2ndLCM, selectedRelatives2ndLCMArr)

		
	} else if (parseFloat(zaweAlFaroozSum) < 1 && !asbatExists) {
		// if zaweAlFaroozSum is Less than 1 and asbat is not present in the first page of interface,
		// then go the second page of interface and select the asbat (from chart).
		console.log(`GoTo Asbat Chart`)
		// remainingPart = calculateRemainingPart()
	} else {
		// if zaweAlFaroozSum is Less than 1 and asbat not present which is selected from the asbat chat in the interface,
		// then solve the zaweAlFaroozSum problem and use رد کا عمل
		console.log(`if asbat not present in absabt chart is selected then`)
		console.log(`رد کا عمل استعمال کریں`)
	} 
	// =============================================================================

}

