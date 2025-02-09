import { ADD_NOMINATION, DELETE_NOMINATION, RESET_NOMINATIONS } from "../constants/action-types";

export const addNomination = data => ({
  type: ADD_NOMINATION,
  payload: data
});

export const deleteNomination = id => ({
  type: DELETE_NOMINATION,
  payload: id
});

export const resetNominations = () => ({
  type: RESET_NOMINATIONS,
});