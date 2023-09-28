import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '63ce20df37dd4d00bc830bc6dc426ff7'
    }
});