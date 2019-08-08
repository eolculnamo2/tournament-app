import { actions } from './global/GlobalActions';
import { IAction, IGlobalState } from '../../../constants/interfaces';

// Add state when others are introduced.
export type states = IGlobalState;

function reducer(state: states, action: IAction) {
  return actions[action.type](state, action);
}

export default reducer;
