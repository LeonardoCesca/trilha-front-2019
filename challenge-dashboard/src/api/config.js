const axios = require('axios');

function getUsers() {
    return axios.get('https://reqres.in/api/users?per_page=8')
}

export default getUsers;