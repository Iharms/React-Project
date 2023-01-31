import { Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, } from "./me/meActions";
import { IMeState, MeActions, meReducer } from "./me/meReducer";
import { TokenActions, tokenReducer, TokenState } from "./token/tokenReducer";
import { SAVE_TOKEN, SAVE_TOKEN_ERROR, SAVE_TOKEN_SUCCESS, } from "./token/tokenActions";
import { IPostsState, PostsActions, postsReducer } from "./posts/postsReducer";
import { FETCH_POSTS, FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS } from "./posts/postsActions";
import { CommentActions, commentReducer, ICommentState } from "./comment/commentReducer";
import { UPDATE_COMMENT } from "./comment/commentActions";

export interface IRootState {
  me: IMeState;
  token: TokenState;
  posts: IPostsState;
  comment: ICommentState;
}

const initialState: IRootState = {
  token: {
    loading: false,
    error: '',
    data: ''
  },
  me: {
    loading: false,
    error: '',
    data: {
      name: '',
      iconImg: ''
    }
  },
  posts: {
    loading: false,
    error: '',
    data: [],
    after: '',
    fetchCounter: 0
  },
  comment: {
    text: '',
  }
}

type MyAction =
  TokenActions
  | MeActions
  | PostsActions
  | CommentActions;
export const rootReducer: Reducer<IRootState, MyAction> =
  (state = initialState, action) => {
    switch (action.type) {
      case SAVE_TOKEN:
      case SAVE_TOKEN_SUCCESS:
      case SAVE_TOKEN_ERROR:
        return {
          ...state,
          token: tokenReducer(state.token, action)
        }

      case ME_REQUEST:
      case ME_REQUEST_SUCCESS:
      case ME_REQUEST_ERROR:
        return {
          ...state,
          me: meReducer(state.me, action)
        }

      case FETCH_POSTS:
      case FETCH_POSTS_SUCCESS:
      case FETCH_POSTS_ERROR:
        return {
          ...state,
          posts: postsReducer(state.posts, action)
        }

      case UPDATE_COMMENT:
        return {
          ...state,
          comment: commentReducer(state.comment, action)
        }

      default:
        return state;
    }
  }
