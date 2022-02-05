let operators = "";
//variable that tracks state of appending to the display
let appenedToEnd = true;

function addBtnListeners() {
    const buttons = document.querySelector(".button_container");
    // let buttonsArray = Array.from(buttons);

    // buttonsArray.forEach(function (button) {
    //     button.addEventListener("click", function () {
    //         storeOperator(button.textContent);
    //         console.log(button.value);
    //         updateDisplay(button);
    //     });
    // });

    buttons.addEventListener("click", (e) => {
        storeOperator(e.target);
        updateDisplay(e.target);
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

function updateDisplay(btnValue) {
    const displayText = document.querySelector(".display");
    if (btnValue.className === "special" && btnValue.value === "C")
        return (displayText.textContent = "");

    if (btnValue.className === "numb") {
        if (appenedToEnd === true) {
            displayText.textContent += btnValue.value;
        } else {
            displayText.textContent = btnValue.value;
            appenedToEnd = true;
        }
    } else if (btnValue.className === "operator") {
        appenedToEnd = false;
    } else {
        displayText.textContent = btnValue;
    }
}

function storeOperator(buttonPressed) {
    console.log(`Button pressed: ${buttonPressed.value}`);
    if (buttonPressed.className === "special" && buttonPressed.value === "C")
        return (operators = "");

    if (buttonPressed.value === "=") {
        evaluateExpression(operators);
        operators = evaluateExpression(operators);
        updateDisplay(operators);
    } else {
        operators += buttonPressed.value;
        console.log(`Operators: ${operators}`);
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

    console.log(`Result: ${result}`);
    return result;
}

window.onload = addBtnListeners();
