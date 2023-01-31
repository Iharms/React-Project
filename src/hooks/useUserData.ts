import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserStoreData } from "../types/IUserStoreData";
import { IRootState } from "../store/reducer";
import { meRequestAsync } from "../store/me/meActions";

export function useUserData() {
  const token = useSelector<IRootState, string>(store => store.token.data);
  const data = useSelector<IRootState, IUserStoreData>(store => store.me.data);
  const loading = useSelector<IRootState, boolean>(store => store.me.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!token || token === 'undefined') {
      return
    }
    // @ts-ignore
    dispatch(meRequestAsync())
  }, [ token ]);

  return { data, loading };
}
