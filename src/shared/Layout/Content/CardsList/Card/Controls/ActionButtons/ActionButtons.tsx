import React from 'react';
import styles from './actionbuttons.css';
import {WrappedIcon} from "../../../../../../helpers/WrappedIcon";
import {EIcon, IIconProps} from "../../../../../../helpers/Icon";

export function ActionButtons() {
  const shareIcon: IIconProps = {
    name: EIcon.Share,
    width: 8,
    height: 12
  }
  const saveIcon: IIconProps = {
    name: EIcon.Save,
    width: 10,
    height: 10
  }

  return (
    <div className={styles.actionButtons}>
      <WrappedIcon As={'button'} icon={shareIcon} className={styles.button}/>
      <WrappedIcon As={'button'} icon={saveIcon} className={styles.button}/>
    </div>
  );
}
