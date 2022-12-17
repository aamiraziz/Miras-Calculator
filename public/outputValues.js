




// Output all values just for testing purpose.
function outputAllValues() {

    document.write(`<pre>
        All Values: <br>
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

        mBroArr[mBrotherVal, mBroSisPart, totalBroSis, maternalPerHead, mBroParts]: ${mBroArr}<br>

        mSisArr[mSisterVal, mBroSisPart, totalBroSis, maternalPerHead, mSisParts]: ${mSisArr}<br>

        gfArr[grandFatherVal, grandFatherPart, gfPerHead, grandFatherType]: ${gfArr}<br>

        gmArr[grandMotherVal, grandMotherPart, gmPerHead, grandMotherType]: ${gmArr}<br>

        husbandArr[husbandVal, husbandPart, husbandName]: ${husbandArr}<br>

        wifeArr[wifeVal, wifePart, wifePerHead, wifeName]: ${wifeArr}<br>

        rSisterArr[rSisterVal, rSisterPart, rSisterPerHead, rSisterName] : ${rSisterArr}<br>

        pSisterArr[pSisterVal, pSisterPart, pSisterPerHead, pSisterName] : ${pSisterArr}<br>

        rBrotherArr[rBrotherVal, rBrotherPart, rBrotherPerHead, rBrotherName] : ${rBrotherArr}<br>

        pBrotherArr[pBrotherVal, pBrotherPart, pBrotherPerHead, pBrotherName] : ${pBrotherArr}<br>

        fatherArr[fatherVal, fatherPart, fatherName]  : ${fatherArr}<br>

        motherArr[motherVal, motherPart, motherName]  : ${motherArr}<br>

        daughterArr[daughterVal, daughterPart, daughterPerHead, daughterName] : ${daughterArr}<br>

        

        </pre>
    `)

}