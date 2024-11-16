let display = document.getElementById("display");
let currentInput = '';
let result = 0;

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        let expression = currentInput;
        let firstOperand = 0;
        let operator = '';
        let secondOperand = 0;

        // Handling complex operations
        if (expression.includes('+')) {
            [firstOperand, secondOperand] = expression.split('+').map(Number);
            result = firstOperand + secondOperand;
        } else if (expression.includes('-')) {
            [firstOperand, secondOperand] = expression.split('-').map(Number);
            result = firstOperand - secondOperand;
        } else if (expression.includes('*')) {
            [firstOperand, secondOperand] = expression.split('*').map(Number);
            result = firstOperand * secondOperand;
        } else if (expression.includes('/')) {
            [firstOperand, secondOperand] = expression.split('/').map(Number);
            result = firstOperand / secondOperand;
        } else if (expression.includes('^')) {
            [firstOperand, secondOperand] = expression.split('^').map(Number);
            result = Math.pow(firstOperand, secondOperand);
        } else if (expression.includes('ln')) {
            result = Math.log(parseFloat(expression.replace('ln', '')));
        } else if (expression.includes('log')) {
            result = Math.log10(parseFloat(expression.replace('log', '')));
        } else if (expression.includes('sin')) {
            result = Math.sin(parseFloat(expression.replace('sin', '')));
        } else if (expression.includes('cos')) {
            result = Math.cos(parseFloat(expression.replace('cos', '')));
        } else if (expression.includes('tan')) {
            result = Math.tan(parseFloat(expression.replace('tan', '')));
        } else if (expression.includes('sec')) {
            result = 1 / Math.cos(parseFloat(expression.replace('sec', '')));
        } else if (expression.includes('csc')) {
            result = 1 / Math.sin(parseFloat(expression.replace('csc', '')));
        } else if (expression.includes('cot')) {
            result = 1 / Math.tan(parseFloat(expression.replace('cot', '')));
        }

        display.innerText = result;
        currentInput = result.toString();  // Store the result for further calculations
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}
