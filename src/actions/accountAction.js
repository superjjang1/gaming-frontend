import axios from 'axios';
export default (data) =>{
    const accountUrl = `${window.apiHost}/my-account/edit`
    const axiosResponse = axios.post(accountUrl,data);
    return{
        type: "newAccount",
        payload: axiosResponse
    }
}