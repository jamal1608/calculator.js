
var firstNumber = parseFloat(prompt("Enter the first number:"));


var secondNumber = parseFloat(prompt("Enter the second number:"));

var operation = prompt("Enter the operation (+, -, *, /, %):");

//input
var result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber === 0) {
        alert("Error: Division by zero is not allowed.");
    } else {
        result = firstNumber / secondNumber;
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation. Please enter one of the following: +, -, *, /, %");
}

// Display 
if (result !== undefined) {
    alert("Result: " + result);
}
