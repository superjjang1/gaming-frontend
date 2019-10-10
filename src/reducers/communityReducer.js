export default (state = {}, action)=>{
    if(action.type ==='community'){
        return action.payload.data
    }
    return state;
}