/* Include Many js files */
include('public/outputValues.js');
include('public/elementIds.js');
include('public/eventListeners.js');
include('public/calculateParts.js');
include('public/existance.js');
include('public/grandParentType.js');

// Function to include many javascript files
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

/* // Variables that store Element IDs 
let submitBtn, method, husband, husbandText, wife, wifeText, rSister, pSister, mSister, rBrother, pBrother, mBrother,
	father, mother, grandFather, grandMother, daughter, sDaughter, ssDaughter, sssDaughter, son, sSon, ssSon, sssSon,
	gfType, backBtnGF, ff, fff, ffff, pType, gmType, backBtnGM, rmhanbali, rmmaliki, mm, mf, mmm, mfm, mff, mmmm, 
	mmfm, mmff, mfff
*/

let imam = "hanfi"

// few check variables, mirath parts and parent types
let childernExists, sonCheck, sSonCheck, ssSonCheck, sssSonCheck, husbandPart, wifePart, daughterPart, 
	sDaughterPart, ssDaughterPart, sssDaughterPart, fatherPart, ikhwaExists, motherPart, rSisterPart, 
	pSisterPart, mBroSisPart, mSisterPart, myNum, grandFatherType, grandFatherPart, grandMotherType, grandMotherPart

/*----------------------------------------------------------------

let arr = [All value types and its values]
let arr2 = [only types that has greater than 0 values, make it through loop]
*/

// the value of these variables are in intergers or float
let mBroSisArr, mBrotherVal, mSisterVal, totalBroSis, maternalPerHead, sisParts, broParts, // For maternal brothers and sisters array
	gmArr, grandMotherVal, gmPerHead, 		// For grand mother's array -- done
	husbandArr, husbandVal, husbandName,	// For husband
	wifeArr, wifeVal, wifePerHead, wifeName,// For wife
	rSisterArr, rSisterVal, rSisterPerHead, rSisterName, // For Real Sister(s)
	pSisterArr, pSisterVal, pSisterPerHead, pSisterName // For Paternal Sister(s)

// Submit Button Function
submitBtn.addEventListener('click', function() {
    
	showParts()   
    outputAllValues()	// Temporary for testing and debigging purposes
})

// Show Parts
function showParts() {

	// Existance
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

	// calculates Father's Part
	fatherPart = calculateFatherPart()

	// Calculates Mother's part
	motherPart = calculateMotherPart()

	// Calculates Real Sister's Part
	rSisterPart = calculateRSisterPart()

	// Calculates Paternal Sister's Part
	pSisterPart = calculatePSisterPart()

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

	// Maternal Brothers and sisters calculations
	mBrotherVal = parseInt(mBrother.value)	// total number of maternal brothers
	mSisterVal = parseInt(mSister.value)	// total number of maternal sisters
	totalBroSis = mBrotherVal + mSisterVal	// total number of brothers and sisters
	maternalPerHead = mBroSisPart/(totalBroSis)	// per head merath part
	broParts = mBrotherVal * maternalPerHead	// all brothers part
	sisParts = mSisterVal * maternalPerHead		// all sisters part
	mBroSisArr = [mBrotherVal, mSisterVal, mBroSisPart, totalBroSis, maternalPerHead, broParts, sisParts]

	// Array For Grand Mother Calculations

	// decides the total number of grand mother(s)
	if (grandMotherType === null) {
		grandMotherVal = 0
	} else {
		grandMotherVal = grandMotherType.length
	}
	// console.log(`grandMotherVal is: ${grandMotherVal}`)
	
	// grandMotherVal 										// decides the total number of grand mother(s)
	// grandMotherPart										// decides the total parts of all grand mothers
	gmPerHead = grandMotherPart/grandMotherVal			// decides the total merath of per head

	gmArr = [grandMotherVal, grandMotherPart, gmPerHead, grandMotherType]

	// Array For Husband Calculations
	husbandVal = parseInt(husband.value)
	husbandName = husband.name

	husbandArr = [husbandVal, husbandPart, husbandName]

	// Array For wife Caculations
	wifeVal = parseInt(wife.value)
	wifeName = wife.name
	wifePerHead = wifePart / wifeVal

	wifeArr = [wifeVal, wifePart, wifePerHead, wifeName]

	// Array For Real Sisters Calculations
	rSisterVal = parseInt(rSister.value)
	rSisterPerHead = rSisterPart / rSisterVal
	rSisterName = rSister.name

	rSisterArr = [rSisterVal, rSisterPart, rSisterPerHead, rSisterName]

	// Array For Paternal Sisters Calculations
	pSisterVal = parseInt(pSister.value)
	pSisterPerHead = pSisterPart / pSisterVal
	pSisterName = pSister.name

	pSisterArr = [pSisterVal, pSisterPart, pSisterPerHead, pSisterName]

	
	
}

