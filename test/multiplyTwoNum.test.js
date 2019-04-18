const multiply = require("../functions/multiplyTwoNum");
test ("that the multiplication of two numbers outputs the correct result", () =>{

    expect(multiply(2, 2)).toBe(4)
});
test ("that the multiplication of 30 and 50 outputs 80", () =>{
    expect(multiply(30, 50)).toBe(1500)
});
test ("that the multiplicationof only one input parameter should output invalid input", () =>{
    expect(multiply(3)).toBe("invalid input")
});
test ("that the multiplication of a string and a number should output invalid input", () =>{
    expect(multiply("", 2)).toBe("invalid input")
});
test ("that the multiplication of two strings should output invalid output", () =>{
    expect(multiply("three", "four")).toBe("invalid input")
});
test ("that a function with an empty parameters should output Enter numbers to multiply", () =>{
    expect(multiply()).toBe("Enter numbers to multiply")
});
test ("that the multiplication of NaN and a number should output invalid input", () =>{
    expect(multiply(NaN, 2)).toBe("invalid input")
}); 
//test ("no number and no number should output invalid string", () => {
  // expect(multiply( + )).toBe("invalid input")
//});
test ("that only one string as a parameter should output invalid input", () => {
    expect(multiply("five")).toBe("invalid input")
});