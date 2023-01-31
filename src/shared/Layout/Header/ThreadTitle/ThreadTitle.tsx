import React from 'react';
import styles from './threadtitle.css';
import { Text } from "../../../helpers/Text";

export function ThreadTitle() {
  return (
    <Text size={ 28 } mobileSize={ 20 } As={ 'h1' } className={ styles.threadTitle }>Личный кабинет</Text>
  );
}
