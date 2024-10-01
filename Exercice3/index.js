function calculateAverage(arr = []) {
    if (arr.length === 0) {
        return "No numbers to calculate average";
    }
    
    let average = arr.reduce((sum, currentValue) => sum + currentValue, 0) / arr.length;
    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
