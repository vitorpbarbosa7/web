const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    const hexColor = generateRandomColor();
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    }
);

function generateRandomColor(){
    HEXLENGTH = 6
    color = '#'
    for (let i = 0; i < HEXLENGTH; i++){
        color += getRandomElement()
    }
    return color
}

function getRandomElement(){
    randomNumber = Math.random();
    hexLength = hex.length;
    multipliedNumber = randomNumber*hexLength;
    hexPosition = Math.floor(multipliedNumber);
    hexElement = hex[hexPosition];
    return hexElement;
};