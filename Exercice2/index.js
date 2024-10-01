function calculate(num1, num2, operator) {
    // Convert the string inputs to numbers
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    // Check if the conversion was successful
    if (isNaN(number1) || isNaN(number2)) {
        return "Invalid input";
    }

    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                return "Division by zero is not allowed";
            }
            result = number1 / number2;
            break;
        default:
            return "Invalid operator";
    }

    return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate('5', '3', '+'));   // Affiche 8
console.log(calculate('10', '4', '-'));  // Affiche 6
console.log(calculate('7', '2', '*'));   // Affiche 14
console.log(calculate('12', '3', '/'));  // Affiche 4
console.log(calculate('8', '0', '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate('4', '5', '%'));   // Affiche "Invalid operator"

export default calculate;
