const add = require("../functions/addIndefiniteNum")

test("that it returns the sum of an indefinite number", () => {
    expect(add(3, 5, 8, 5)).toEqual(21)
});

test("that if argument input contains a combination of boolean type, string type, numbers and indefinite, it should output invalid input", () => {
    expect(add("false", "dog", 8, 9, "indefinite")).toEqual("invalid input")
});

test ("to output Enter a number if there is no input parameter", () => {
    expect(add()).toEqual("Enter a number")
});
test ("that an input parameter of only string will output invalid input", () => {
    expect(add("string", "stringify", "last")).toEqual("invalid input")
});
