import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc0ZjhmZmFkNWZiYjY0NTIxNmNkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzA0NjY3MSwiZXhwIjoxNjU3MzA1ODcxfQ.0W7dSlnJEJ-y4KGwJqcxKnFDB-2m48C5swq1S0ofPvk';

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});