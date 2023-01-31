import React from 'react';
import styles from './comment.css';
import { MetaData } from "../../../MetaData";
import { Text } from "../../../../../../../../helpers/Text";
import { GenericList, IItem } from "../../../../../../../../helpers/GenericList";
import { EIcon, Icon } from "../../../../../../../../helpers/Icon";
import { EColor } from "../../../../../../../../../types/EColor";
import { generateId } from "../../../../../../../../../utils/react/generateRandomIndex";
import { Break } from "../../../../../../../../helpers/Break";
import { KarmaCounter } from "../../../../Controls/KarmaCounter";
import { useDispatch } from "react-redux";
import { updateComment } from "../../../../../../../../../store/comment/commentActions";
import { useFormContext } from "react-hook-form";
import { ICommentForm } from "../../../../../../../../UI/CommentForm";

const MENU_BUTTONS: IItem[] = [
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.commentsButton }`,
    children:
      <>
        <Icon name={ EIcon.Comments } width={ 16 } height={ 16 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Ответить</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.shareButton }`,
    children:
      <>
        <Icon name={ EIcon.Share } width={ 12 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Поделиться</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.complainButton }`,
    children:
      <>
        <Icon name={ EIcon.Warning } width={ 16 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Пожаловаться</Text>
      </>,
  }
].map(generateId);

interface ICommentProps {
  author: string,
  created: number,
  body: string
}

export function Comment({ author, created, body }: ICommentProps) {
  const dispatch = useDispatch();
  const { setFocus } = useFormContext<ICommentForm>();

  function handleAnswerClick() {
    dispatch(updateComment(author + ', '));
    setFocus('commentText');
  }

  MENU_BUTTONS[0] = { ...MENU_BUTTONS[0], onClick: handleAnswerClick };

  return (
    <div className={ styles.comment }>
      <div className={ styles.mainLine }>
        <KarmaCounter/>
        <span className={ styles.verticalLine }/>
      </div>
      <div>
        <div className={ styles.metaData }>
          <MetaData author={ author } created={ created }/>
        </div>
        <Break size={ 12 } bottom/>
        <Text size={ 14 } As={ 'div' }>{ body }</Text>
        <Break size={ 8 } bottom/>
        <div className={ styles.menuButtons }>
          <GenericList list={ MENU_BUTTONS }/>
        </div>
      </div>
    </div>
  );
}
