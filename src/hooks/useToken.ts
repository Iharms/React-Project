import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store/reducer";
import { saveTokenAsync } from "../store/token/tokenActions";

export function useToken() {
  const token = useSelector<IRootState, string>(state => state.token.data);
  const loading = useSelector<IRootState, boolean>(state => state.token.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const code = window.__code__;
    const clientId = window.__clientId__;
    const redditSecret = window.__redditSecret__;
    if (code) {
      //@ts-ignore
      dispatch(saveTokenAsync(code, clientId, redditSecret));
    }
  }, []);
  return { token, loading }
}
