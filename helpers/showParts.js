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
	// asbatExists = asbatCheck()			// if asbat exists then it will return true
	// asbatExists ? console.log(`Asbat Exists`) : console.log(`Asbat Does Not Exists`)
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
	asbatExists ? console.log(`Asbat Exists`) : console.log(`Asbat Does Not Exists`)
	
	// ------------------------------------
	// ---- Zawe Al Farooz Starts Here ----
	// ------------------------------------

    // ---- Array For Husband Calculations ----
	husbandVal = parseInt(husband.value)
	husbandName = husband.name

	husbandArr = [husbandVal, husbandPart, husbandName]

	// ----Array For wife Caculations ----
	wifeVal = parseInt(wife.value)
	wifeName = wife.name

	wifeArr = [wifeVal, wifePart, wifeName]

    // ---- Array for Daughter Calculations ----
	daughterVal= parseInt(daughter.value)
	daughterName = daughter.name

	// The numertator and denominator is working properly
	// console.log(`daughterPart.numerator() is ${daughterPart.numerator()}
	// 			daughterPart.denominator() is ${daughterPart.denominator()}`)

	daughterArr = [daughterVal, daughterPart, daughterName]

	// ---- Array for sDaughter Calculations ----
	sDaughterVal= parseInt(sDaughter.value)
	sDaughterName = sDaughter.name

	sDaughterArr = [sDaughterVal, sDaughterPart, sDaughterName]

	// ---- Array for ssDaughter Calculations ----
	ssDaughterVal= parseInt(ssDaughter.value)
	ssDaughterName = ssDaughter.name

	ssDaughterArr = [ssDaughterVal, ssDaughterPart, ssDaughterName]

	// ---- Array for sssDaughter Calculations ----
	sssDaughterVal= parseInt(sssDaughter.value)
	sssDaughterName = sssDaughter.name

	sssDaughterArr = [sssDaughterVal, sssDaughterPart, sssDaughterName]

	// ---- Array for Father Calculations ----
	fatherVal = parseInt(father.value)
	fatherName = father.name

	fatherArr = [fatherVal, fatherPart, fatherName] 

	// ---- Array for Mother Calculations ----
	motherVal = parseInt(mother.value)
	motherName = mother.name
	
	motherArr = [motherVal, motherPart, motherName] 
    
    // ---- Array For Real Sisters Calculations ----
	rSisterVal = parseInt(rSister.value)
	rSisterName = rSister.name

	rSisterArr = [rSisterVal, rSisterPart, rSisterName]

	// ---- Array For Paternal Sisters Calculations ----
	pSisterVal = parseInt(pSister.value)
	pSisterName = pSister.name

	pSisterArr = [pSisterVal, pSisterPart, pSisterName]

	// Maternal Brothers and sisters calculations
	mBroSisName = "Maternal Brother(s) / Sister(s)"
	totalBroSis = parseInt(mBrother.value) + parseInt(mSister.value)	// total number of brothers and sisters
	
	mSisArr = [totalBroSis, mBroSisPart, mBroSisName]	// maternal brother(s) / sister(s) array

	// ---- Array For grand Father Calculations	----
	
	// grandFatherPart										// decides the total parts of all grand fathers
	grandFatherVal = parseInt(grandFather.value) 			// decides the total number of grand father(s)
	gfName = grandFatherType

	gfArr = [grandFatherVal, grandFatherPart, gfName]

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

	gmArr = [grandMotherVal, grandMotherPart, gmName]

	/*
		APPLICATION lOGIC:
		==================

		* If this sum (zaweAlFaroozSum) is equal to 1 or greater than 1 then all these parts are the zawe al farooz parts

		* If this sum (zaweAlFaroozSum) is Less than 1 and asbat is/are present in the first page of interface,
		  then first solve the zaweAlFarooz problem and then asbat problem

		* If this sum (zaweAlFaroozSum) is Less than 1 and asbat is not present in the first page of interface,
		  then go the second page of interface and select the asbat (from chart).

		* If this sum (zaweAlFaroozSum) is less than 1 but asbat not present then use رد کا طریقہ
	*/

	// CHECK PARTS
	zaweAlFaroozSum = husbandPart + wifePart + daughterPart + sDaughterPart + ssDaughterPart + 
						sssDaughterPart + fatherPart + motherPart + rSisterPart + pSisterPart 
						+ mBroSisPart + grandFatherPart + grandMotherPart

	// conver the zaweAlFaroozSum to fraction to find the exact value of its sum
	zaweAlFaroozSum = new Fraction(zaweAlFaroozSum)
	console.log(`zaweAlFaroozSum : ${zaweAlFaroozSum}`)
	
	zaweAlFaroozArr = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
		motherArr, rSisterArr, pSisterArr, mSisArr, gfArr, gmArr ]

	// =============================================================================
	// check to solve the problem 
	if (parseFloat(zaweAlFaroozSum) === 1 || parseFloat(zaweAlFaroozSum) > 1) {
		// if zaweAlFaroozSum is greater than 1 or equal to 1 then solve the zaweAlFaroozSum problem and the parts are their parts
		console.log(`Solve zawe al farooz and these are their parts`)

		solveZAF(zaweAlFaroozArr) 

	} else if (parseFloat(zaweAlFaroozSum) < 1 && asbatExists) {
		// if zaweAlFaroozSum is Less than 1 and asbat are present in the first page of interface, 
		// then first solve the zaweAlFarooz problem and then asbat problem
		console.log(`calculate zawe al farooz and then asbat`)
		// solveZAF(zaweAlFaroozArr) 
	} else if (parseFloat(zaweAlFaroozSum) < 1 && !asbatExists) {
		// if zaweAlFaroozSum is Less than 1 and asbat is not present in the first page of interface,
		// then go the second page of interface and select the asbat (from chart).
		console.log(`GoTo Asbat Chart`)
	} else {
		// if zaweAlFaroozSum is Less than 1 and asbat not present which is selected from the asbat chat in the interface,
		// then solve the zaweAlFaroozSum problem and use رد کا عمل
		console.log(`if asbat not present in absabt chart is selected then`)
		console.log(`رد کا عمل استعمال کریں`)
	} 
	// =============================================================================


	// -----------------------------------
	// ---- Zawe Al Farooz Ends Here ----
	// -----------------------------------
	
	// ---- Array For Real Brothers Calculations ----
	rBrotherVal = parseInt(rBrother.value)
	rBrotherName = rBrother.name

	rBrotherArr = [rBrotherVal, rBrotherPart, rBrotherName]

	// ---- Array For Paternal Sisters Calculations ----
	pBrotherVal = parseInt(pBrother.value)
	pBrotherName = pBrother.name

	pBrotherArr = [pBrotherVal, pBrotherPart, pBrotherName]

	// ---- Array for son Calculations ----
	sonVal= parseInt(son.value)
	sonName = son.name

	sonArr = [sonVal, sonPart, sonName]

	// ---- Array for sSon Calculations ----
	sSonVal= parseInt(sSon.value)
	sSonName = sSon.name

	sSonArr = [sSonVal, sSonPart, sSonName]

	// ---- Array for ssSon Calculations ----
	ssSonVal= parseInt(ssSon.value)
	ssSonName = ssSon.name

	ssSonArr = [ssSonVal, ssSonPart, ssSonName]

	// ---- Array for sssSon Calculations ----
	sssSonVal= parseInt(sssSon.value)
	sssSonName = sssSon.name

	sssSonArr = [sssSonVal, sssSonPart, sssSonName]

	availableRelatives = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
		motherArr, rSisterArr, pSisterArr, mSisArr, gfArr, gmArr, rBrotherArr, pBrotherArr, 
		sonArr, sSonArr, ssSonArr, sssSonArr ]
	// console.log(`availableRelatives.length: ${availableRelatives.length}`)
	// selectedRelatives[0] = availableRelatives[0]
	// console.log(`selectedRelatives[0]: ${selectedRelatives[0]}`)

	// Put only the available relatives in availableRelatives array to selectedRelatives array
	for ( let i = 0, z = 0; z < availableRelatives.length; z++ ) {
		if ( availableRelatives[z][0] !== 0 ) {

			selectedRelatives[i] = availableRelatives[z]
			// console.log(`selectedRelatives[${i}] = ${selectedRelatives[i]}`)
			i++
		} 
	}

	console.log(`==============================================================`)
	console.log(`I am at the end of Show Parts page`)
	console.log(`==============================================================`)
}

