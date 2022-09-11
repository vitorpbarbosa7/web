// counter = document.getElementById("count-el");
// // counter.innerText=15

// let count = 5 + 7;
// console.log(count);

// counter.innerText = count;

// myAge = 29;
// console.log(myAge);

let lap1 = 34
let lap2 = 33
let lap3 = 36

laps = [lap1, lap2, lap3]

function sumLap(laps) {
    return laps.reduce((a,b) => a + b)
}

console.log(sumLap(laps))