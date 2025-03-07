import axios from "axios";

const bundlesApi = axios.create({
    baseURL: 'http://localhost:3002',
})

export default bundlesApi