const add = require('../functions/add');

test("that 2 and 3 and 4 and 5 will output 14", () =>{

    expect(add([2, 3, 4, 5])).toEqual(14)

});

test("that 5 and 10 and 50 and 15 will output 80", () =>{

    expect(add([5, 10, 50, 15])).toEqual(80)

});