import {
    USER_PROFILE_IMAGE,
    USER_FULL_NAME,
    USER_EMAIL,
    USER_PHONE_NUMBER,
    USER_BIRTH_DATE,
    USER_PASSWORD,
    USER_CONFIRM_PASSWORD
} from '../constants';

export const fullnameChanged = (name) => {
    return {
        type: USER_FULL_NAME,
        payload: name
    };  
};

export const emailChanged = (email) => {
    return {
        type: USER_EMAIL,
        payload: email
    };
};

export const phoneNumberChanged = (number) => {
    return {
        type: USER_PHONE_NUMBER,
        payload: number
    };
};

export const birthDateChanged = (date) => {
    return {
        type: USER_BIRTH_DATE,
        payload: date
    }
}

export const passwordChanged = (password) => {
    return {
        type: USER_PASSWORD,
        payload: password
    }
}

export const confirmPasswordChanged = (confirmPassword) => {
    return {
        type: USER_CONFIRM_PASSWORD,
        payload: confirmPassword
    }
}

export const userProfileImageChanged = (source) => {
    return{
        type: USER_PROFILE_IMAGE,
        payload: source
    }
}
