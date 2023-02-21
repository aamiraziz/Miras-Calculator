let imam

// Event Listener on Fiqah Method
// this eventListener will give the name of imam
method.addEventListener('change', function() {

     
    const nodeList = document.querySelectorAll(".form-check-input");
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].checked) {
            imam = nodeList[i].id
        }
    }

    console.log(`The value of Imam is %c ${imam}`, "color: black; font-size: 12px; font-weight: bold;",` and i am here`)
    console.log("%c" + "Hold Up!", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
  
  })


console.log(`The value of Imam outside eventListener is ${imam}`)