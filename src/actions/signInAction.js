import { 
    SIGN_IN_EMAIL,
    SIGN_IN_PASSWORD
} from '../constants';

export const signInEmailChanged = (email) => {
    return {
        type: SIGN_IN_EMAIL,
        payload: email
    };
};

export const signInPasswordChanged = (password) => {
    return {
        type: SIGN_IN_PASSWORD,
        payload: password
    };
};