import { handleActions, createAction } from 'redux-actions';

const defaultState = {
  firstName: '',
  lastName: '',
  zipCode: ''
};

const prefix = 'NU_STORE/SIGN_UP/';
export const updateFirstName = createAction(`${prefix}UPDATE_FIRST_NAME`);
export const updateLastName = createAction(`${prefix}UPDATE_LAST_NAME`);
export const updateZipCode = createAction(`${prefix}UPDATE_ZIP_CODE`);


export default handleActions({
  [updateFirstName]: (state, { payload }) => ({
    ...state,
    firstName: payload
  }),
  [updateLastName]: (state, { payload }) => ({
    ...state,
    lastName: payload
  }),
  [updateZipCode]: (state, { payload }) => ({
    ...state,
    zipCode: payload
  })
}, defaultState);
