import {combineReducers} from 'redux';
import authReducer from './authReducer';
import tournamentReducer from './tournamentReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    tournament: tournamentReducer
});
export default rootReducer;