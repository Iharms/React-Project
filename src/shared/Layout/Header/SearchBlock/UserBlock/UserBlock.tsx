import React from 'react';
import styles from './userblock.css';
import { EIcon } from "../../../../helpers/Icon";
import { Text } from "../../../../helpers/Text";
import { EColor } from "../../../../../types/EColor";
import { WrappedIcon } from "../../../../helpers/WrappedIcon";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={ `https://www.reddit.com/api/v1/authorize?client_id=${ process.env.CLIENT_ID }&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity` }
      className={ styles.userBox }>
      <div className={ styles.avatarBox }>
        { avatarSrc
          ? <img src={ avatarSrc } alt='user avatar' className={ styles.avatarImage }/>
          : <WrappedIcon As={ 'div' } className={ styles.avatarImage }
                         icon={ { name: EIcon.Anon, width: 30, height: 30 } }/> }
      </div>

      <div className={ styles.username }>
        { loading ? (
          <Text size={ 20 } color={ EColor.gray99 }>Загрузка...</Text>
        ) : (
          <Text size={ 20 } color={ username ? EColor.black : EColor.gray99 }>{ username || 'Аноним' }</Text>
        ) }
      </div>
    </a>
  );
}
