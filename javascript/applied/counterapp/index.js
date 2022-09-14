// representation model for the actual html object (DOM)
let welcomeEl = document.getElementById("welcome-el")
let user = "Messi"
let welcomeMessage = `Welcome ${user}`
welcomeEl.textContent = welcomeMessage 
welcomeEl.textContent += "👋"

let people = document.getElementById("count-el");
let savedParagraph = document.getElementById("saved-values")

let count = 0;
function increment(){
    count += 1
    console.log(count)
    people.textContent = count
}

function reset(){
    people.textContent = 0
    count = 0
}

const savedValues = [0];
let countSave = 0;
function save() {
    countSave +=1
    let displayedSaved = ""
    displayedSaved += count + "-"
    savedParagraph.textContent += displayedSaved
    reset()
}


