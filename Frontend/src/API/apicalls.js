const HOST=import.meta.env.VITE_BACKEND_URL
export const API=`${HOST}/api`

export const SIGNUP_API=`${API}/signup`
export const LOGIN_API = `${API}/login`;
export const LOGOUT_API = `${API}/logout`;
export const VERIFY_API=`${API}/verify-token`;
export const PREFERENCE_API = `${HOST}/user/make-preference`;
