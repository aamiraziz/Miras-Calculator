// let  = document.getElementById('')

// Submit Button
let submitBtn = document.getElementById('submitBtn')

// Spouse
let husband = document.getElementById('husband')	 // Husband
let husbandText = document.getElementById("husbandText")
let wife = document.getElementById('wife')		 // Wife
let wifeText = document.getElementById('wifeText')

// Sisters
let rSister = document.getElementById('rSister')	 // Real Sister(s)
let pSister = document.getElementById('pSister')	 // Paternal Sister(s)
let mSister = document.getElementById('mSister')	 // Maternal Sister(s)
// let rSisterText = document.getElementById('rSisterText')
// let pSisterText = document.getElementById('pSisterText')
// let mSisterText = document.getElementById('mSisterText')

// Bothers
let rBrother = document.getElementById('rBrother')	 // Real Brother(s)
let pBrother = document.getElementById('pBrother') 	 // Paternal Brother(s)
let mBrother = document.getElementById('mBrother') 	 // Maternal Brother(s)
// let rBrotherText = document.getElementById('rBrotherText')
// let pBrotherText = document.getElementById('pBrotherText')
// let mBrotherText = document.getElementById('mBrotherText')

// Parents
let father = document.getElementById('father')		 // Father
let mother = document.getElementById('mother')		 // Mother
let grandFather = document.getElementById('grandFather') // Grand Father
let grandMother = document.getElementById('grandMother') // Grand Mother
// let fatherText = document.getElementById('fatherText')
// let grandMotherText = document.getElementById('grandMotherText')
// let grandFatherText = document.getElementById('grandFatherText')


// Female Offspring
let daughter = document.getElementById('daughter')       // Daughter
let sDaughter = document.getElementById('sDaughter')     // Son's Daughter
let ssDaughter = document.getElementById('ssDaughter')   // Son's Son's Daughter
let sssDaughter = document.getElementById('sssDaughter') // Son's Son's Son's Daughter

// Male Offspring
let son = document.getElementById('son')		 // Son
let sSon = document.getElementById('sSon')		 // Son's Son
let ssSon = document.getElementById('ssSon')		 // Son's Son's Son
let sssSon = document.getElementById('sssSon')		 // Son's Son's Son's Son

let childern
let husbandPart

// Event Listener On Husband Checkbox
husband.addEventListener('change', function() {

  if (husband.checked === true) {
  	husband.value = 1
  	wife.value = 0

	// Hides Wife option
	wife.style.display='none'
	wifeText.style.display='none'

  	// console.log(`IF STMT Wife: ${wife.value}`)
	// console.log(`IF STMT Husband: ${husband.value}`)
  } 

  if (husband.checked === false) {
	husband.value = 0
	
	// Shows Wife option
	wife.style.display='inline'
	wifeText.style.display='inline'

  	// console.log(`ELSE STMT Wife: ${wife.value}`)
	// console.log(`ELSE STMT Husband: ${husband.value}`)
  }

});

// Event Listener on Wife Number Box
wife.addEventListener('change', function() {

  if (wife.value > 0) {
	husband.checked = false
	husband.value = 0
	
	husbandText.style.display='none'
	husband.style.display='none'
	
	// console.log('Wife: ', this.value);	
	// console.log(`Wife Section Husband: ${husband.value}`)
  } else {
	husbandText.style.display='inline'
	husband.style.display='inline'
  }
  
});

// Event Listener on Father's CheckBox
father.addEventListener('change', function() {

    father.value = 0
    if (father.checked === true) {
    
        father.value = 1
        grandFather.value = 0
        grandMother.value = 0
        
        // Hides Grand Father/Mother option
        grandFather.style.display='none'
        grandFatherText.style.display='none'
        grandMother.style.display='none'
        grandMotherText.style.display='none'
        
    }
    
    if (father.checked === false) {
    
    	father.value = 0
    	
    	// Shows Grand Father/Mother option
    	grandFather.style.display='inline'
        grandMother.style.display='inline'
        grandFatherText.style.display='inline'
        grandMotherText.style.display='inline'
    	
    
    }

})

