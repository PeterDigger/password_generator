const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let k = 0

// Set password variables
let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")

// Generated password
let history = []

function generatePassword(){
    let tempPass = ""
    for (let i = 0; i < 15; i++){
        tempPass += characters[Math.floor(Math.random() * characters.length)]  
    }
    history.push(tempPass)
    return tempPass
}
// Main function
function getpassword(){
    pass1.textContent = generatePassword()
    pass2.textContent = generatePassword()
    displayhistory()
}

// Copy to clipboard function
function copytext(_row_id) {
    let text = document.getElementById("copy"+_row_id).innerHTML;
    navigator.clipboard.writeText(text);
    alert("You have copied the password!");
    // const copyContent = async () => {
    //   try {
    //     await navigator.clipboard.writeText(text);
    //     console.log('Content copied to clipboard');
    //   } catch (err) {
    //     console.error('Failed to copy: ', err);
    //   }
    // }
//   var copyText = document.getElementById("copy"+_row_id);
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For Mobile devices
//   navigator.clipboard.writeText(copyText.value);
  
//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = "Copied: " + copyText.value;
}

// function copyalert() {
//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = "Copy to clipboard";
// }

let hmm = document.getElementById("history")

function removeAllChildNodes() {
    var child = hmm.lastElementChild; 
    while (child) {
        hmm.removeChild(child);
        child = hmm.lastElementChild;
    }
    k=0
}

function displayhistory(){
    let push = document.getElementById("history")

    // for (i = 0; i < 2; i++){
    //     let row = document.createElement("tr")
    //     for (let j = 0; j < history.length; j++) {
    //         let cell = document.createElement("td")
    //         let cellText = document.createTextNode(history.shift())
    //         let newcell = document.createElement("td")
    //         let but = document.createElement("button")
    //         let butText = document.createTextNode('Copy')
    //         but.setAttribute("onclick", "copytext("+k+")")
    //         but.appendChild(butText)
    //         cell.appendChild(cellText)
    //         newcell.appendChild(but)
    //         row.appendChild(cell)
    //         k++
    //     }
    //     push.appendChild(row)1
    // }

    for (let i = 0; i < 2; i++){
        let row = document.createElement("div")
        row.setAttribute("class", "horizontalcontainer")
        for (let j = 0; j < history.length; j++){

            // Initiate variables for the generated passwords
            let arraypass = document.createElement("p")
            let arraypassText = document.createTextNode(history.shift())
            let copycell = document.createElement("button")
            let copycellText = document.createTextNode("Copy")

            // This is the properties of the element
            copycell.setAttribute("onclick", "copytext("+k+")")
            copycell.setAttribute("class", "greenbutton")
            arraypass.setAttribute("id", "copy"+k)

            // Set the values into the row
            arraypass.appendChild(arraypassText)
            copycell.appendChild(copycellText)
            row.appendChild(arraypass)
            row.appendChild(copycell)

            k++
        }
        push.appendChild(row)
    }

    // let buttony = document.createElement("button")   
    // let table1 = document.getElementById("history")
    // for (let i = 0 ; i < history.length ; i++){
    //     var row = table1.insertRow()
    //     var cell = row.insertCell();
    //     cell.innerHTML = history[i];
    //     cell.setAttribute("type", "text" + [i])
    //     cell = row.insertCell();
    //     cell.innerHTML = ;
    // }
 
    // Remove old and only keep two passwords
    // history.shift()
    // history.shift()
}