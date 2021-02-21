import {
  apiPost,
  apiRefreshToken,
  apiPut,
  apiGet,
  apiPostAvatar,
  apiDelete,
} from '../helpers/Api';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const INIT_ACCOUNT = 'INIT_ACCOUNT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const PROFILE_INFO = 'PROFILE_INFO';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const PROFILE_NAME = 'PROFILE_NAME';
export const GET_PROFILE_AVATAR = 'GET_PROFILE_AVATAR';
export const POST_PROFILE_AVATAR = 'POST_PROFILE_AVATAR';
export const DELETE_PROFILE_AVATAR = 'DELETE_PROFILE_AVATAR';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const signUp = (data) => {
  const payload = apiPost('/auth/sign-up', data);
  return { type: SIGN_UP, payload };
};

export const signIn = (data) => {
  const payload = apiPost('/auth/sign-in', data);
  return { type: SIGN_IN, payload };
};

export const signOut = () => {
  return { type: SIGN_OUT, payload: {} };
};

export const changePassword = (data) => {
  const payload = apiPut('/auth/password', { ...data });
  return { type: CHANGE_PASSWORD, payload };
};

export const profileInfo = (data) => {
  const payload = apiPut('/auth/profile_info', { ...data });
  return { type: PROFILE_INFO, payload };
};

export const profileName = (data) => {
  const payload = apiPost('/auth/profile_name', data);
  return { type: PROFILE_NAME, payload };
};

export const getProfileAvatar = (data) => {
  const payload = apiGet('/auth/avatar', data);
  return { type: GET_PROFILE_AVATAR, payload };
};

export const postProfileAvatar = (data) => {
  const payload = apiPostAvatar('/auth/avatar', data);
  return { type: POST_PROFILE_AVATAR, payload };
};

export const deleteProfileAvatar = (data) => {
  const payload = apiDelete('/auth/avatarDelete', data);
  return { type: DELETE_PROFILE_AVATAR, payload };
};

export const initAccount = () => {
  return { type: INIT_ACCOUNT, payload: {} };
};

export const getFreshToken = () => {
  const payload = apiRefreshToken();
  return { type: REFRESH_TOKEN, payload };
};

export const forgotPassword = (data) => {
  const payload = apiPost('/auth/forgot', data);
  return { type: FORGOT_PASSWORD, payload };
};

export const resetPassword = (data) => {
  const payload = apiPost('/auth/reset', data);
  return { type: RESET_PASSWORD, payload };
};