// Event Listener on Mother's CheckBox
mother.addEventListener('change', function() {

    mother.value = 0
    if (mother.checked === true ) {
        mother.value = 1
    }

})

// Event Listener on Grand Father's CheckBox
grandFather.addEventListener('change', function() {

    grandFather.value = 0
    if (grandFather.checked === true) {
        grandFather.value = 1
        
        // Hides Father option
        father.style.display='none'
        fatherText.style.display='none'
    }
    
    if (grandFather.checked === false) {
        grandFather.value = 0
        
        // Shows Father option
        father.style.display = 'inline'
        fatherText.style.display = 'inline'
    }

})

// Event Listener on Grand Mother's CheckBox
grandMother.addEventListener('change', function() {

    grandMother.value = 0
    if (grandMother.checked === true) {
        grandMother.value = 1
    }

})

// Event Listener on Son's TextBox
son.addEventListener('change', function() {

	// List of all not eligible relatives. Their values will become zero in presence of SON	
	if (son.value > 0) {
		rSister.value = 0
		pSister.value = 0
		mSister.value = 0
		
		rBrother.value = 0
		pBrother.value = 0
		mBrother.value = 0
		
		sSon.value = 0
		ssSon.value = 0
		sssSon.value = 0
		
		sDaughter.value = 0
		ssDaughter.value = 0
		sssDaughter.value = 0
		
		rSister.style.display = 'none'
		pSister.style.display = 'none'
		mSister.style.display = 'none'		
		rSisterText.style.display = 'none'
		pSisterText.style.display = 'none'
		mSisterText.style.display = 'none'
		
		rBrother.style.display = 'none'
		pBrother.style.display = 'none'
		mBrother.style.display = 'none'
		rBrotherText.style.display = 'none'
		pBrotherText.style.display = 'none'
		mBrotherText.style.display = 'none'
		
		// son.style.display = 'none'
		sSon.style.display = 'none'
		ssSon.style.display = 'none'
		sssSon.style.display = 'none'
		// sonText.style.display = 'none'		
		sSonText.style.display = 'none'
		ssSonText.style.display = 'none'
		sssSonText.style.display = 'none'
		
		// daughter.style.display = 'none'
		sDaughter.style.display = 'none'
		ssDaughter.style.display = 'none'
		sssDaughter.style.display = 'none'		
		// daughterText.style.display = 'none'		
		sDaughterText.style.display = 'none'
		ssDaughterText.style.display = 'none'
		sssDaughterText.style.display = 'none'
		
	} else {
	
		rSister.style.display = 'inline'
		pSister.style.display = 'inline'
		mSister.style.display = 'inline'		
		rSisterText.style.display = 'inline'
		pSisterText.style.display = 'inline'
		mSisterText.style.display = 'inline'
		
		rBrother.style.display = 'inline'
		pBrother.style.display = 'inline'
		mBrother.style.display = 'inline'
		rBrotherText.style.display = 'inline'
		pBrotherText.style.display = 'inline'
		mBrotherText.style.display = 'inline'
		
		sSon.style.display = 'inline'
		ssSon.style.display = 'inline'
		sssSon.style.display = 'inline'		
		sSonText.style.display = 'inline'
		ssSonText.style.display = 'inline'
		sssSonText.style.display = 'inline'
		
		sDaughter.style.display = 'inline'
		ssDaughter.style.display = 'inline'
		sssDaughter.style.display = 'inline'		
		sDaughterText.style.display = 'inline'
		ssDaughterText.style.display = 'inline'
		sssDaughterText.style.display = 'inline'
	
	}

})

