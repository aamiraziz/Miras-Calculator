/*
	* This is the main entry point file 
	* This file includes many javascript files
	* In this file maximum variables are declared
	* Khanqah Rehmkariya Imdadia
	* Copyright (c) 2023 ~ 2123
	* Development Started on August 2022
	* Documentation Started on January 03, 2023
*/

/* Include Many js files */
include('helpers/outputValues.js')
include('helpers/elementIds.js')
include('helpers/eventListeners.js')
include('helpers/existance.js')
include('helpers/grandParentType.js')
include('helpers/calculateParts.js')
include('helpers/showParts.js')
include('helpers/solve.js')
include('helpers/filterRelatives.js')
include('helpers/mainLogic.js')
// include('test/testoutputfile.js')

// Function to include many javascript files
function include(file) {

    let script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

// In Start Asbaat Chart will not be visible until certain condition(s) match
// when Asbaat Chart is visible then the main form will be hidden
function hideAsbaatChart() {
	asbaatChart.style.display = 'none'; 
}

let oneByTwo = new Frac(1, 2)		//	Fraction(1).div(2)
let oneByThree = new Frac(1, 3)		//	Fraction(1).div(3)
let twoByThree = new Frac(2, 3) 	//	Fraction(2).div(3)
let oneByFour = new Frac(1, 4) 		//	Fraction(1).div(4)
let oneBySix = new Frac(1, 6) 		//	Fraction(1).div(6)
let oneByEight = new Frac(1, 8) 	//	Fraction(1).div(8)
let zero = new Frac(0, 1) 			//	Fraction(0).div(1)
// let one = new Frac(1, 1) 			//	Fraction(1).div(1)

let imam = "hanfi"

// few check variables, mirath parts and parent types
let childernExists, sonCheck, sSonCheck, ssSonCheck, sssSonCheck, ikhwaExists, myNum, grandFatherType, grandMotherType

let husbandPart = new Frac(0, 1), wifePart = new Frac(0, 1), 
	daughterPart = new Frac(0, 1), sonPart = new Frac(0, 1),
	sDaughterPart = new Frac(0, 1), sSonPart = new Frac(0, 1),
	ssDaughterPart = new Frac(0, 1), ssSonPart = new Frac(0, 1),
	sssDaughterPart = new Frac(0, 1), sssSonPart = new Frac(0, 1),
	fatherPart = new Frac(0, 1), motherPart = new Frac(0, 1), 
	rSisterPart = new Frac(0, 1), rBrotherPart = new Frac(0, 1), 
	pSisterPart = new Frac(0, 1), pBrotherPart = new Frac(0, 1), 
	mSisterPart = new Frac(0, 1), mBroSisPart = new Frac(0, 1),
	grandFatherPart = new Frac(0, 1), grandMotherPart = new Frac(0, 1),
	remainingPart = new Frac(0, 1) //	remaining part from 1 which will be distribiuted among asbaat or etc

// For Asbat Check
let rSisterAsba = false, pSisterAsba = false, fatherAsba = false, grandFatherAsba = false, daughterAsba = false,
        sDaughterAsba = false, ssDaughterAsba = false, sssDaughterAsba = false, 
		rBrotherAsba = false, pBrotherAsba = false, sonAsba = false, sSonAsba = false, ssSonAsba = false, sssSonAsba = false

// varibales to create array for every relative
let husbandArr, husbandVal, husbandName = husband.name,	// For husband
	wifeArr, wifeVal, wifeName = wife.name,				// For wife
	daughterArr, daughterVal, daughterName = daughter.name,	// For Daughter(s)
	sDaughterArr, sDaughterVal, sDaughterName = sDaughter.name, // For sDaughter(s)
	ssDaughterArr, ssDaughterVal, ssDaughterName = ssDaughter.name,	// For ssDaughter(s)
	sssDaughterArr, sssDaughterVal, sssDaughterName = sssDaughter.name,	// For sssDaughter(s)	
	fatherArr, fatherVal, fatherName = father.name,	// For Father
	motherArr, motherVal, motherName = mother.name,	// For Mother
	rSisterArr, rSisterVal, rSisterName = rSister.name, // For Real Sister(s)
	pSisterArr, pSisterVal, pSisterName = pSister.name, // For Paternal Sister(s)
    mSisArr, totalBroSis, mBroSisName = "Maternal Brother(s) / Sister(s)", // For maternal brothers / sisters array
	gfArr, grandFatherVal, gfName, 		// For grand father's array -- done	
	gmArr, grandMotherVal, gmName,		// For grand mother's array -- done
	// above are zawe al farooz		
	rBrotherArr, rBrotherVal, rBrotherName = rBrother.name,	// For Real Brother(s)
	pBrotherArr, pBrotherVal, pBrotherName = pBrother.name,	// For Paternal Brother(s)
	sonArr, sonVal, sonName = son.name,	// For son(s)	
	sSonArr, sSonVal, sSonName = sSon.name,	// For sSon(s)
	ssSonArr, ssSonVal, ssSonName = ssSon.name,	// For ssSon(s)
	sssSonArr, sssSonVal, sssSonName = sssSon.name,	// For sssSon(s)
	asbaatChartArr


// this array will contain all zawe al farooz 
let zaweAlFaroozArr = [[]]

// this will contain only available zawe al farooz
let selectedZaweAlFaroozArr = [[]], zaweAlFarooz1stLCM, zaweAlFarooz2ndLCM, zaweAlFarooz2ndLCMArr = []

// this array will contain the denominator of all zawe al farooz
let zaweAlFaroozDenominatorArr = []

// this  array will contain the sum of all zawe al farooz parts
let zaweAlFaroozSum // = new Frac(0, 1)
let tempNumerator = 0, tempDenominator = 0

// this variable will become true when value of any relative is greater than 1
let secondLCM = false

// this contains only the asbat of first page in interface.
let asbatExists

/*
	* These counters will use to find total number of females in asbaat
	* When male and female are togather.
	* For female it will increment by one
	* For male it will increment by two
	* The totalFemales will be the sum of both.
*/
let counterMale = 0, counterFemale = 0, totalFemales

// this variable will hold the part when male and female simultaneously become Asba
let perAsbaSiblingPart = new Frac(0, 1)

// This variable will hold the part of persibling in Zawe Al Farooz
let perZAFSiblingPart = new Frac(0, 1)

// this will contain only available Asbaat
let selectedAsbaatArr = [[]]

// this is the 2D array which will hold the details of all available relatives in form of first page
let availableRelativesArr = [[]]

// this is also 2D array which will contain the details of all present relatives in availableRelatives
let selectedRelativesArr = [[]], selectedRelatives1stLCM, selectedRelatives2ndLCM, selectedRelatives2ndLCMArr = []

// this array will contain the denominator of all zawe al farooz And Asbaat in selectedRelativesArr
let selectedRelativesDenominatorArr = []

// these flag will use to find the existance of father/grandFather in Selected ZAF and Selected Asbaat
let flag1 = false, flag2 = false

// this flag will become true when ZAF array is empty
let flag3 = false

// output variables
let outputParts	= 0	// shows the total number of output parts
let outputArray	= [[]]	// shows the total number of output rows in the output table
let outputArrayLength = 0	// shows the total number of elements in the outputArray

// Asbaat Chart
let asbaFromChart

hideAsbaatChart()

// Submit Button Function
submitBtn.addEventListener('click', function() {
    
	showParts()
	mainLogic()
	displayOutput()
	
})