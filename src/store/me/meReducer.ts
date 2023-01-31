import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction
} from "./meActions";
import { Reducer } from "react";
import { IUserStoreData } from "../../types/IUserStoreData";

export interface IMeState {
  loading: boolean,
  data: IUserStoreData
  error: string
}

export type MeActions = MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;
export const meReducer: Reducer<IMeState, MeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }

    default:
      return state
  }
}
