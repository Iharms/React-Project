import React from 'react';
import styles from './metadata.css';
import { Text } from "../../../../../../helpers/Text";
import { EColor } from "../../../../../../../types/EColor";

interface IMetaData {
  reversed?: boolean,
  author: string,
  created: number,
}

export function MetaData({ reversed, author, created }: IMetaData) {
  const publishedBefore = Math.floor((Date.now() - created * 1000) / (1000 * 60));

  return (
    <div className={ `${styles.metaData} ${reversed ? styles.metaDataReversed : ''}` } >
      <div className={ styles.userLink }>
        <img className={ styles.avatar }
             src="https://cdn.dribbble.com/users/4688711/screenshots/18468118/media/81684e0a9cb32d00727f52f01ffb96c8.png?compress=1&resize=400x300&vertical=top"
             alt="avatar"
        />
        <Text size={ 14 }
              mobileSize={ 10 }
              color={ EColor.orange }
              className={ styles.username }
              As={ 'a' }
              href={ '#user-url' }
              children={ author }
        />
      </div>
      <Text size={ 14 } mobileSize={ 10 } color={ EColor.gray99 } className={ styles.published }>
        <span className={ styles.publishedLabel }>опубликовано </span>
        { publishedBefore + ' часа назад' }
      </Text>
    </div>
  );
}
