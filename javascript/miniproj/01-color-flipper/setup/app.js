/* colors, i think some things must be done with those colors */
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
/* get element from html from id */
const btn = document.getElementById('btn');
/* get class */
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // console.log(document.body);
});

function getRandomNumber(){
    colors_length = colors.length
    floatRandomNumber = Math.random()*colors_length;
    randomNumber = Math.floor(floatRandomNumber);
    return randomNumber;
}