import React from 'react';
import styles from './text.css';
import classNames from 'classnames';
import { EColor } from "../../../types/EColor";

type TTextSize = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  size: TTextSize;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'a' | 'button';
  className?: string;
  href?: string;
  children?: React.ReactNode;
  mobileSize?: TTextSize;
  tabletSize?: TTextSize;
  desktopSize?: TTextSize;
  color?: EColor;
  bold?: boolean;
  onClick?: () => void;
  visible?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    className,
    href,
    color = EColor.black,
    bold = false,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    onClick,
    visible = true
  } = props;

  // const [isVisible, setIsVisible] = React.useState(true);
  if (!visible) {
    return null;
  }

  const classes = classNames(
    className,
    styles[`s${ size }`],
    styles[color],
    { [styles.bold]: bold },
    { [styles[`m${ mobileSize }`]]: mobileSize },
    { [styles[`t${ tabletSize }`]]: tabletSize },
    { [styles[`d${ desktopSize }`]]: desktopSize },
  );

  return (
    <As className={ classes } href={ href } onClick={ onClick }>
      { children }
    </As>
  );
}
