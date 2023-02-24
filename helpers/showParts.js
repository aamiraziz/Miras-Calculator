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

	// hanfi, shaafi, hanbali, maliki
	console.log(`Imam: ${imam}`)

	// Existance necessary to get parts
    childernExists = childernCheck()	// If childern exists then it will return true
	ikhwaExists = ikhwaCheck()			// if ikhwa exists then it will return true
	console.log(`IkhwaExists:	${ikhwaExists}`)

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
	aqdariyaExists = checkAqdariya()	// if aqdariya exists then
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
	console.log(`grandFatherPart: ${grandFatherPart.display()}`)
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
							sonArr, sSonArr, ssSonArr, sssSonArr
						]
	
	// CHECK ZaweAlFarooz PARTS // hanfi, shaafi, hanbali, maliki
	zaweAlFaroozSum = husbandPart + wifePart + daughterPart + sDaughterPart + ssDaughterPart + 
						sssDaughterPart + fatherPart + motherPart + rSisterPart + pSisterPart 
						+ mBroSisPart + grandFatherPart + grandMotherPart

	
	// if (imam === "shaafi" || imam === "maliki") {

	// 	zaweAlFaroozSum = husbandPart + wifePart + daughterPart + sDaughterPart + ssDaughterPart + 
	// 					sssDaughterPart + fatherPart + motherPart + rSisterPart + pSisterPart 
	// 					+ mBroSisPart + grandMotherPart

	// } else {

	// 	zaweAlFaroozSum = husbandPart + wifePart + daughterPart + sDaughterPart + ssDaughterPart + 
	// 					sssDaughterPart + fatherPart + motherPart + rSisterPart + pSisterPart 
	// 					+ mBroSisPart + grandFatherPart + grandMotherPart

	// }

	// conver the zaweAlFaroozSum to fraction to find the exact value of its sum
	zaweAlFaroozSum = new Fraction(zaweAlFaroozSum)
		
	// zaweAlFaroozArr = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
	// 	motherArr, rSisterArr, pSisterArr, mSisArr, gfArr, gmArr ]
	
	//	if imam === "shaafi" || imam === "maliki"
	// zaweAlFaroozArr = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
	// 	motherArr, rSisterArr, pSisterArr, mSisArr, gmArr ]
}

