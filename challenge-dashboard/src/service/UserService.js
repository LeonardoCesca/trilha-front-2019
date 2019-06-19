const axios = require('axios');
// const page = 'users?per_page=8';

function getDataApi(page) {
    return axios.get(`https://reqres.in/api${page}`)
        .then(resposta => resposta.data.data)
        .catch(error => error);
}

export default {
    getDataApi
}