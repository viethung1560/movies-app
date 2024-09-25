import axios from 'axios';

export default  axios.create({
    baseURL:'https://3869-2001-861-3a42-80d0-ee78-53a4-d951-595a.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});