import { types } from '../types/types';

export const uiStartLoading = () => ({
  type: types.uiStartLoading,
});

export const uiFinishtLoading = () => ({
  type: types.uiFinishLoading,
});
