import { Reducer } from "react";
import { UPDATE_COMMENT, UpdateComment } from "./commentActions";

export interface ICommentState {
  text: string;
}

export type CommentActions = UpdateComment;
export const commentReducer: Reducer<ICommentState, CommentActions> = (state, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        text: action.text
      }
  }
}
