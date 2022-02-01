let operators = "";

function addBtnListeners() {
    let buttons = document.querySelector(".button_container").children;
    let buttonsArray = Array.from(buttons);

    buttonsArray.forEach(function (button) {
        button.addEventListener("click", function () {
            updateDisplay(button.textContent);
            storeOperator(button.textContent);
        });
    });
}

function add(x, y) {
    let sum = x + y;
    console.log(sum);
}

function subtract(x, y) {
    let diff = x - y;
    console.log(diff);
}

function multiply(x, y) {
    let product = x * y;
    console.log(product);
}

function divide(x, y) {
    let quotient = x / y;
    console.log(quotient);
}

function operate(operator, x, y) {
    switch (operator) {
        case "+":
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "*":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
            break;
        default:
            break;
    }
}

function updateDisplay(number) {
    const displayText = document.querySelector(".display");
    if (number === "C") {
        displayText.textContent = "0";
    } else {
        displayText.textContent = number;
    }
}

function storeOperator(nums) {
    operators += nums;
    console.log(nums);
    console.log(operators);
}

function evaluateExpression(exp) {
    let expCopy;
    if (exp.includes("+")) {
        expCopy = exp.split("+");
        operate("+", +expCopy[0], +expCopy[1]);
    } else if (exp.includes("-")) {
        expCopy = exp.split("-");
        operate("-", +expCopy[0], +expCopy[1]);
    } else if (exp.includes("*")) {
        expCopy = exp.split("*");
        operate("*", +expCopy[0], +expCopy[1]);
    } else {
        expCopy = exp.split("/");
        operate("/", +expCopy[0], +expCopy[1]);
    }

    console.log(expCopy);
}

window.onload = addBtnListeners();
