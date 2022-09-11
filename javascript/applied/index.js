// representation model for the actual html object (DOM)
let people = document.getElementById("count-el");
console.log(people)

let count = 0;

function increment(){
    count += 1
    console.log(count)
    people.innerText=count
}

function save() {
    console.log(count)
}

save()


let welcomeEl = document.getElementById("welcome-el")

let user = "Messi"
let welcomeMessage = `Welcome ${user}`

welcomeEl.innerText = welcomeMessage