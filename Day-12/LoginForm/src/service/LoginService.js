import axios from 'axios';

let handleLoginRequest = (email) => {
    return axios.get("http://localhost:3301/users?email="+email);
}

export { 
    handleLoginRequest 
};