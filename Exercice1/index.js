//votre code ici
function pairNumbers(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result.join(',');
}

console.log(pairNumbers(1, 10)); // Retourne "2,4,6,8,10"

export default pairNumbers;
