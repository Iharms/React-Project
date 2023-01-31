import React from 'react';
import styles from './controls.css';
import { CommentsButton } from "./CommentsButton";
import { KarmaCounter } from "./KarmaCounter";
import { Menu } from "./Menu";
import { ActionButtons } from "./ActionButtons";

interface IControls {
  karma: number,
  commentsQty: number
}

export function Controls({ karma, commentsQty }: IControls) {
  return (
    <div className={ styles.controls }>
      <Menu/>
      <KarmaCounter karma={ karma }/>
      <CommentsButton commentsQty={ commentsQty }/>
      <ActionButtons/>
    </div>
  );
}
