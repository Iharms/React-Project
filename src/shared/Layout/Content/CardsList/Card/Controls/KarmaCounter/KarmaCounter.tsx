import React from 'react';
import styles from './karmacounter.css';
import { Text } from "../../../../../../helpers/Text";
import { EIcon, Icon } from "../../../../../../helpers/Icon";
import { EColor } from "../../../../../../../types/EColor";

interface IKarmaCounter {
  karma?: number
}

export function KarmaCounter({ karma }: IKarmaCounter) {
  const isCountVisible = !!karma;

  return (
    <div className={ styles.karmaCounter }>
      <button className={ styles.up }>
        <Icon name={ EIcon.Up } width={ 19 } height={ 10 }/>
      </button>
      <Text size={ 14 } mobileSize={ 12 } color={ EColor.grayC4 } children={ karma } visible={ isCountVisible }/>
      <button className={ styles.down }>
        <Icon name={ EIcon.Up } width={ 19 } height={ 10 }/>
      </button>
    </div>
  );
}
