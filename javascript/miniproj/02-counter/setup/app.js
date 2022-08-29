const textValue = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

function decrease(){
    count--;
}

function increase(){
    count++;
}

function reset(){
    count = 0;
}

btns.forEach(function (btn) {
    btn.addEventListener('click', function(event){
        //DOMTokenList
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')){
            decrease()
        }
        else if (styles.contains('increase')){
            increase()
        }
        else {
            reset()
        }
        textValue.textContent = count;
    })
});