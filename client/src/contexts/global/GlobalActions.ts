import { IGlobalState, IAction } from '../../../../constants/interfaces';

export const ACTION_TYPES: { [key: string]: string } = {
  SET_USERNAME: 'SET_USERNAME',
};

export const actions: {
  [key: string]: (state: IGlobalState, action: IAction) => IGlobalState;
} = {
  [ACTION_TYPES.SET_USERNAME]: (state, action) => ({
    ...state,
    username: action.payload,
  }),
};
