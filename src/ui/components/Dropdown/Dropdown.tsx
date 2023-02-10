import React from 'react';

import type { FormEventHandler, ReactNode } from 'react';

import StyledDropdown from './Dropdown.styled';

import arrowRight from '../../assets/icons/arrowRight.png';
import arrowBottom from '../../assets/icons/arrowBottom.png';

type PropsType = {
  onClick?: FormEventHandler;
  title?: string;
  active?: boolean;
  children?: ReactNode;
};

const Dropdown: React.FC<PropsType> = (props) => {
  const [active, setActive] = React.useState(false);
  const [dropSelect, setDropSelect] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useOutsideDrop = (ref: any) => {
    React.useEffect(() => {
      const handleClickOutside = (event: { target: unknown }) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropSelect(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = React.useRef(null);
  useOutsideDrop(wrapperRef);

  const handleDropSelect = () => {
    if (!dropSelect) {
      setDropSelect(false);
    }
    if (dropSelect) {
      setDropSelect(true);
    }
  };

  return (
    <StyledDropdown
    onClick={() => handleDropSelect()}
    ref={wrapperRef}
    >
      <div className="wrapper" onClick={() => setActive(!active)}>
        <p>{props.title}</p>
        <img src={!active ? arrowRight : arrowBottom} onClick={() => setActive(!active)} alt="+" />
      </div>
        {active && props.children}
    </StyledDropdown>
  );
};

export default Dropdown;
