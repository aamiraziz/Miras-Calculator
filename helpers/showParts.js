// Show Parts
function showParts() {

	// Existance
    childernExists = childernCheck()	// If childern exists then it will return true
	ikhwaExists = ikhwaCheck()			// if ikhwa exists then it will return true
	asbatExists = asbatCheck()			// if asbat exists then it will return true

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
	husbandName = husband.name
	husbandPerHead = husbandPart

	husbandArr = [husbandVal, husbandPart, husbandPerHead, husbandName]

	// ----Array For wife Caculations ----
	wifeVal = parseInt(wife.value)
	wifeName = wife.name
	wifePerHead = wifePart / wifeVal

	wifeArr = [wifeVal, wifePart, wifePerHead, wifeName]

    // ---- Array for Daughter Calculations ----
	daughterVal= parseInt(daughter.value)
	daughterPerHead = daughterPart / daughterVal
	daughterName = daughter.name

	// The numertator and denominator is working properly
	// console.log(`daughterPart.numerator() is ${daughterPart.numerator()}
	// 			daughterPart.denominator() is ${daughterPart.denominator()}`)

	daughterArr = [daughterVal, daughterPart, daughterPerHead, daughterName]

	// ---- Array for sDaughter Calculations ----
	sDaughterVal= parseInt(sDaughter.value)
	sDaughterPerHead = sDaughterPart / sDaughterVal
	sDaughterName = sDaughter.name

	sDaughterArr = [sDaughterVal, sDaughterPart, sDaughterPerHead, sDaughterName]

	// ---- Array for ssDaughter Calculations ----
	ssDaughterVal= parseInt(ssDaughter.value)
	ssDaughterPerHead = ssDaughterPart / ssDaughterVal
	ssDaughterName = ssDaughter.name

	ssDaughterArr = [ssDaughterVal, ssDaughterPart, ssDaughterPerHead, ssDaughterName]

	// ---- Array for sssDaughter Calculations ----
	sssDaughterVal= parseInt(sssDaughter.value)
	sssDaughterPerHead = sssDaughterPart / sssDaughterVal
	sssDaughterName = sssDaughter.name

	sssDaughterArr = [sssDaughterVal, sssDaughterPart, sssDaughterPerHead, sssDaughterName]

	// ---- Array for Father Calculations ----
	fatherVal = parseInt(father.value)
	fatherName = father.name
    fatherPerHead = fatherPart

	fatherArr = [fatherVal, fatherPart, fatherPerHead, fatherName] 

	// ---- Array for Mother Calculations ----
	motherVal = parseInt(mother.value)
	motherName = mother.name
    motherPerHead = motherPart
	motherArr = [motherVal, motherPart, motherPerHead, motherName] 
    
    // ---- Array For Real Sisters Calculations ----
	rSisterVal = parseInt(rSister.value)
	rSisterPerHead = rSisterPart / rSisterVal
	rSisterName = rSister.name

	rSisterArr = [rSisterVal, rSisterPart, rSisterPerHead, rSisterName]

	// ---- Array For Paternal Sisters Calculations ----
	pSisterVal = parseInt(pSister.value)
	pSisterPerHead = pSisterPart / pSisterVal
	pSisterName = pSister.name

	pSisterArr = [pSisterVal, pSisterPart, pSisterPerHead, pSisterName]

	// Maternal Brothers and sisters calculations
	mBrotherVal = parseInt(mBrother.value)	// total number of maternal brothers
	mSisterVal = parseInt(mSister.value)	// total number of maternal sisters
	mBrotherName = mBrother.name
	mSisterName = mSister.name
	totalBroSis = mBrotherVal + mSisterVal	// total number of brothers and sisters
	maternalPerHead = mBroSisPart/(totalBroSis)	// per head merath part
	mBroParts = mBrotherVal * maternalPerHead	// all brothers part
	mSisParts = mSisterVal * maternalPerHead	// all sisters part

	mBroArr = [mBrotherVal, mBroSisPart, maternalPerHead, mBrotherName]	// Maternal Brothers Array
	mSisArr = [mSisterVal, mBroSisPart, maternalPerHead, mSisterName]	// maternal sisters array

	// ---- Array For grand Father Calculations	----
	
	// grandFatherPart										// decides the total parts of all grand fathers
	grandFatherVal = parseInt(grandFather.value) 			// decides the total number of grand father(s)
	gfPerHead = grandFatherPart/grandFatherVal				// decides the total merath of per head
	gfName = grandFatherType

	gfArr = [grandFatherVal, grandFatherPart, gfPerHead, gfName]

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
	gmPerHead = grandMotherPart/grandMotherVal				// decides the total merath of per head
	gmName = grandMotherType

	gmArr = [grandMotherVal, grandMotherPart, gmPerHead, gmName]

	// If this sum (zaweAlFaroozSum) is equal to 1 or greater than 1 then all these parts are the zawe al farooz parts
	// If this sum (zaweAlFaroozSum) is greater than 1 then go to asbat
	// If this sum (zaweAlFaroozSum) is less than 1 but asbat not present then use رد کا طریقہ
	// CHECK PARTS
	zaweAlFaroozSum = husbandPart + wifePart + daughterPart + sDaughterPart + ssDaughterPart + 
						sssDaughterPart + fatherPart + motherPart + rSisterPart + pSisterPart 
						+ mBroSisPart + grandFatherPart + grandMotherPart + mBroSisPart

	// conver the zaweAlFaroozSum to fraction to find the exact value of its sum
	zaweAlFaroozSum = new Fraction(zaweAlFaroozSum)
	
	zaweAlFaroozArr = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
		motherArr, rSisterArr, pSisterArr, mSisArr, mBroArr, gfArr, gmArr ]
	
	// Put only the available relatives in zaweAlFaroozArr array to selectedZaweAlFaroozArr array
	for ( let i = 0, z = 0; z < zaweAlFaroozArr.length; z++ ) {
		if ( zaweAlFaroozArr[z][0] !== 0 && zaweAlFaroozArr[z][1] !== zero ) {

			selectedZaweAlFaroozArr[i] = zaweAlFaroozArr[z]
			// console.log(`selectedZaweAlFaroozArr[${i}] = ${selectedZaweAlFaroozArr[i]}}`)
			zaweAlFaroozDenominatorArr[i] = parseInt(selectedZaweAlFaroozArr[i][1].denominator())
			console.log(`zaweAlFaroozDenominatorArr[${i}] = ${zaweAlFaroozDenominatorArr[i]}`)

			// check for second LCM
			if ( selectedZaweAlFaroozArr[i][0] > 1) {
				secondLCM = true
			}

			i++
		} 
	}

	
	// check to solve the problem 
	if (parseFloat(zaweAlFaroozSum) === 1 || parseFloat(zaweAlFaroozSum) > 1) {
		// if zaweAlFaroozSum is greater than 1 or equal to 1 then solve the zaweAlFaroozSum problem and the parts are their parts
		console.log(`Solve zawe al farooz and these are their parts`)

		
		zaweAlFarooz1stLCM = nerdamer(`lcm(${zaweAlFaroozDenominatorArr})`) // First LCM
		console.log(`zaweAlFarooz1stLCM = ${zaweAlFarooz1stLCM}`)
		console.log(`secondLCM = ${secondLCM}`)

		
		if(!secondLCM) {			
			// outputParts = 24
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

		// console.table(`outputArray: ${outputArray}`)

	} else if (parseFloat(zaweAlFaroozSum) < 1 && asbatExists) {
		// if zaweAlFaroozSum is Less than 1 and asbat are present in the first page of interface, 
		// then first solve the zaweAlFarooz problem and then asbat problem
		console.log(`calculate zawe al farooz and then asbat`)
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
	


	// -----------------------------------
	// ---- Zawe Al Farooz Ends Here ----
	// -----------------------------------
	
	// ---- Array For Real Brothers Calculations ----
	rBrotherVal = parseInt(rBrother.value)
	rBrotherPerHead = rBrotherPart / rBrotherVal
	rBrotherName = rBrother.name

	rBrotherArr = [rBrotherVal, rBrotherPart, rBrotherPerHead, rBrotherName]

	// ---- Array For Paternal Sisters Calculations ----
	pBrotherVal = parseInt(pBrother.value)
	pBrotherPerHead = pBrotherPart / pBrotherVal
	pBrotherName = pBrother.name

	pBrotherArr = [pBrotherVal, pBrotherPart, pBrotherPerHead, pBrotherName]

	// ---- Array for son Calculations ----
	sonVal= parseInt(son.value)
	sonPerHead = sonPart / sonVal
	sonName = son.name

	sonArr = [sonVal, sonPart, sonPerHead, sonName]

	// ---- Array for sSon Calculations ----
	sSonVal= parseInt(sSon.value)
	sSonPerHead = sSonPart / sSonVal
	sSonName = sSon.name

	sSonArr = [sSonVal, sSonPart, sSonPerHead, sSonName]

	// ---- Array for ssSon Calculations ----
	ssSonVal= parseInt(ssSon.value)
	ssSonPerHead = ssSonPart / ssSonVal
	ssSonName = ssSon.name

	ssSonArr = [ssSonVal, ssSonPart, ssSonPerHead, ssSonName]

	// ---- Array for sssSon Calculations ----
	sssSonVal= parseInt(sssSon.value)
	sssSonPerHead = sssSonPart / sssSonVal
	sssSonName = sssSon.name

	sssSonArr = [sssSonVal, sssSonPart, sssSonPerHead, sssSonName]

	availableRelatives = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
		motherArr, rSisterArr, pSisterArr, mSisArr, mBroArr, gfArr, gmArr, rBrotherArr, pBrotherArr, 
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

	
}

