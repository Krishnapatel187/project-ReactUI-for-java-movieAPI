import axios from 'axios';

export default axios.create({
    // baseURL: 'https://a7e3-2607-fea8-80d8-bc30-1dc6-e637-66b7-f5b0.ngrok.io',
    // headers: {
    //     "ngrok-skip-browser-warning": true
    // }
    baseURL:'http://localhost:8082',
});