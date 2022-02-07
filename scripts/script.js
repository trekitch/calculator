let operators = [];
//variable that tracks state of appending to the display
let appenedToEnd = true;

function addBtnListeners() {
    const buttons = document.querySelector(".button_container");

    const operatorButtons = document.querySelectorAll(".operator");

    buttons.addEventListener("click", (e) => {
        //if statement that handles misclicks
        if (e.target.value === "." && operators.includes(".")) return;
        if (
            e.target.className === "numb" ||
            e.target.className === "operator" ||
            e.target.className === "special"
        ) {
            //prevents equals sign from being disabled.
            if (e.target.className === "operator" && e.target.value !== "=") {
                e.target.classList.add("disabled");
                storeBtnValues(e.target);
                updateDisplay(e.target);
            } else {
                //once a button is pressed remove the diabled class from operators
                storeBtnValues(e.target);
                updateDisplay(e.target);
                operatorButtons.forEach((button) => {
                    button.classList.remove("disabled");
                });
            }
        } else {
            return;
        }
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
    if (y === 0) return "try again!";
    let quotient = x / y;
    quotient = Math.round(quotient * 100) / 100;
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
    //guard clause to clear display
    if (btnValue.value === "C") return (displayText.textContent = "");
    //guard clause to display result from evaluateExpression
    if (btnValue.className === undefined)
        return (displayText.textContent = btnValue);

    if (btnValue.className === "numb") {
        if (appenedToEnd === true) {
            displayText.textContent += btnValue.value;
        } else {
            displayText.textContent = btnValue.value;
            appenedToEnd = true;
        }
    } else if (btnValue.className.includes("operator")) {
        appenedToEnd = false;
    }
}

function storeBtnValues(btnValue) {
    const mathOperators = ["*", "+", "-", "/", "="];
    //guard clause to clear operators array
    if (btnValue.value === "C") return (operators = []);
    if (
        btnValue.className.includes("operator") &&
        mathOperators.some((i) => operators.includes(i))
    ) {
        updateDisplay(evaluateExpression(operators.join("")));
        if (btnValue.value !== "=") {
            operators.push(btnValue.value);
        }
    } else {
        operators.push(btnValue.value);
    }
}

function evaluateExpression(exp) {
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

    operators = [];
    //catches division by 0
    if (result !== "try again!") {
        operators.push(result.toString());
    }

    return result;
}

window.onload = addBtnListeners();
