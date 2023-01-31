import { IPostStoreData } from "../../types/IPostStoreData";
import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
  FetchPosts,
  FetchPostsError,
  FetchPostsSuccess
} from "./postsActions";
import { Reducer } from "react";

export interface IPostsState {
  loading: boolean;
  error: string;
  data: IPostStoreData[];
  after: string;
  fetchCounter: number;
}

export type PostsActions = FetchPosts | FetchPostsSuccess | FetchPostsError;
export const postsReducer: Reducer<IPostsState, PostsActions> = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        data: [ ...state.data, ...action.data ],
        after: action.after,
        loading: false,
        fetchCounter: action.fetchCounter
      }
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }

    default:
      return state;
  }
}
