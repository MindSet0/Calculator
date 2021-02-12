const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");


numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        if(button.innerText === '.' && currentOperandTextElement.innerText.includes(".")){return}
        currentOperandTextElement.innerText += button.innerText;
    });
    
});


var previousOperand = "";
operationButtons.forEach(operand => {
    operand.addEventListener("click", function() {
        if(previousOperandTextElement.innerText === "") {
            previousOperandTextElement.innerText = currentOperandTextElement.innerText;
            currentOperandTextElement.innerText = "";

            previousOperand = operand.innerText;
        } else {
            previousOperandTextElement.innerText = calc(Number(previousOperandTextElement.innerText), 
            Number(currentOperandTextElement.innerText), previousOperand);
            currentOperandTextElement.innerText = "";
            previousOperand = operand.innerText;
        }
    });
});

equalsButton.addEventListener("click", function() {
    currentOperandTextElement.innerText = calc(Number(previousOperandTextElement.innerText), 
    Number(currentOperandTextElement.innerText), previousOperand);
    previousOperandTextElement.innerText = "";
});


allClearButton.addEventListener("click", function() {
    currentOperandTextElement.innerText = "";
    previousOperandTextElement.innerText = "";
    operationButtons.innerText = "";
});

deleteButton.addEventListener("click", function() {
    var length = currentOperandTextElement.innerText.length;
    if(currentOperandTextElement.innerText.length > 0){
        currentOperandTextElement.innerText = currentOperandTextElement.innerText.slice(0, length-1);
    }
});


function calc(num1, numb2, operand) {
    if(operand === "+"){
        return num1 + numb2;
    }

    if(operand === "-"){
        return num1 - numb2;
    }

    if(operand === "÷"){
        return num1 / numb2;
    }

    if(operand === "x"){
        return num1 * numb2;
    }
}