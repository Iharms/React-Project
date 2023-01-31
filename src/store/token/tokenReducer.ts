import {
  SAVE_TOKEN,
  SAVE_TOKEN_ERROR,
  SAVE_TOKEN_SUCCESS,
  SaveToken,
  SaveTokenError,
  SaveTokenSuccess
} from "./tokenActions";
import { Reducer } from "react";

export type TokenState = {
  loading: boolean,
  data: string
  error: string,
}

export type TokenActions = SaveToken | SaveTokenSuccess | SaveTokenError;

export const tokenReducer: Reducer<TokenState, TokenActions> = (state, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        loading: true
      }
    case SAVE_TOKEN_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case SAVE_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
  }
}
