const add2 = require("../functions/addTwoNum");
test ("that the addition of two numbers outputs the coorect result", () =>{

    expect(add2(2, 2)).toBe(4)
});
test ("that the addition of 30 and 50 outputs 80", () =>{

    expect(add2(30, 50)).toBe(80)
});
test ("that the addition of only one input parameter should output invalid input", () =>{
    expect(add2(3)).toBe("invalid input")
});
test ("that the addition of a string and a number should output invalid input", () =>{
    expect(add2("", 2)).toBe("invalid input")
});
test ("that the addition of two strings should output invalid output", () =>{
    expect(add2("three", "four")).toBe("invalid input")
});
test ("that a function with an empty parameters should output Enter numbers to add", () =>{
    expect(add2()).toBe("Enter numbers to add")
});
test ("that the addition of NaN and a number should output invalid input", () =>{
    expect(add2(NaN, 2)).toBe("invalid input")
}); 
//test ("no number and no number should output invalid string", () => {
  // expect(add2( + )).toBe("invalid input")
//});
