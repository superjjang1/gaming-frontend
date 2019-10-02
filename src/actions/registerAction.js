import axios from 'axios';

export default (data) =>{
    const signupUrl = `${window.apiHost}/users/register`
    const axiosResponse = axios.post(signupUrl,data);
    return{
        type: "signUp",
        payload: axiosResponse
    }
}