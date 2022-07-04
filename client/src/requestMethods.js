import axios from 'axios';

const BASE_URL = 'https://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc0ZjhmZmFkNWZiYjY0NTIxNmNkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Njk1NTI3OCwiZXhwIjoxNjU3MjE0NDc4fQ.pbMcLNFz7AQ8V-SEd2MsN3-bqMww99RAfSqEq8eXHf0';

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});