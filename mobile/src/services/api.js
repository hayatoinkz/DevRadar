import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.25.6:3333'
    //http://<IP_da_Maquina>:3333 - Expo
    //http://localhost:3333 - Emulador Android/IOS
});

export default api;
