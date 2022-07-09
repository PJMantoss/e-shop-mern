import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc0ZjhmZmFkNWZiYjY0NTIxNmNkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzM5MTk0NiwiZXhwIjoxNjU3NjUxMTQ2fQ.2pI9FR6pDJdzPCvRyYPP8hl0yOtk9PECf9wy05K-Hq0';

export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});