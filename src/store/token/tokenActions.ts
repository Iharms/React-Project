import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "../reducer";
import axios from "axios";

export const SAVE_TOKEN = 'TOKEN_REQUEST';
export type SaveToken = {
  type: typeof SAVE_TOKEN
}
export const saveToken: ActionCreator<SaveToken> = () => ({
  type: SAVE_TOKEN
})

export const SAVE_TOKEN_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export type SaveTokenSuccess = {
  type: typeof SAVE_TOKEN_SUCCESS,
  data: string
}
export const saveTokenSuccess: ActionCreator<SaveTokenSuccess> = (data: string) => ({
  type: SAVE_TOKEN_SUCCESS,
  data: data
})

export const SAVE_TOKEN_ERROR = 'TOKEN_REQUEST_ERROR';
export type SaveTokenError = {
  type: typeof SAVE_TOKEN_ERROR,
  error: string
}
export const saveTokenError: ActionCreator<SaveTokenError> = (error: string) => ({
  type: SAVE_TOKEN_ERROR,
  error: error
})

export const saveTokenAsync = (code: string, clientId: string, redditSecret: string): ThunkAction<void, IRootState, unknown, Action<string>> =>
  (dispatch) => {
    if (code === 'undefined') return;
    dispatch(saveToken());
    axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${ code }&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: clientId,
          password: redditSecret
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then((resp) => {
        dispatch(saveTokenSuccess(resp.data.access_token))
      })
      .catch((error) => {
        console.log(error)
        dispatch(saveTokenError(String(error)))
      })
  }
