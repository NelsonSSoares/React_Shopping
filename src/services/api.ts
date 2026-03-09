import axios from "axios";
// json-server --watch db.json --port 3000
export const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});