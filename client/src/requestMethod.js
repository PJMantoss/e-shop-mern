import axios from 'axios';

const BASE_URL = 'https://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWM5YWVkMDhjNDEzODY2NTYzNWViYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzk2NDY2OCwiZXhwIjoxNjQ4MjIzODY4fQ.fzt3YJ8sx7uyp7c5FRMSvgq0hU1rN6spPgwmXxcyrKM';

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});