import axios from 'axios';

export const http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export const mycall = axios.create({
    baseURL:'http://THIAGO-FIX:80/api/'
})
