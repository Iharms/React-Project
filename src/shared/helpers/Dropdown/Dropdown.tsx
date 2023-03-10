import React from 'react';
import styles from './dropdown.css';
import { NOOP } from "../../../utils/js/NOOP";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [ isDropdownOpen, setIsDropdownOpen ] = React.useState(isOpen);

  React.useEffect(() => setIsDropdownOpen(isOpen), [ isOpen ])
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [ isDropdownOpen ]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  // const node = document.querySelector('#modal_root');
  // if (!node) return null;

  return (
    <div className={ styles.container }>
      <div onClick={ handleOpen }>
        { button }
      </div>
      { isDropdownOpen && (
        <div className={ styles.listContainer }>
          <div className={ styles.list }>
            { children }
          </div>
        </div>
      ) }
    </div>
  );
}
