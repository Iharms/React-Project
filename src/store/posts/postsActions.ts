import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "../reducer";
import axios from "axios";
import { IPostStoreData } from "../../types/IPostStoreData";

export const FETCH_POSTS = 'FETCH_POSTS';
export type FetchPosts = {
  type: typeof FETCH_POSTS
}
export const fetchPosts: ActionCreator<FetchPosts> = () => ({
  type: FETCH_POSTS,
  loading: true,
  error: ''
})

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export type FetchPostsSuccess = {
  type: typeof FETCH_POSTS_SUCCESS,
  data: IPostStoreData[],
  after: string,
  fetchCounter: number
}
type FetchPostsSuccessData = {
  data: IPostStoreData[],
  after: string,
  fetchCounter: number
}
export const fetchPostsSuccess: ActionCreator<FetchPostsSuccess> = (data: FetchPostsSuccessData) => ({
  type: FETCH_POSTS_SUCCESS,
  data: data.data,
  after: data.after,
  fetchCounter: data.fetchCounter
})

export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export type FetchPostsError = {
  type: typeof FETCH_POSTS_ERROR,
  error: string
}
export const fetchPostsError: ActionCreator<FetchPostsError> = (error: string) => ({
  type: FETCH_POSTS_ERROR,
  error: error
})

export const fetchPostsAsync =
  (token: string, after: string): ThunkAction<void, IRootState, unknown, Action<string>> =>
    (dispatch, getState) => {
      dispatch(fetchPosts());

      async function loadPosts() {
        try {
          const resp: any = await axios.get('https://oauth.reddit.com/best.json', {
            headers: { Authorization: `bearer ${ token }` },
            params: {
              sr_detail: true,
              after: after,
              limit: 5
            }
          })
          const posts: IPostStoreData[] = resp.data.data.children.map((p: any) => {
            return {
              postId: p.data.id,
              name: p.data.name,
              author: p.data.author,
              title: p.data.title,
              karma: p.data.score,
              imgUrl: p.data.url_overridden_by_dest,
              created: p.data.created,
              subreddit: p.data.subreddit,
              commentsQty: p.data.num_comments
            }
          });
          dispatch(fetchPostsSuccess({
            data: posts,
            after: posts[posts.length - 1].name,
            fetchCounter: getState().posts.fetchCounter + 1
          }));
        } catch (error) {
          dispatch(fetchPostsError(String(error)));
        }
      }

      loadPosts();
    }
