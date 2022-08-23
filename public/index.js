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

let childernCheck, sonCheck, husbandPart, wifePart, daughterPart


// Submit Button Function
submitBtn.addEventListener('click', function() {
    
    childernCheck = childernExists() 
	sonCheck = sonExists()
	showParts()   
    outputAllValues()
})

// Show Parts
function showParts() {
	// Husband
	husbandPart = calculateHusbandPart()
	wifePart = calculateWifePart()
	daughterPart = calculateDaughterPart()
}

//calculates Daughter part
function calculateDaughterPart() {
    if (parseInt(daughter.value) === 1 && !sonCheck) {
        return 1/2
    }

    if (parseInt(daughter.value) > 1 && !sonCheck) {
        return 2/3
    }
}