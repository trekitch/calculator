let operators = "";

function addBtnListeners() {
    let buttons = document.querySelector(".button_container").children;
    let buttonsArray = Array.from(buttons);

    buttonsArray.forEach(function (button) {
        button.addEventListener("click", function () {
            if (
                button.textContent === "=" ||
                button.textContent === "+" ||
                button.textContent === "-" ||
                button.textContent === "/" ||
                button.textContent === "*"
            ) {
                storeOperator(button.textContent);
            } else {
                storeOperator(button.textContent);
                console.log(button.value);
                updateDisplay(button.textContent);
            }
        });
    });
}

function add(x, y) {
    let sum = x + y;
    return sum;
}

function subtract(x, y) {
    let diff = x - y;
    return diff;
}

function multiply(x, y) {
    let product = x * y;
    return product;
}

function divide(x, y) {
    let quotient = x / y;
    return quotient;
}

function operate(operator, x, y) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        default:
            break;
    }
}

function updateDisplay(number) {
    const displayText = document.querySelector(".display");
    if (number === "C") {
        displayText.textContent = "";
    } else if (
        displayText.textContent.length > 2 &&
        (number === "=" || number === "=")
    ) {
    }

    displayText.textContent = number;
}

function storeOperator(buttonPressed) {
    console.log(`Button pressed: ${buttonPressed}`);
    if (buttonPressed === "=") {
        evaluateExpression(operators);
        operators = evaluateExpression(operators);
        updateDisplay(operators);
    } else if (buttonPressed === "C") {
        operators = "";
    } else {
        operators += buttonPressed;
        console.log(operators);
    }
}

function evaluateExpression(exp) {
    let expCopy;
    let result;
    if (exp.includes("+")) {
        expCopy = exp.split("+");
        result = operate("+", +expCopy[0], +expCopy[1]);
    } else if (exp.includes("-")) {
        expCopy = exp.split("-");
        result = operate("-", +expCopy[0], +expCopy[1]);
    } else if (exp.includes("*")) {
        expCopy = exp.split("*");
        result = operate("*", +expCopy[0], +expCopy[1]);
    } else {
        expCopy = exp.split("/");
        result = operate("/", +expCopy[0], +expCopy[1]);
    }

    console.log(expCopy);
    console.log(`Result: ${result}`);
    return result;
}

window.onload = addBtnListeners();
