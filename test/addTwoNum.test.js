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
