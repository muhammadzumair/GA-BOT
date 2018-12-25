import { LOGINSUCCESS, LOGINFAIL, LOG_OUT, LOADING } from '../actions/Types';

const INITIAL_STATE = { isLogin: false, userData: null, loading: false, goals: null, platforms: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGINSUCCESS:
            return {
                ...state,
                isLogin: true,
                loading: false,
                userData: action.payload.user,
                goals: action.payload.goals,
                platforms: action.payload.platforms
            };
        case LOGINFAIL:
            return { ...state, error: action.payload };
        case LOADING:
            return { ...state, loading: true };
        case LOG_OUT:
            return { ...state, isLogin: false };
        default:
            return state;
    }
}