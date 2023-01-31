import React from 'react';
import styles from './preview.css';

interface IPreview {
  imageUrl: string
}

export function Preview({ imageUrl }: IPreview) {
  return (
    <div className={ styles.preview }>
      <img className={ styles.previewImg }
           src={ imageUrl }
           alt='post_img'
      />
    </div>
  );
}
