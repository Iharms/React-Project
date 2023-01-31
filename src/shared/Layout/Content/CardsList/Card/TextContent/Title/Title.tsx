import React from 'react';
import styles from './title.css';
import { Text } from "../../../../../../helpers/Text";
import { Link } from 'react-router-dom'

interface ITitle {
  postId: string,
  title: string,
}

export function Title({ postId, title }: ITitle) {
  return (
    <h2 className={ styles.title }>
      <Link to={ '/posts/' + postId }>
        <Text
          As={ 'button' }
          size={ 20 }
          mobileSize={ 16 }
          className={ styles.title__btn }
          children={ title }
        />
      </Link>
    </h2>
  );
}
