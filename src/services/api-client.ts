import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_RAWG_API_URL,
    params: {
        key: import.meta.env.VITE_RAWG_SECRET_KEY
    }
});

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     params: {
//         key: '63ce20df37dd4d00bc830bc6dc426ff7'
//     }
// });