// Event Listener on SON'S SON TextBox
sSon.addEventListener('change', function() {

	if (sSon.value > 0) {
		rSister.value = 0
		pSister.value = 0
		mSister.value = 0
		
		rBrother.value = 0
		pBrother.value = 0
		mBrother.value = 0
		
		son.value = 0
		ssSon.value = 0
		sssSon.value = 0
		
		ssDaughter.value = 0
		sssDaughter.value = 0
		
		rSister.style.display = 'none'
		pSister.style.display = 'none'
		mSister.style.display = 'none'		
		rSisterText.style.display = 'none'
		pSisterText.style.display = 'none'
		mSisterText.style.display = 'none'
		
		rBrother.style.display = 'none'
		pBrother.style.display = 'none'
		mBrother.style.display = 'none'
		rBrotherText.style.display = 'none'
		pBrotherText.style.display = 'none'
		mBrotherText.style.display = 'none'
		
		son.style.display = 'none'
		ssSon.style.display = 'none'
		sssSon.style.display = 'none'		
		sonText.style.display = 'none'
		ssSonText.style.display = 'none'
		sssSonText.style.display = 'none'
		
		ssDaughter.style.display = 'none'
		sssDaughter.style.display = 'none'
		ssDaughterText.style.display = 'none'
		sssDaughterText.style.display = 'none'		
				
	} else {
	
		rSister.style.display = 'inline'
		pSister.style.display = 'inline'
		mSister.style.display = 'inline'		
		rSisterText.style.display = 'inline'
		pSisterText.style.display = 'inline'
		mSisterText.style.display = 'inline'
		
		rBrother.style.display = 'inline'
		pBrother.style.display = 'inline'
		mBrother.style.display = 'inline'
		rBrotherText.style.display = 'inline'
		pBrotherText.style.display = 'inline'
		mBrotherText.style.display = 'inline'
		
		son.style.display = 'inline'
		ssSon.style.display = 'inline'
		sssSon.style.display = 'inline'		
		sonText.style.display = 'inline'
		ssSonText.style.display = 'inline'
		sssSonText.style.display = 'inline'
		
		ssDaughter.style.display = 'inline'
		sssDaughter.style.display = 'inline'
		ssDaughterText.style.display = 'inline'
		sssDaughterText.style.display = 'inline'
	
	}

})

// Event Listener on SON'S SON'S SON TextBox
ssSon.addEventListener('change', function() {

	if (ssSon.value > 0) {
	  	rSister.value = 0
	  	pSister.value = 0
	  	mSister.value = 0
	  	
	  	rBrother.value = 0
	  	pBrother.value = 0
	  	mBrother.value = 0
	  	
	  	son.value = 0
	  	sSon.value = 0
	  	sssSon.value = 0
	  	
	  	sssDaughter.value = 0 
	  	
	  	rSister.style.display = 'none'
		pSister.style.display = 'none'
		mSister.style.display = 'none'		
		rSisterText.style.display = 'none'
		pSisterText.style.display = 'none'
		mSisterText.style.display = 'none'
		
		rBrother.style.display = 'none'
		pBrother.style.display = 'none'
		mBrother.style.display = 'none'
		rBrotherText.style.display = 'none'
		pBrotherText.style.display = 'none'
		mBrotherText.style.display = 'none'
		
		son.style.display = 'none'
		sSon.style.display = 'none'
		sssSon.style.display = 'none'		
		sonText.style.display = 'none'
		sSonText.style.display = 'none'
		sssSonText.style.display = 'none'
		
		sssDaughter.style.display = 'none'
		sssDaughterText.style.display = 'none'
				
	} else {
	
		rSister.style.display = 'inline'
		pSister.style.display = 'inline'
		mSister.style.display = 'inline'		
		rSisterText.style.display = 'inline'
		pSisterText.style.display = 'inline'
		mSisterText.style.display = 'inline'
		
		rBrother.style.display = 'inline'
		pBrother.style.display = 'inline'
		mBrother.style.display = 'inline'
		rBrotherText.style.display = 'inline'
		pBrotherText.style.display = 'inline'
		mBrotherText.style.display = 'inline'
		
		son.style.display = 'inline'
		sSon.style.display = 'inline'
		sssSon.style.display = 'inline'		
		sonText.style.display = 'inline'
		sSonText.style.display = 'inline'
		sssSonText.style.display = 'inline'
		
		sssDaughter.style.display = 'inline'
		sssDaughterText.style.display = 'inline'
	
	}

})

