import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-c72a3.firebaseio.com'
});

export default instance;