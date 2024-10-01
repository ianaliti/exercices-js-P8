const display = document.getElementById('display');
let currentInput = ''; 
let equation = [];      
let resultDisplayed = false; 

function appendToDisplay(value) {
    if (resultDisplayed) {
        display.value = '';
        equation = [];
        resultDisplayed = false;
    }

    if (['+', '-', '*', '/'].includes(value)) {
        equation.push(currentInput);
        equation.push(value);
        currentInput = ''; 
    } else {
        currentInput += value;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    equation = [];
    resultDisplayed = false;
}

function calculateResult() {
    equation.push(currentInput);

    let result = parseFloat(equation[0]);

    for (let i = 1; i < equation.length; i += 2) {
        const operator = equation[i];
        const nextNumber = parseFloat(equation[i + 1]);

        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber === 0) {
                    display.value = 'Division by zero is not allowed'; // Changed error message
                    return;
                }
                result /= nextNumber;
                break;
            default:
                display.value = 'Erreur';
                return;
        }
    }

    display.value = result;
    currentInput = result.toString(); 
    equation = [];
    resultDisplayed = true;
}

