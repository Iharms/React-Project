import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CommentForm, ICommentForm } from "../../../../../../../../UI/CommentForm";
import { IRootState } from "../../../../../../../../../store/reducer";
import { updateComment } from "../../../../../../../../../store/comment/commentActions";


export function CommentFormContainer() {
  const commentText = useSelector<IRootState, string>(state => state.comment.text);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(event.target.value));
  }

  const handleSubmit = (text: ICommentForm) => {
    console.log(text);
  }

  return (
    <CommentForm
      commentText={ commentText }
      onChange={ handleChange }
      onSubmit={ handleSubmit }
    />
  );
}
