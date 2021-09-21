// Variables to Store Inputs
let firstOperand = ''
let operation = null
let currentValue = null

const digits = document.querySelectorAll('.digit');
const displayOperation = document.querySelector('#display-operation');
const display = document.querySelector('#display-result');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');
const setOperationValue = document.querySelectorAll('.operator');



digits.forEach((digit) => {
    digit.addEventListener('click', () => appendDigit(digit.innerHTML))
});

setOperationValue.forEach((operatorValue) => {
    operatorValue.addEventListener('click', () => setOperator(operatorValue.id))});

equalsButton.addEventListener('click', result);
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);

window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.setAttribute('style', 'transform: translateY(4px) translateX(4px)');
    key.setAttribute('style', 'box-shadow: 0px 0px 0px black');
    if (key.className === 'digit') {
        appendDigit(key.innerHTML);
    }
    else if (key.className === 'operator'){
        setOperator(key.id);
    }
    else if (key.id === 'equals') {
        result();
    }
    else if (key.id === 'backspace') {
        backspace();
    }
    else if (key.id === 'clear') {
        clear();
    }
    else {
        return;
    }
       
    // reset the color after a short delay
    setTimeout(function() {
        key.setAttribute('style', 'box-shadow: 4px 2px 2px black');
        key.setAttribute('style', 'transform: translateY(-4px) translateX(-4px)');
      }, 150);
    }, false);


function setOperator(value) {
    if (operation === null) {
        if (displayOperation.textContent.includes('=')) {
            displayOperation.innerHTML = '';
        }
        firstOperand = currentValue;
        currentValue = 0;

        switch (value) {
            case 'addition':
                operation = 'sum';
                displayOperation.innerHTML += firstOperand + ' + ';
                break;
            case 'minus':
                operation = 'minus';
                displayOperation.innerHTML += firstOperand + ' - ';
                break;
            case 'multiply':
                operation = 'multiply';
                displayOperation.innerHTML += firstOperand +' x ';
                break;
            case 'divide':
                operation = 'divide';
                displayOperation.innerHTML += firstOperand + ' ÷ ';
                break;
        }
        //Clears Input Display
        display.innerHTML = "";
        
    }
    else {
        // displayOperation.innerHTML += currentValue;
        firstOperand = operate(operation, firstOperand, currentValue);
        currentValue = 0;

        switch (value) {
            case 'addition':
                operation = 'sum';
                displayOperation.innerHTML = firstOperand + ' + ';
                break;
            case 'minus':
                operation = 'minus';
                displayOperation.innerHTML = firstOperand + ' - ';
                break;
            case 'multiply':
                operation = 'multiply';
                displayOperation.innerHTML = firstOperand + ' x ';
                break;
            case 'divide':
                operation = 'divide';
                displayOperation.innerHTML = firstOperand + ' ÷ ';
                break;

        }
        // if (value === 'addition') {
        //     operation = 'sum';
        //     displayOperation.innerHTML += ' + ';
        // }
        // else if (value === 'minus') {
        //     operation = 'minus';
        //     displayOperation.innerHTML += ' - ';
        // }
        // else if (value === 'multiply') {
        //     operation = 'multiply';
        //     displayOperation.innerHTML += ' x ';
        // }
        // else if (value === 'divide') {
        //     operation = 'divide';
        //     displayOperation.innerHTML += ' ÷ ';
        // }

        display.innerHTML = "";

    }
}

function appendDigit(digit) {
    if (displayOperation.textContent.includes('=')) {
        displayOperation.innerHTML = '';
    }

    //Checks to ensure only a single decimal point is being used
    if (digit === '.') {
        if (display.textContent.includes('.')) {
            return
        }
    }
    display.innerHTML += digit;
    currentValue =  parseFloat(display.innerHTML);
}

function result() {
    if (operation === null) {
        return;
    }
    displayOperation.innerHTML += currentValue + ' =';
    var operateResult = operate(operation, firstOperand, currentValue);
    console.log(operateResult);
    display.innerHTML = operateResult;
    
    currentValue = operateResult;
    operation = null;
    firstOperand = null;
}

function clear() {
    currentValue = 0;
    firstOperand = 0;
    operation = null;
    display.innerHTML = "";
    displayOperation.innerHTML = ""
}

function backspace() {
    display.textContent = display.textContent.toString().slice(0, -1);
}

//----------------------------------------
//  Calculator Operation Function Logic
//----------------------------------------

function sum (x, y) {
    opResult = x + y;
    if (isInt(opResult) === true) {
        return opResult;
    }
    else {
        return opResult.toFixed(3);
    }
}
function minus (x, y) {
    opResult = x - y;
    if (isInt(opResult) === true) {
        return opResult;
    }
    else {
        return opResult.toFixed(3);
    }
}
function multiply (x, y) {
    opResult = x * y;
    if (isInt(opResult) === true) {
        return opResult;
    }
    else {
        return opResult.toFixed(3);
    }
}
function divide (x, y) {
    if (y === 0) {
        return alert("Cant divide by zero bro!");
    }
    else {
        opResult = x / y;
        if (isInt(opResult) === true) {
            return opResult;
        }
        else {
            return opResult.toFixed(3);
        }
    }
}

function operate(operator, x, y) {

    switch (operator) {
        case 'sum':
            return sum(x, y)
        case 'minus':
            return minus(x, y)
        case 'multiply':
            return multiply(x, y)
        case 'divide':
            return divide(x, y)
        default:
            return null
    }
}

function isInt(n) {
    return n % 1 === 0;
 }