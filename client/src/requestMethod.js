import axios from 'axios';

const BASE_URL = 'https://localhost:5000/api';

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: 'Bearer '}
});