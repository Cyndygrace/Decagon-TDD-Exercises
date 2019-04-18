const concatenate = require('../functions/concatenateTwoStrings');

test("that the concatenation of two strings will concatenate them ", () =>{
    expect(concatenate("coding", "fun")).toBe("codingfun")
});
test("that big house output bighouse ", () =>{
    expect(concatenate("big", "house")).toBe("bighouse")
});
test ("that a function with an empty parameters should output Enter Two words", () =>{
    expect(add2()).toBe("Enter two words")
});
test ("that two numbers as input parameter should outputs invalid input", () =>{
    expect(concatenate(2, 2)).toBe("invalid input");
})
test ("that only one parameter instead of two should output invalid input", () =>{
    expect(concatenate("joy")).toBe("invalid input");
})
test ("test that an empty string and done should output invalid input", () =>{
    expect(concatenate("", "done")).toBe("done");
})
test ("that booleanType false and stringType true should output invalid input", () =>{
    expect(concatenate(false, "true")).toBe("invalid input")
})
test ("that a number and a string should output invalid input", () =>{
    expect(concatenate(2, "call")).toBe("invalid input")
})