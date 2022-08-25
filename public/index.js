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

let childernCheck, sonCheck, sSonCheck, ssSonCheck, sssSonCheck, husbandPart, wifePart, daughterPart, 
	sDaughterPart, ssDaughterPart, sssDaughterPart

// Submit Button Function
submitBtn.addEventListener('click', function() {
     
	showParts()   
    outputAllValues()
})

// Show Parts
function showParts() {

	// Existance
    childernCheck = childernExists()
	// sonCheck = sonExists() // sonExists returns true if son and his offspring exists
	// sSonCheck = sSonExists() // sSonExists returns true if Son's son and his offspring exists
	// ssSonCheck = ssSonExists() // ssSonExists returns true if Son's Son's son and his offspring exists
	// sssSonCheck = sssSonExists() // ssSonExists returns true if Son's Son's Son's son and his offspring exists


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
}

