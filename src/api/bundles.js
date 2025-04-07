import axios from "axios";

const bundlesApi = axios.create({
    baseURL: 'http://localhost:3500/bundles',
})

export default bundlesApi