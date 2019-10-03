export default (state=[],action)=>{
    if(action.type==='Register'){
        console.log(action.payload.data);
        return action.payload.data
    }else if(action.type ==='logout'){
        return {}
    } else if(action.type ==='login'){
        return action.payload.data
    }
    return state;
}