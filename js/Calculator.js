// Program for a simple calculator

const number1 = parseFloat(prompt('Enter first number: '));

const operator = prompt('Enter operator ( either +, -, *, / or % ): ');

const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 / number2;
}
else {
    result = number1 % number2;
}

// display the result
window.alert(" The Result is: " + result);

// in console result
console.log(`${number1} ${operator} ${number2} = ${result}`);
