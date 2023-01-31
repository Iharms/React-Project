import React from 'react';
import styles from './sortblock.css';
import { Text } from "../../../helpers/Text";

export function SortBlock() {
  return (
    <Text As={ 'div' } size={ 20 } mobileSize={ 12 } className={ styles.sortBlock }>Sorting dropdown</Text>
  );
}
