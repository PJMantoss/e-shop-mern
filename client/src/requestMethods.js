import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc0ZjhmZmFkNWZiYjY0NTIxNmNkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzExNjAxMiwiZXhwIjoxNjU3Mzc1MjEyfQ.40jBtdin0eq21td8KkwRf0aY_Ku0YGy8ITVrB8g5HQI';

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});