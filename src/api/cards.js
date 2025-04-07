import axios from "axios";

const cardsApi = axios.create({
    baseURL: 'http://localhost:3500/questions',
})

export default cardsApi