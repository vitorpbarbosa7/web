let firstNumber = parseFloat(document.getElementById('first-number').value)
let secondNumber = parseFloat(document.getElementById('second-number').value)

let btnAdd = document.getElementById('add')
let btnSub = document.getElementById('sub')
let btnMul = document.getElementById('mul')
let btnDiv = document.getElementById('div')

btnAdd.addEventListener("click", function() {
    update(add)
})

btnSub.addEventListener("click", function() {
    update(sub)
})

btnMul.addEventListener("click", function() {
    update(mul)
})

btnDiv.addEventListener("click", function(){
    update(div)
})

function update(operation){
    document.getElementById('result-text').textContent = operation()
    console.log(operation())
}

function add(){
    return firstNumber+secondNumber
}

function sub(){
    return firstNumber-secondNumber
}

function mul(){
    return firstNumber*secondNumber
}

function div(){
    return firstNumber/secondNumber
}



