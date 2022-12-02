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
  
      //father.value = 0
      if (father.checked === true) {
      
          father.value = 1
          grandFather.value = 0
          
          // Hides Grand Father/Mother option
          grandFather.style.display='none'
          grandFatherText.style.display='none'
      }
      
      if (father.checked === false) {
      
          father.value = 0
          
          // Shows Grand Father option
          grandFather.style.display='inline'
          grandFatherText.style.display='inline'

          // Shows Grand Mother option
          grandMother.style.display='inline'
          grandMotherText.style.display='inline'
      }

      if (mother.checked === true && father.checked === true) {

          mother.value = 1
          grandMother.value = 0

          // Hides Grand Mother option
          grandMother.style.display='none'
          grandMotherText.style.display='none'
      }
  
  })
  
  // Event Listener on Mother's CheckBox
  // temporary commented
  mother.addEventListener('change', function() {
  
      if (mother.checked === false) {
        mother.value = 0
      }

      if (mother.checked === true) {
        mother.value = 1
      }

      if (mother.checked === true && father.checked === true) {
          mother.value = 1
          grandMother.value = 0

          // Hides Grand Mother option
          grandMother.style.display='none'
          grandMotherText.style.display='none'
      }

      if (mother.checked === false) {   

        mother.value = 0

        // Shows Grand Mother option
        grandMother.style.display='inline'
        grandMotherText.style.display='inline'
      }
  
  }) 
  
  // Event Listener on Grand Father's CheckBox
  grandFather.addEventListener('change', function() {
  
    if (grandFather.checked === false) {
      grandFather.value = 0
    }

      if (grandFather.checked === true) {
          grandFather.value = 1
          
          // Hides Father option
          father.style.display='none'
          fatherText.style.display='none'

          pType.style.display = 'none'
          gfType.style.display='block'          
      }
      
      if (grandFather.checked === false) {
          grandFather.value = 0
          
          // Shows Father option
          father.style.display = 'inline'
          fatherText.style.display = 'inline'

          gfType.style.display='none'
        //   ff.checked = true
      }
  
  })
  
  // Event Listener on Grand Father's Back Button
  backBtnGF.addEventListener('click', function() {
    gfType.style.display = 'none'  
    pType.style.display = 'block'
  })
  
  // Event Listener on Grand Mother's CheckBox
  grandMother.addEventListener('change', function() {

    // Error message for no selection
    gmTypeError.style.display = 'none'

    // disappearance of submit button
    if ( grandMother.checked === true) {
      submitBtn.style.display = 'none'
    }

    // if mother is checked then no grand mother related to mother will appear
    if ( mother.checked === true) {
      gmMother.style.display = 'none'
    }

    // if mother is unchecked
    if ( mother.checked === false) {
      gmMother.style.display = 'block'

      // uncheck all options in this div
      mm.checked = false
      mmm.checked = false
      mmmm.checked = false
    }

    // if father is checked then no grand mother related to father will appear
    if ( father.checked === true) {
      gmFather.style.display = 'none'
    }

    // if father is unchecked
    if ( father.checked === false) {
      gmFather.style.display = 'block'

      // uncheck all options in this div
      mf.checked = false
      mfm.checked = false
      mff.checked = false

      mmfm.checked = false
      mmff.checked = false
      mfff.checked = false
    }

    if (grandMother.checked === false) {
      grandMother.value = 0
    }
        
    if (grandMother.checked === true) {
        grandMother.value = 1

        //mother.checked = false
        //mother.value = 0
        
        // Hides Mother option
        //mother.style.display='none'
        //motherText.style.display='none'

        pType.style.display = 'none'
        gmType.style.display = 'block'
    }
    
    // if (grandMother.checked === false) {
    //     grandMother.value = 0
        
    //     // Shows Mother option
    //     mother.style.display = 'inline'
    //     motherText.style.display = 'inline'
    // }
  
  })

  // Event Listener on Grand Mother's Back Button
  backBtnGM.addEventListener('click', function() {

    // if father and mother is not selected then do not go back 
    // provide an error to select grandmother type
    if (mother.checked === false && father.checked === false && grandMother.checked === true && 
      mm.checked === false && mmm.checked === false && mmmm.checked === false && mf.checked === false && 
      mfm.checked === false && mff.checked === false && mmfm.checked === false && mmff.checked === false 
      && mfff.checked === false) {

        gmTypeError.style.display = 'block'
        gmTypeError.style.color = 'Red'

    } else {
      gmType.style.display = 'none'  
      pType.style.display = 'block'
      submitBtn.style.display = 'block'
    }

    // gmType.style.display = 'none'  
    // pType.style.display = 'block'
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

  // Father's Father eventListener --- Not Needed This time
//   ff.addEventListener('change', function() {

//     if (ff.checked === true) {

//         fff.style.display = 'none'
//         ffff.style.display = 'none'

//     }

//     if (ff.checked === false) {

//         fff.style.display = 'inline'
//         ffff.style.display = 'inline'

//     }

//     if (fff.checked === true) {

//         ff.style.display = 'none'
//         ffff.style.display = 'none'

//     }

//     if (fff.checked === false) {

//         ff.style.display = 'inline'
//         ffff.style.display = 'inline'

//     }

//     if (ffff.checked === true) {

//         ff.style.display = 'none'
//         fff.style.display = 'none'
        
//     }

//     if (ffff.checked === false) {

//         ff.style.display = 'inline'
//         fff.style.display = 'inline'
        
//     }

//   })