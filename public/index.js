/* Include Many js files */
include('public/outputValues.js');
include('public/elementIds.js');
include('public/eventListeners.js');
include('public/existance.js');
include('public/grandParentType.js');
include('public/calculateParts.js');
include('public/showParts.js'); 
include('public/outputValues.js');

// Function to include many javascript files
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

let oneByTwo = Fraction(1).div(2)
let oneByThree = Fraction(1).div(3)
let twoByThree = Fraction(2).div(3)
let oneByFour = Fraction(1).div(4)
let oneBySix = Fraction(1).div(6)
let oneByEight = Fraction(1).div(8)

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
	pSisterPart, mBroSisPart, mSisterPart, myNum, grandFatherType, grandFatherPart, grandMotherType, 
	grandMotherPart


// If this sum (zaweAlFaroozSum) is equal to 1 or greater than 1 then all these parts are the zawe al farooz parts
// If this sum (zaweAlFaroozSum) is greater than 1 then go to asbat
// If this sum (zaweAlFaroozSum) is less than 1 but asbat not present then use رد کا طریقہ
let zaweAlFaroozSum
let asbat = false

// the value of these variables are in intergers or float
let husbandArr, husbandVal, husbandPerHead, husbandName,	// For husband
	wifeArr, wifeVal, wifePerHead, wifeName,// For wife
	daughterArr, daughterVal, daughterPerHead, daughterName, // For Daughter(s)
	sDaughterArr, sDaughterVal, sDaughterPerHead, sDaughterName, // For sDaughter(s)
	ssDaughterArr, ssDaughterVal, ssDaughterPerHead, ssDaughterName, // For ssDaughter(s)
	sssDaughterArr, sssDaughterVal, sssDaughterPerHead, sssDaughterName, // For sssDaughter(s)	
	fatherArr, fatherVal, fatherPerHead, fatherName, // For Father
	motherArr, motherVal, motherPerHead, motherName, // For Mother
	rSisterArr, rSisterVal, rSisterPerHead, rSisterName, // For Real Sister(s)
	pSisterArr, pSisterVal, pSisterPerHead, pSisterName, // For Paternal Sister(s)
	mBroArr, mSisArr, mBrotherVal, mSisterVal, totalBroSis, maternalPerHead, mSisParts, mBroParts, // For maternal brothers and sisters array
	gfArr, grandFatherVal, gfPerHead, 		// For grand father's array -- done	
	gmArr, grandMotherVal, gmPerHead, 		// For grand mother's array -- done
			
	rBrotherArr, rBrotherVal, rBrotherPerHead, rBrotherName, // For Real Brother(s)
	pBrotherArr, pBrotherVal, pBrotherPerHead, pBrotherName, // For Paternal Brother(s)
	sonArr, sonVal, sonPerHead, sonName, // For son(s)	
	sSonArr, sSonVal, sSonPerHead, sSonName, // For sSon(s)
	ssSonArr, ssSonVal, ssSonPerHead, ssSonName, // For ssSon(s)
	sssSonArr, sssSonVal, sssSonPerHead, sssSonName // For sssSon(s)

// Submit Button Function
submitBtn.addEventListener('click', function() {
    
	showParts()   
    outputAllValues()	// Temporary for testing and debigging purposes
})

