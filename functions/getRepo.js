const axios = require("axios");

function repo(user){
    return axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(res => {
        //console.log(res.data);  //res is same as .done, success, resolve
        return res.data;
    }).catch(error => "error") //.catch is same as reject which throws an error if it couldn't get the get.

}

module.exports = repo;