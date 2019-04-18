function add2(firstNumber, secondNumber) {
    if (!firstNumber && !secondNumber){
        return "Enter numbers to add"
    }
    if (typeof firstNumber === "number" && !isNaN(firstNumber) && typeof secondNumber === "number" && !isNaN(secondNumber)) {
        return firstNumber + secondNumber
    } else {
        return "invalid input"
    }
}
module.exports = add2;
