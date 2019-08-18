import { IGlobalState, IAction } from '../../../../constants/interfaces';

export const ACTION_TYPES: { [key: string]: string } = {
  SET_USERNAME: 'SET_USERNAME',
  UPDATE_LOGIN: 'UPDATE_LOGIN',
};

export const actions: {
  [key: string]: (state: IGlobalState, action: IAction) => IGlobalState;
} = {
  [ACTION_TYPES.SET_USERNAME]: (state, action) => ({
    ...state,
    username: action.payload,
  }),
  [ACTION_TYPES.UPDATE_LOGIN]: (state, action) => ({
    ...state,
    loggedIn: action.payload,
  }),
};
