const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const hexColor = generateRandomColor();
    //debug
    console.log(hexColor);

    //action
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    }
);

function generateRandomColor(){
    HEXLENGTH = 6
    localColor = '#'
    for (let i = 0; i < HEXLENGTH; i++){
        localColor += getRandomElement()
    }
    return localColor
}

function getRandomElement(){
    randomNumber = Math.random();
    hexLength = hex.length;
    multipliedNumber = randomNumber*hexLength;
    hexPosition = Math.floor(multipliedNumber);
    hexElement = hex[hexPosition];
    return hexElement;
};