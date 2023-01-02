/* Include Many js files */
// include('helpers/outputValues.js');
include('helpers/elementIds.js');
include('helpers/eventListeners.js');
include('helpers/existance.js');
include('helpers/grandParentType.js');
include('helpers/calculateParts.js');
include('helpers/showParts.js'); 
include('helpers/testoutputfile.js');

// Function to include many javascript files
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

let oneByTwo = new Frac(1, 2)		//	Fraction(1).div(2)
let oneByThree = new Frac(1, 3)		//	Fraction(1).div(3)
let twoByThree = new Frac(2, 3) 	//	Fraction(2).div(3)
let oneByFour = new Frac(1, 4) 		//	Fraction(1).div(4)
let oneBySix = new Frac(1, 6) 		//	Fraction(1).div(6)
let oneByEight = new Frac(1, 8) 	//	Fraction(1).div(8)

let imam = "hanfi"

// few check variables, mirath parts and parent types
let childernExists, sonCheck, sSonCheck, ssSonCheck, sssSonCheck, husbandPart, wifePart, daughterPart, 
	sDaughterPart, ssDaughterPart, sssDaughterPart, fatherPart, ikhwaExists, motherPart, rSisterPart, 
	pSisterPart, mBroSisPart, mSisterPart, myNum, grandFatherType, grandFatherPart, grandMotherType, 
	grandMotherPart

// this array will contain all zawe al farooz 
let zaweAlFaroozArr = [[]]

// this will contain only available zawe al farooz
let selectedZaweAlFaroozArr = [[]]

// this array will contain the denominator of all zawe al farooz
let zaweAlFaroozDenominatorArr = [], zaweAlFarooz1stLCM, zaweAlFarooz2ndLCM, zaweAlFarooz2ndLCMArr = []

// this  array will contain the sum of all zawe al farooz parts
let zaweAlFaroozSum, tempNumerator = 0, tempDenominator = 0

// this variable will become true when value of any relative is greater than 1
let secondLCM = false

// this contains only the asbat of first page in interface.
let asbatExists

// this is the 2D array which will hold the details of all available relatives in form of first page
let availableRelatives = [[]]

// this is also 2D array which will contain the details of all present relatives in availableRelatives
let selectedRelatives = [[]]

// output variables
let outputParts	= 0	// shows the total number of output parts
let outputArray	= [[]]	// shows the total number of output rows in the output table
let outputArrayLength = 0	// shows the total number of elements in the outputArray

// the value of these variables are in intergers or float
let husbandArr, husbandVal, husbandPerHead, husbandName,	// For husband
	wifeArr, wifeVal, wifePerHead, wifeName,				// For wife
	daughterArr, daughterVal, daughterPerHead, daughterName,	// For Daughter(s)
	sDaughterArr, sDaughterVal, sDaughterPerHead, sDaughterName, // For sDaughter(s)
	ssDaughterArr, ssDaughterVal, ssDaughterPerHead, ssDaughterName,	// For ssDaughter(s)
	sssDaughterArr, sssDaughterVal, sssDaughterPerHead, sssDaughterName,	// For sssDaughter(s)	
	fatherArr, fatherVal, fatherPerHead, fatherName,	// For Father
	motherArr, motherVal, motherPerHead, motherName,	// For Mother
	rSisterArr, rSisterVal, rSisterPerHead, rSisterName, // For Real Sister(s)
	pSisterArr, pSisterVal, pSisterPerHead, pSisterName, // For Paternal Sister(s)
	mBroArr, mBrotherVal, mBroParts, mBrotherName, totalBroSis, maternalPerHead, // For maternal brothers array
	mSisArr, mSisterVal, mSisParts, mSisterName, // For maternal sisters array
	gfArr, grandFatherVal, gfPerHead, gfName, 		// For grand father's array -- done	
	gmArr, grandMotherVal, gmPerHead, gmName,		// For grand mother's array -- done
	// above are zawe al farooz		
	rBrotherArr, rBrotherVal, rBrotherPerHead, rBrotherName,	// For Real Brother(s)
	pBrotherArr, pBrotherVal, pBrotherPerHead, pBrotherName,	// For Paternal Brother(s)
	sonArr, sonVal, sonPerHead, sonName,	// For son(s)	
	sSonArr, sSonVal, sSonPerHead, sSonName,	// For sSon(s)
	ssSonArr, ssSonVal, ssSonPerHead, ssSonName,	// For ssSon(s)
	sssSonArr, sssSonVal, sssSonPerHead, sssSonName	// For sssSon(s)

// this is the 2D array which will hold the details of all available relatives in form of first page
// let availableRelatives  // = [ husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr,
						//	motherArr, rSisterArr, pSisterArr, mSisArr, mBroArr, gfArr, gmArr, rBrotherArr, pBrotherArr, 
						//	sonArr, sSonArr, ssSonArr, sssSonArr ]
						 

// Submit Button Function
submitBtn.addEventListener('click', function() {
    
	showParts()   
    outputAllValues()	// Temporary for testing and debigging purposes
})


/* 

zaweAlFaroozArr = [husbandArr, wifeArr, daughterArr, sDaughterArr, ssDaughterArr, sssDaughterArr, fatherArr, motherArr, 
	rSisterArr, pSisterArr, mBroArr, mSisArr, gfArr, gmArr]

// Variables that store Element IDs 
let submitBtn, method, husband, husbandText, wife, wifeText, rSister, pSister, mSister, rBrother, pBrother, mBrother,
	father, mother, grandFather, grandMother, daughter, sDaughter, ssDaughter, sssDaughter, son, sSon, ssSon, sssSon,
	gfType, backBtnGF, ff, fff, ffff, pType, gmType, backBtnGM, rmhanbali, rmmaliki, mm, mf, mmm, mfm, mff, mmmm, 
	mmfm, mmff, mfff
*/

							// [husbandArr, husbandVal, husbandPerHead, husbandName],
							// [wifeArr, wifeVal, wifePerHead, wifeName],
							// [daughterArr, daughterVal, daughterPerHead, daughterName],
							// [sDaughterArr, sDaughterVal, sDaughterPerHead, sDaughterName],
							// [ssDaughterArr, ssDaughterVal, ssDaughterPerHead, ssDaughterName],
							// [ sssDaughterVal, sssDaughterPerHead, sssDaughterName],
							// [ fatherVal, fatherPerHead, fatherName],
							// [ motherVal, motherPerHead, motherName],
							// [ rSisterVal, rSisterPerHead, rSisterName],
							// [ pSisterVal, pSisterPerHead, pSisterName],
							// [ mSisterVal, maternalPerHead, mSisterName, totalBroSis, mSisParts],
							// [ mBrotherVal, maternalPerHead, mBrotherName, totalBroSis, mBroParts],
							// [gfPerHead, gfName],
							// [grandMotherVal, gmPerHead, gmName],

							// [rBrotherVal, rBrotherPerHead, rBrotherName],
							// [pBrotherPerHead, pBrotherName],
							// [sonVal, sonPerHead, sonName],
							// [sSonVal, sSonPerHead, sSonName],
							// [ssSonVal, ssSonPerHead, ssSonName],
							// [sssSonVal, sssSonPerHead, sssSonName]