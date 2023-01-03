

// Output all values just for testing purpose.
function outputAllValues() {

  document.write(`
  
  <table class="table">
      <thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Relative Name:</th>
          <th scope="col">Total Relatives:</th>
          <th scope="col">Per Head Part:</th>
          </tr>
      </thead>
      <tbody>
          <tr>
          <th scope="row">1</th>
          <td>${selectedZaweAlFaroozArr[0][3]}</td>
          <td>${selectedZaweAlFaroozArr[0][0]}</td>
          <td>${24 * selectedZaweAlFaroozArr[0][2]}</td>
          </tr>
          <tr>
          <th scope="row">2</th>
          <td>${selectedZaweAlFaroozArr[1][3]}</td>
          <td>${selectedZaweAlFaroozArr[1][0]}</td>
          <td>${24 * selectedZaweAlFaroozArr[1][2]}</td>
          </tr>
          <tr>
          <th scope="row">3</th>
          <td>${selectedZaweAlFaroozArr[2][3]}</td>
          <td>${selectedZaweAlFaroozArr[2][0]}</td>
          <td>${24 * selectedZaweAlFaroozArr[2][2]}</td>
          </tr>
      </tbody>
  </table>
  
  
  
  
  
  
  
  
  <pre>
      All Values: <br>
      availableRelatives Array: ${availableRelatives}<br><br>
      Array Ended: <br><br>

      typeof availableRelatives[1][0] ${typeof availableRelatives[1][0]} <br><br>
      availableRelatives[1][0] ${availableRelatives[1][0]} <br><br>
      AsbatExists: ${asbatExists}<br>
      ${wife.name}: ${wife.value}<br>
      ${husband.name}: ${husband.value}<br><br>

      Sisters:<br>
      ${rSister.name}: ${rSister.value}<br>
      ${pSister.name}: ${pSister.value}<br>
      ${mSister.name}: ${mSister.value}<br><br>

      Brothers:<br>
      ${rBrother.name}: ${rBrother.value}<br>
      ${pBrother.name}: ${pBrother.value}<br>
      ${mBrother.name}: ${mBrother.value}<br><br>

      Parents:<br>
      ${father.name}: ${father.value}<br>
      ${mother.name}: ${mother.value}<br>
      ${grandFather.name}: ${grandFather.value}<br>
      ${grandMother.name}: ${grandMother.value}<br><br>

      Female Offsprings:<br>
      ${daughter.name}: ${daughter.value}<br>
      ${sDaughter.name}: ${sDaughter.value}<br>
      ${ssDaughter.name}: ${ssDaughter.value}<br>
      ${sssDaughter.name}: ${sssDaughter.value}<br><br>

      Male Offsprings:<br>
      ${son.name}: ${son.value}<br>
      ${sSon.name}: ${sSon.value}<br>
      ${ssSon.name}: ${ssSon.value}<br>
      ${sssSon.name}: ${sssSon.value}<br><br>

  childern Exists: ${childernExists}<br>
  HusbandPart: ${husbandPart}<br>
  WifePart: ${wifePart}<br>
  daughterPart: ${daughterPart}<br>
  sDaughterPart: ${sDaughterPart}<br>
  ssDaughterPart: ${ssDaughterPart}<br>
  sssDaughterPart: ${sssDaughterPart}<br>

  fatherPart: ${fatherPart}<br>
  motherPart: ${motherPart}<br>

  rSisterPart: ${rSisterPart}<br>
  pSisterPart: ${pSisterPart}<br>
  mBroSisPart: ${mBroSisPart}<br>
      
  grandFatherType: ${grandFatherType}<br>
  grandFatherPart: ${grandFatherPart}<br>
      
  grandMotherType: ${grandMotherType}<br>
  grandMotherPart: ${grandMotherPart}<br>

      husbandArr [husbandVal, husbandPart, husbandPerHead, husbandName]: ${husbandArr}<br>

      wifeArr [wifeVal, wifePart, wifePerHead, wifeName]: ${wifeArr}<br>

      daughterArr [daughterVal, daughterPart, daughterPerHead, daughterName] : ${daughterArr}<br>

      sDaughterArr [sDaughterVal, sDaughterPart, sDaughterPerHead, sDaughterName] : ${sDaughterArr}<br>

      ssDaughterArr [ssDaughterVal, ssDaughterPart, ssDaughterPerHead, ssDaughterName] : ${ssDaughterArr}<br>

      sssDaughterArr [sssDaughterVal, sssDaughterPart, sssDaughterPerHead, sssDaughterName] : ${sssDaughterArr}<br>

      fatherArr [fatherVal, fatherPart, fatherPerHead, fatherName]  : ${fatherArr}<br>

      motherArr [motherVal, motherPart, motherPerHead, motherName]  : ${motherArr}<br>     

      rSisterArr [rSisterVal, rSisterPart, rSisterPerHead, rSisterName] : ${rSisterArr}<br>

      pSisterArr [pSisterVal, pSisterPart, pSisterPerHead, pSisterName] : ${pSisterArr}<br>

      mBroArr [mBrotherVal, mBroSisPart, maternalPerHead, mBrotherName]: ${mBroArr}<br> 

      mSisArr [mSisterVal, mBroSisPart, maternalPerHead, mSisterName]: ${mSisArr}<br>
      
      gfArr [grandFatherVal, grandFatherPart, gfPerHead, gfName]: ${gfArr}<br>

      gmArr [grandMotherVal, grandMotherPart, gmPerHead, gmName]: ${gmArr}<br> 


      rBrotherArr [rBrotherVal, rBrotherPart, rBrotherPerHead, rBrotherName] : ${rBrotherArr}<br>

      pBrotherArr [pBrotherVal, pBrotherPart, pBrotherPerHead, pBrotherName] : ${pBrotherArr}<br> 

      sonArr [sonVal, sonPart, sonPerHead, sonName] : ${sonArr}<br>

      sSonArr [sSonVal, sSonPart, sSonPerHead, sSonName] : ${sSonArr}<br>

      ssSonArr [ssSonVal, ssSonPart, ssSonPerHead, ssSonName] : ${ssSonArr}<br>

      sssSonArr [sssSonVal, sssSonPart, sssSonPerHead, sssSonName] : ${sssSonArr}<br>
      

      </pre>
  `)

}