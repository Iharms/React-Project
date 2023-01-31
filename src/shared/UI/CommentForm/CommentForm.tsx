import React, { ChangeEvent } from 'react';
import styles from './commentform.css';
import { useFormContext } from "react-hook-form";

export interface ICommentFormProps {
  commentText: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (commentText: ICommentForm) => void;
}
export interface ICommentForm {
  commentText: string;
}

export function CommentForm({ commentText, onChange, onSubmit }: ICommentFormProps) {
  const { register, handleSubmit, formState: { errors } } = useFormContext<ICommentForm>();

  return (
    <form className={ styles.form } onSubmit={ handleSubmit(onSubmit) }>
      { errors && <div className={ styles.formErrorMessage }>{ errors.commentText?.message }</div> }
      <textarea
        { ...register('commentText', {
            required: 'Необходимо ввести текст сообщения',
            minLength: {
              value: 5,
              message: 'Минимальное количество символов: 5'
            }
          }
        ) }
        className={ styles.input } value={ commentText } onChange={ onChange }/>
      <button type="submit" className={ styles.button }>Комментировать</button>
    </form>
  );
}
