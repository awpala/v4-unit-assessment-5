
const initialState = {
  username: '',
  profile_pic: '',
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';

export const updateUser = (userObj) => ({
  type: UPDATE_USER,
  payload: userObj,
});

export const logout = () => ({
  type: LOGOUT,
  payload: { ...initialState },
});

export default function reducer (state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
      case UPDATE_USER:
        return { ...state, ...payload };
      case LOGOUT:
        return { ...payload };
      default: return state;
  }
}
