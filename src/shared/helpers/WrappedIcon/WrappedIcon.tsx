import React from 'react';
import {Icon, IIconProps} from "../Icon";

interface IWrappedIconProps {
  As: 'button' | 'div';
  className?: string;
  icon: IIconProps;
}

export function WrappedIcon({As, className, icon}: IWrappedIconProps) {
  return (
    <As className={className}>
      <Icon name={icon.name} width={icon.width} height={icon.height} />
    </As>
  );
}