// Event Listener on SON'S SON'S SON'S SON TextBox
sssSon.addEventListener('change', function() {

	if (sssSon.value > 0) {
	        rSister.value = 0
	        pSister.value = 0
	        mSister.value = 0
	
	        rBrother.value = 0
	        pBrother.value = 0
	        mBrother.value = 0
	
	        son.value = 0
	        sSon.value = 0
	        ssSon.value = 0	
	        
	        rSister.style.display = 'none'
		pSister.style.display = 'none'
		mSister.style.display = 'none'		
		rSisterText.style.display = 'none'
		pSisterText.style.display = 'none'
		mSisterText.style.display = 'none'
		
		rBrother.style.display = 'none'
		pBrother.style.display = 'none'
		mBrother.style.display = 'none'
		rBrotherText.style.display = 'none'
		pBrotherText.style.display = 'none'
		mBrotherText.style.display = 'none'
		
		son.style.display = 'none'
		sSon.style.display = 'none'
		ssSon.style.display = 'none'		
		sonText.style.display = 'none'
		sSonText.style.display = 'none'
		ssSonText.style.display = 'none'
				
	} else {
	
		rSister.style.display = 'inline'
		pSister.style.display = 'inline'
		mSister.style.display = 'inline'		
		rSisterText.style.display = 'inline'
		pSisterText.style.display = 'inline'
		mSisterText.style.display = 'inline'
		
		rBrother.style.display = 'inline'
		pBrother.style.display = 'inline'
		mBrother.style.display = 'inline'
		rBrotherText.style.display = 'inline'
		pBrotherText.style.display = 'inline'
		mBrotherText.style.display = 'inline'
		
		son.style.display = 'inline'
		sSon.style.display = 'inline'
		ssSon.style.display = 'inline'		
		sonText.style.display = 'inline'
		sSonText.style.display = 'inline'
		ssSonText.style.display = 'inline'
	
	}

})


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

// check offsprings
function childernExists() {
	if (parseInt(son.value) === 0 && parseInt(sSon.value) === 0 && parseInt(ssSon.value) === 0 && parseInt(sssSon.value) === 0 
		&& parseInt(daughter.value) === 0 && parseInt(sDaughter.value) === 0 && parseInt(ssDaughter.value) === 0 && parseInt(sssDaughter.value) === 0 ) {
		console.log ("childern does not exists")
		//childern = 0
		return false
	} else {
		console.log("childern exists")
		//childern = 1
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


// output All Values 
function outputAllValues() {

    document.write(`
        All Values: <br>
        Wife: ${wife.value}<br>
        Husband: ${husband.value}<br><br>

        Sisters:<br>
        Real Sister: ${rSister.value}<br>
        Paternal Sister: ${pSister.value}<br>
        Maternal Sister: ${mSister.value}<br><br>

        Brothers:<br>
        Real Brother: ${rBrother.value}<br>
        Paternal Brother: ${pBrother.value}<br>
        Maternal Brother: ${mBrother.value}<br><br>

        Parents:<br>
        Father: ${father.value}<br>
        Mother: ${mother.value}<br>
        Grand Father: ${grandFather.value}<br>
        Grand Mother: ${grandMother.value}<br><br>

        Female Offsprings:<br>
        Daughter: ${daughter.value}<br>
        Sons Daughter: ${sDaughter.value}<br>
        Sons Sons Daughter: ${ssDaughter.value}<br>
        Sons Sons Sons Daughter: ${sssDaughter.value}<br><br>

        Male Offsprings:<br>
        Son: ${son.value}<br>
        Sons Son: ${sSon.value}<br>
        Sons Sons Son: ${ssSon.value}<br>
        Sons Sons Sons Son: ${sssSon.value}<br><br>

		childern: ${childern}<br>
		HusbandPart: ${husbandPart}
    `)

}

