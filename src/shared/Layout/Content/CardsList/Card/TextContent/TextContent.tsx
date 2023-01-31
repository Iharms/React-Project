import React from 'react';
import styles from './textcontent.css';
import { Title } from "./Title";
import { MetaData } from "./MetaData";

interface ITextContent {
  postId: string,
  author: string,
  title: string,
  created: number
}

export function TextContent({ postId, author, title, created }: ITextContent) {
  return (
    <div className={ styles.textContent }>
      <MetaData reversed author={ author } created={ created }/>
      <Title postId={ postId } title={ title }/>
    </div>
  );
}
