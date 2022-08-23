/* Include Many js files */
include('public/outputValues.js');
include('public/elementIds.js');
include('public/eventListeners.js');


let childern
let husbandPart


// Submit Button Function
submitBtn.addEventListener('click', function() {

    // eligibleRelativesInPesenceOfSon()    
    // eligibleRelativesInPesenceOfsSon()
    // eligibleRelativesInPesenceOfssSon()
    // eligibleRelativesInPesenceOfsssSon()
    // eligibleRelativesInPresenceOfFather()

    childern = childernExists() 
	showParts()   
    outputAllValues()
})

// Function to include many javascript files
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

// check offsprings
function childernExists() {
	if (parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 
		&& parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 0 && parseInt(sssDaughter.value) === 0 ) {
		console.log ("childern does not exists")
		return false
	} else {
		console.log("childern exists")
		return true
	}
}

// Define Husband Part
function showHusbandPart() {
	if (parseInt(husband.value) === 1) {
		if(childern) {
			return 1/4
		} else {
			return 1/2
		}
	} else {
		return 0
	}
}

// Show Parts
function showParts() {
	// Husband
	husbandPart = showHusbandPart()
}
