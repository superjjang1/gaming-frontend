import {combineReducers} from 'redux';
import authReducer from './authReducer';
import tournamentReducer from './tournamentReducer';
import communityReducer from './communityReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    tournament: tournamentReducer,
    community: communityReducer
});
export default rootReducer;