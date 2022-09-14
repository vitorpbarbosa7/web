// representation model for the actual html object (DOM)
let welcomeEl = document.getElementById("welcome-el")
let user = "Messi"
let welcomeMessage = `Welcome ${user}`
welcomeEl.innerText = welcomeMessage 
welcomeEl.innerText += "👋"

let people = document.getElementById("count-el");
let savedParagraph = document.getElementById("saved-values")

let count = 0;
function increment(){
    count += 1
    console.log(count)
    people.innerText=count
}

const savedValues = [0];
let countSave = 0;
function save() {
    countSave +=1
    savedValues[countSave] = count.toString()
    thirdLast = savedValues.slice(-3)[0]
    secondLast = savedValues.slice(-2)[0]
    last = savedValues.slice(-1)[0]

    savedParagraph.innerText = `${last} - ${secondLast} - ${thirdLast}`
}


