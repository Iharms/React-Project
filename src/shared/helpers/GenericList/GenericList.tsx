import React, { ReactNode } from 'react';
import { NOOP } from "../../../utils/js/NOOP";

export interface IItem {
  id: string,
  className: string
  children?: ReactNode,
  onClick?: () => void
  As?: 'a' | 'li' | 'button' | 'div',
  href?: string
}

interface IGenericListProps {
  list: IItem[]
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      { list.map(
        ({
           As = 'div',
           id,
           className,
           children,
           onClick = NOOP,
           href
         }) => (
          <As className={ className }
              onClick={ onClick }
              key={ id }
              href={ href }
          >
            { children }
          </As>
        )) }
    </>
  );
}
