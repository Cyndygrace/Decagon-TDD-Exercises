const concatenate = require('../functions/concatenateTwoStrings');

test("that the addition of two strings will concatenate them ", () =>{
    expect(concatenate("coding", "fun")).toBe("codingfun")
});
test("that big house output bighouse ", () =>{
    expect(concatenate("big", "house")).toBe("bighouse")
});
