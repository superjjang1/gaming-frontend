import axios from 'axios';

export default (data) =>{
    const tournamentUrl = `${window.apiHost}/tournaments/new`
    const axiosResponse = axios.post(tournamentUrl,data);
    return{
        type: "newTournament",
        payload: axiosResponse
    }
}