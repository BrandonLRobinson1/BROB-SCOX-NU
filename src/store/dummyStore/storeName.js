import { handleActions, createAction } from 'redux-actions';

const defaultState = {
  thing: false
};

const prefix = 'DUMMYSTORE/STORENAME/';
export const setOrUpdateThing = createAction(`${prefix}SET_OR_UPDATE_THING`);


export default handleActions({
  [setOrUpdateThing]: (state, { payload }) => ({
  ...state,
  Thing: payload
  }),

}, defaultState);


export const someAsyncT = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setHasServerError(true));
    resolve();
  });
}