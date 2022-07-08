import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc0ZjhmZmFkNWZiYjY0NTIxNmNkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzI4MzUzNSwiZXhwIjoxNjU3NTQyNzM1fQ.IWGVpv2H5COoGHzPgi7SNuWCiOXaeUxd8GHXH7_5goU';

export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});