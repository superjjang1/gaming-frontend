export default (state = {}, action)=>{
    if(action.type ==='tournament'){
        return action.payload.data
    }
    return state;
}