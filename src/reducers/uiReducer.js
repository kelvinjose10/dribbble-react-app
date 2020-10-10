import { types } from '../types/types';

const initilState = {
  loading: false,
};
export const uiReducer = (state = initilState, action) => {
  switch (action.type) {
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
