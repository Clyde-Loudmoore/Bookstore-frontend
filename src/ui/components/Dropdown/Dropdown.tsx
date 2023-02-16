import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

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

  const ref = React.useRef(null);

  const handleClickOutside = () => {
    setActive(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <StyledDropdown
      ref={ref}
      onClick={() => setActive(!active)}
    >

      <div className="wrapper" onClick={handleClickOutside}>
        <p>{props.title}</p>
        <img src={!active ? arrowRight : arrowBottom} alt="+" />
      </div>

      {active && props.children}

    </StyledDropdown>

  );
};

export default Dropdown;
