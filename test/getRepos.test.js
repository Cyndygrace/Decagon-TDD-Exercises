const repo = require("../functions/getRepo");

test ("that username fetch repo output repo data", () =>{
    let result = [];
    return repo("cyndygrace").then(data => {
        for(let i in data) {
            result.push(data[i].name);
        }
        expect(result).toContain("Cynthia-Iloekwe-CV")
    });
})