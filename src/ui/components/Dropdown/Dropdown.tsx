import React from 'react';
import type { FormEventHandler, ReactNode } from 'react';

import useOnClickOutside from 'hooks/useOnClickOutside';

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

  const ref = React.useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setActive(false);
  };

  useOnClickOutside(ref, clickOutsidehandler);

  return (
    <StyledDropdown ref={ref}>

      <div className="wrapper" onClick={() => setActive(!active)}>
        <p>{props.title}</p>
        <img src={!active ? arrowRight : arrowBottom} alt="+" />
      </div>

      {active && props.children}

    </StyledDropdown>

  );
};

export default Dropdown;
