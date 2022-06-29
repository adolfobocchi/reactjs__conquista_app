import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://frozen-shore-49283.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default Api;