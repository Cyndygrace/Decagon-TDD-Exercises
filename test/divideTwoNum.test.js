const divide = require("../functions/divideTwoNum");
test ("that the division of two numbers outputs the correct result", () =>{

    expect(divide(2, 2)).toBe(1)
});
test ("that the division of 30 and 50 outputs 80", () =>{
    expect(divide(30, 50)).toBe(0.6)
});
test ("that the divisionof only one input parameter should output invalid input", () =>{
    expect(divide(3)).toBe("invalid input")
});
test ("that the division of a string and a number should output invalid input", () =>{
    expect(divide("", 2)).toBe("invalid input")
});
test ("that the division of two strings should output invalid output", () =>{
    expect(divide("three", "four")).toBe("invalid input")
});
test ("that a function with an empty parameters should output Enter numbers to divide", () =>{
    expect(divide()).toBe("Enter numbers to divide")
});
test ("that the division of NaN and a number should output invalid input", () =>{
    expect(divide(NaN, 2)).toBe("invalid input")
}); 
//test ("no number and no number should output invalid string", () => {
  // expect(divide( + )).toBe("invalid input")
//});
test ("that only one string as a parameter should output invalid input", () => {
    expect(divide("five")).toBe("invalid input")
});