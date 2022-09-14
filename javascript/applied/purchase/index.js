// When user clicks the purchase button, render 
// "Something went wrong, please try again" in the paragraph
// that has the id="error"

let errorMessageElement = document.getElementById("error")

function somethingWrong(){
    errorMessage = "Something went wrong"
    errorMessageElement.textContent = errorMessage
}