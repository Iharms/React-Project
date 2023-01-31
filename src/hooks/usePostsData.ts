import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store/reducer";
import { fetchPostsAsync } from "../store/posts/postsActions";
import { IPostsState } from "../store/posts/postsReducer";

export function usePostsData() {
  const token = useSelector<IRootState, string>(store => store.token.data);
  const { data, loading, error } = useSelector<IRootState, IPostsState>(store => store.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!token || token === 'undefined') return;
    // @ts-ignore
    dispatch(fetchPostsAsync(token));
  }, [ token ])

  return { data, loading, error };
}
