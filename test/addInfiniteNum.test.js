const add = require("../functions/addIndefiniteNum")

test("that it returns the sum of an indefinite number", () => {
    expect(add(3, 5, 8, 5)).toEqual(21)
});


