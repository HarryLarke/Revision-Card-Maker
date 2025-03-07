import axios from "axios";

const cardsApi = axios.create({
    baseURL: 'http://localhost:3001',
})

export default api