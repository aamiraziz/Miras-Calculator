/* Include Many js files */
include('public/outputValues.js');
include('public/elementIds.js');
include('public/eventListeners.js');
include('public/calculateParts.js');
include('public/existance.js');

// Function to include many javascript files
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

let childernExists, sonCheck, sSonCheck, ssSonCheck, sssSonCheck, husbandPart, wifePart, daughterPart, 
	sDaughterPart, ssDaughterPart, sssDaughterPart, fatherPart, ikhwaExists, motherPart, rSisterPart, 
	pSisterPart, mBroSisPart, mSisterPart, myNum

// Submit Button Function
submitBtn.addEventListener('click', function() {
     
	showParts()   
    outputAllValues()
})

// Show Parts
function showParts() {

	// Existance
    childernExists = childernCheck()
	ikhwaExists = ikhwaCheck()

	// check Math.js
	//myNum = math.evaluate(1/3 + 1/3 + 1/3)
	//console.log(`basic usage ${printRatio(math.fraction(0.125))}`)
	//console.log(myNum) 


	// Calculates Husband Part
	husbandPart = calculateHusbandPart()
	//husbandPart = Math.fraction(husbandPart)

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
	
}

