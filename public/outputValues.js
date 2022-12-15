




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

        mBroSisArr[Brothers, sisters, part, totalBroSis, perHead, broParts, sisParts]: ${mBroSisArr}<br>

        </pre>
    `)

}