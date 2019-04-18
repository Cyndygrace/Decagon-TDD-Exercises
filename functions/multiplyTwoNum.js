function multiply(firstNumber, secondNumber) {
    if (!firstNumber && !secondNumber){
        return "Enter numbers to multiply"
    }
    if (typeof firstNumber === "number" && !isNaN(firstNumber) && typeof secondNumber === "number" && !isNaN(secondNumber)) {
        return firstNumber * secondNumber
    } else {
        return "invalid input"
    }
}
