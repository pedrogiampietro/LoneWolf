import { apiPost, apiGet, apiRefreshToken } from '../helpers/Api';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const PROFILE_INFO = 'PROFILE_INFO';
export const SIGN_OUT = 'SIGN_OUT';
export const INIT_ACCOUNT = 'INIT_ACCOUNT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const signUp = (data) => {
  const payload = apiPost('/auth/sign-up', data);
  return { type: SIGN_UP, payload };
};

export const signIn = (data) => {
  const payload = apiPost('/auth/sign-in', data);
  return { type: SIGN_IN, payload };
};

export const profileInfo = (data) => {
  const payload = apiGet('/auth/profile-info', data);
  return { type: PROFILE_INFO, payload };
};

export const signOut = () => {
  return { type: SIGN_OUT, payload: {} };
};

export const initAccount = () => {
  return { type: INIT_ACCOUNT, payload: {} };
};

export const getFreshToken = () => {
  const payload = apiRefreshToken();
  return { type: REFRESH_TOKEN, payload };
};
