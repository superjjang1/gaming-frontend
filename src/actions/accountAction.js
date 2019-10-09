import axios from 'axios';
export default (data) =>{
    const accountUrl = `${window.apiHost}/my-account`
    const axiosResponse = axios.post(accountUrl,data);
    return{
        type: "Account",
        payload: axiosResponse
    }
}