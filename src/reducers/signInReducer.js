import { 
    SIGN_IN_EMAIL,
    SIGN_IN_PASSWORD
} from '../constants';

const INITIAL_STATE = { signInEmail: '', signInPassword: '' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN_EMAIL:
            return{...state, signInEmail: action.payload};
        case SIGN_IN_PASSWORD:
            return{...state, signInPassword: action.payload};
        default:
            return state;
    }
}