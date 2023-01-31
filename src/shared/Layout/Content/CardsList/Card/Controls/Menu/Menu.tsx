import React from 'react';
import styles from './menu.css';
import { GenericList, IItem } from "../../../../../../helpers/GenericList";
import { generateId } from "../../../../../../../utils/react/generateRandomIndex";
import { MenuIcon } from "../../../../../../icons";
import { EIcon, Icon } from "../../../../../../helpers/Icon";
import { Dropdown } from "../../../../../../helpers/Dropdown";
import { Text } from "../../../../../../helpers/Text";
import { EColor } from "../../../../../../../types/EColor";


const MENU_BUTTONS: IItem[] = [
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.commentsButton }`,
    children:
      <>
        <Icon name={ EIcon.Comments } width={ 16 } height={ 16 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Комментарии</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.shareButton }`,
    children:
      <>
        <Icon name={ EIcon.Share } width={ 12 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Поделиться</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.hideButton }`,
    children:
      <>
        <Icon name={ EIcon.Hide } width={ 14 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Скрыть</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.saveButton }`,
    children:
      <>
        <Icon name={ EIcon.Save } width={ 14 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Сохранить</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.complainButton }`,
    children:
      <>
        <Icon name={ EIcon.Warning } width={ 16 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Пожаловаться</Text>
      </>,
  }
].map(generateId);

export function Menu() {
  const [ isDropDownOpen, setIsDropDownOpen ] = React.useState(false);

  const handleClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  return (
    <div className={ styles.menu }>
      <Dropdown
        button={
          <button
            className={ isDropDownOpen ? styles.menuButton + ' ' + styles.menuButtonActive : styles.menuButton }
            onClick={ handleClick }
          >
            <MenuIcon width={ 5 } height={ 20 }/>
          </button>
        }
        isOpen={ isDropDownOpen }
      >
        <div className={ styles.dropdown }>
          <div className={ styles.dropdownButtons }>
            <GenericList list={ MENU_BUTTONS }/>
          </div>
          <button className={ styles.closeButton } onClick={ handleClick }>
            <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray66 }>Закрыть</Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
