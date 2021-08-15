import axios from 'axios';
import config from '../config/apiConfig';

class Api {
    constructor(conf) {
        this.url = conf.url;
    }

    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`);
            return response.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`);
            return response.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
    async prices() {
        
    }
}

const api = new Api(config);

export default api;