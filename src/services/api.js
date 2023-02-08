import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://tapgameapi.azurewebsites.net/',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default Api;
