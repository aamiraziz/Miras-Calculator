
// Calculates Husband Part
function calculateHusbandPart() {
	if (parseInt(husband.value) === 1) {
		if(childernCheck) {
			return 1/4
		} else {
			return 1/2
		}
	} else {
		return 0
	}
}

// Calculates Wife Part
function calculateWifePart() {
	if (parseInt(wife.value) > 0) {
		if(childernCheck) {
			return 1/8
		} else {
			return 1/4
		}
	} else {
		return 0
	}
}

