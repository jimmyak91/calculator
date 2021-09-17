

function operate(operator, x, y) {

    if (operator == 'sum') {
        return sum(x, y);
    }
    else if (operator == 'minus') {
        return minus(x, y);
    }
    else if (operator == 'multiply') {
        return multiply(x, y);
    }
    else if (operator == 'divide') {
        return divide(x, y);
    }
    else {
        return "Error";
    }

}


function sum (x, y) {
    return x + y;
}
function minus (x, y) {
    return x - y;
}
function multiply (x, y) {
    return x * y;
}
function divide (x, y) {
    return x / y;
}