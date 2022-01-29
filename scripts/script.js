function add(x, y) {
    let sum = x + y;
    console.log(sum)
}

function subtract(x, y) {
    let diff = x - y;
    console.log(diff)
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
            add(x, y)
            break;
        case "-":
            subtract(x, y)
            break;
        case "*":
            multiply(x, y)
            break;
        case "/":
            divide(x, y)
            break;
        default:
            break;
    }
}

add(4, 2);
subtract(10, 5);
multiply(2, 6);
divide(10, 2);