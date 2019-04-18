const fetch = require('node-fetch');

function getRepo(username) {

    //let result = [];
    let url = `https://api.github.com/users/${username}/repos`;

    return fetch(url).then(response => response.json())
    .then(outputs => {
        return outputs.map(i => i.name)
        // for(let lion in outputs) {
        //     result.push(outputs[lion].name)
        // }
        // console.log(result);
    }).catch(error => {
        return error;
    })
}

module.exports = getRepo;