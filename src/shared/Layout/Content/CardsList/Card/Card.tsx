import React from 'react';
import styles from './card.css';
import { TextContent } from "./TextContent";
import { Preview } from "./Preview";
import { Controls } from "./Controls";
import { IPostStoreData } from "../../../../../types/IPostStoreData";

export function Card(props: IPostStoreData) {
  const {
    postId,
    author,
    title,
    karma,
    imgUrl,
    created,
    commentsQty
  } = props;
  return (
    <div className={ styles.card }>
      <TextContent postId={ postId } author={ author } created={ created } title={ title }/>
      <Preview imageUrl={ imgUrl }/>
      <Controls karma={ karma } commentsQty={ commentsQty }/>
    </div>
  );
}
