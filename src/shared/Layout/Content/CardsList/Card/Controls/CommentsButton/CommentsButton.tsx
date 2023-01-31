import React from 'react';
import styles from './commentsbutton.css';
import { Text } from "../../../../../../helpers/Text";
import { EIcon, Icon } from "../../../../../../helpers/Icon";
import { EColor } from "../../../../../../../types/EColor";

interface ICommentsButton {
  commentsQty?: number
}

export function CommentsButton({ commentsQty }: ICommentsButton) {
  return (
    <button className={ styles.commentsButton }>
      <Icon name={ EIcon.Comments } width={ 14 } height={ 14 }/>
      <Text size={ 14 } mobileSize={ 12 } color={ EColor.grayC4 } children={ commentsQty }/>
    </button>
  );
}
