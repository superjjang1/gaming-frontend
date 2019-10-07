import axios from 'axios';
export default (data) =>{
    const tournamentUrl = `${window.apiHost}/community/new`
    const axiosResponse = axios.post(communityUrl,data);
    return{
        type: "newCommunity",
        payload: axiosResponse
    }
}