import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api" //104.131.72.37:3000
});
export default api;
