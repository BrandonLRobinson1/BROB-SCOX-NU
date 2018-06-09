import { handleActions, createAction } from 'redux-actions';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

const defaultState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  password: '',
  zipCode: '',
  email: ''
};

const prefix = 'NU_STORE/SIGN_UP/';
export const updateFirstName = createAction(`${prefix}UPDATE_FIRST_NAME`);
export const updateLastName = createAction(`${prefix}UPDATE_LAST_NAME`);
export const updatePhoneNumber = createAction(`${prefix}UPDATE_PHONE_NUMBER`);
export const updatePassword = createAction(`${prefix}UPDATE_PASSWORD`);
export const updateZipCode = createAction(`${prefix}UPDATE_ZIP_CODE`);
export const updateEmail = createAction(`${prefix}UPDATE_EMAIL`);

export default handleActions({
  [updateFirstName]: (state, { payload }) => ({
    ...state,
    firstName: payload
  }),
  [updateLastName]: (state, { payload }) => ({
    ...state,
    lastName: payload
  }),
  [updatePhoneNumber]: (state, { payload }) => ({
    ...state,
    phoneNumber: payload
  }),
  [updatePassword]: (state, { payload }) => ({
    ...state,
    password: payload
  }),
  [updateZipCode]: (state, { payload }) => ({
    ...state,
    zipCode: payload
  }),
  [updateEmail]: (state, { payload }) => ({
    ...state,
    email: payload
  })

}, defaultState);

export const signUserUp = passWord => (dispatch, getState) => {
  const { currentUser } = firebase.auth();
    const {
      signUp: {
        SignUp: {
          firstName,
          lastName,
          zipCode,
          email,
          phoneNumber,
          password
        }
      }
    } = getState();
    // *** // to lowercase everuthing

   return firebase.auth().createUserWithEmailAndPassword(email.toLowerCase(), password); // use return otherwise it will try to regulate password length
      

};


export const clearAll = () => (dispatch, getState) => {
  dispatch(updateFirstName(null));
  dispatch(updateLastName(null));
  dispatch(updatePhoneNumber(null));
  dispatch(updatePassword(null));
  dispatch(updateZipCode(null));
  dispatch(updateEmail(null));
};

// console.log('firebase.auth', firebase.auth)
  // // TODO: SWITCH IT OFF TEST DATA FOLDER IN FIREBASE
  // return firebase.database().ref(`/users/${currentUser.uid}/testAccounts`)
  //   .push({ firstName, lastName, zipCode, email, phoneNumber, password })
  //   .then(() => Actions.pop()) //prevents double stacking in scene
  //   .then(() => {
  //     dispatch(clearAll()) // clears input
      
  //     Actions.somewhere()
  //   })
  //   .catch(err => console.error(err))