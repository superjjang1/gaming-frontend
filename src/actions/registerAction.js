import axios from 'axios';

export default (data) =>{
    console.log(data);
    const signupUrl = `${window.apiHost}/Register`
    const axiosResponse = axios.post(signupUrl,data);
    return{
        type: "signUp",
        payload: axiosResponse
    }
}