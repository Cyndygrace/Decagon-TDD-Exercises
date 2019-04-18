let getRepo = require('./ourmock');

test ("that the username - cyndygrace will contain Decagon-TDD-Exercises", async () => {
    let result = await getRepo("cyndygrace");
    console.log(result)
    expect(result).toContain('Cynthia-Iloekwe-CV');
});