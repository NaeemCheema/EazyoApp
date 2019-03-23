import {
    USER_PROFILE_IMAGE,
    USER_FULL_NAME,
    USER_EMAIL,
    USER_PHONE_NUMBER,
    USER_BIRTH_DATE,
    USER_PASSWORD,
    USER_CONFIRM_PASSWORD
} from '../constants';

const INITIAL_STATE = {user_image: '',fullname: '', email: '', validEmail: false, phone_number: '', birth_date: '', password: '', confirm_password: ''}

export default(state = INITIAL_STATE , action) => {
    switch(action.type){
        case USER_PROFILE_IMAGE:
            return{...state, user_image: action.payload}
        case USER_FULL_NAME:
            return{...state, fullname: action.payload};
        case USER_EMAIL:
            return{...state, email: action.payload};
        case USER_PHONE_NUMBER:
            return{...state, phone_number: action.payload};
        case USER_BIRTH_DATE:
            return{...state, birth_date: action.payload};
        case USER_PASSWORD:
            return{...state, password: action.payload};
        case USER_CONFIRM_PASSWORD:
            return{...state, confirm_password: action.payload};
        default:
            return state;
    }
}