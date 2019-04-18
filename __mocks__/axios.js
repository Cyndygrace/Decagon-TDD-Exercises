const repos = [
    {
        "id": 180362802,
        "node_id": "MDEwOlJlcG9zaXRvcnkxODAzNjI4MDI=",
        "name": "Cynthia-Iloekwe-CV",
        "full_name": "Cyndygrace/Cynthia-Iloekwe-CV",
        "private": false,
        "owner": {
        "login": "Cyndygrace",
        }
    },
    {
        "id": 181019026,
        "node_id": "MDEwOlJlcG9zaXRvcnkxODEwMTkwMjY=",
        "name": "Decagon-TDD-Exercises",
        "full_name": "Cyndygrace/Decagon-TDD-Exercises",
        "private": false,
        "owner": {
        "login": "Cyndygrace",
        }
    },
    {
        "id": 180767890,
        "node_id": "MDEwOlJlcG9zaXRvcnkxODA3Njc4OTA=",
        "name": "Delete-repository",
        "full_name": "Cyndygrace/Delete-repository",
        "private": false,
        "owner": {
        "login": "Cyndygrace",
        }
    }
]
const get = (url) => {
    url: "https://api.github.com/users/cyndygrace/repos"
    return Promise.resolve ({data:repos})
};

exports.get = get;