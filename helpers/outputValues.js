// test file for output 
// testoutputfile
// function outputAllValues() {
//     let name = "Abd Ur Rehman"
// 	let Phrase = `My name is ${name}`
//   document.getElementById("main").innerHTML = Phrase;
// }



// Output all values just for testing purpose.
function outputAllValues() {
    note.style.display = "none";
    
    let allRows = ""
    let tableRow = ""
    let out
    for (let i = 0; i < outputArray.length; i++) {
      // console.log("I am here")
      tableRow = `
      <tr>
              <th class="text-center" scope="row">${i}</th>
              <td class="text-center">${outputArray[i][0]}</td>
              <td class="text-center">${outputArray[i][1]}</td>
              <td class="text-center">${outputArray[i][2]}</td>
      </tr>
      `
      allRows = allRows.concat(tableRow)
    }
  
    out = `
      <h3>Total Parts: ${outputParts}</h3>
      <table class="table">
          <thead>
              <tr>
              <th class="text-center" scope="col">S.No</th>
              <th class="text-center" scope="col">Name</th>
              <th class="text-center" scope="col">Total</th>
              <th class="text-center" scope="col">Per Head Part</th>
              </tr>
          </thead>
          <tbody>            
              ${allRows}
          </tbody>
      </table>
      `
    document.getElementById("main").innerHTML = out
  
  }

