import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I1NzM0OTAxNTQxOTZiYTI0NDZhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODgyNzg4NSwiZXhwIjoxNjQ5MDg3MDg1fQ.iORcbF4IGHpuR-xYlnhOD7Fxbs4udLH34yNtaZ9AVkg";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});