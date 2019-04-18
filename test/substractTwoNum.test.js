const substract = require("../functions/substractTwoNum");
test ("that the substraction of two numbers outputs the correct result", () =>{

    expect(substract(2, 2)).toBe(0)
});
test ("that the substraction of 30 and 50 outputs 80", () =>{
    expect(substract(30, 50)).toBe(-20)
});
test ("that the substractionof only one input parameter should output invalid input", () =>{
    expect(substract(3)).toBe("invalid input")
});
test ("that the substraction of a string and a number should output invalid input", () =>{
    expect(substract("", 2)).toBe("invalid input")
});
test ("that the substraction of two strings should output invalid output", () =>{
    expect(substract("three", "four")).toBe("invalid input")
});
test ("that a function with an empty parameters should output Enter numbers to substract", () =>{
    expect(substract()).toBe("Enter numbers to substract")
});
test ("that the substraction of NaN and a number should output invalid input", () =>{
    expect(substract(NaN, 2)).toBe("invalid input")
}); 
//test ("no number and no number should output invalid string", () => {
  // expect(substract( + )).toBe("invalid input")
//});
test ("that only one string as a parameter should output invalid input", () => {
    expect(substract("five")).toBe("invalid input")
});