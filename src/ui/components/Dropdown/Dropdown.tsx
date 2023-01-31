import React from 'react';

import type { FormEventHandler, ReactNode } from 'react';

import StyledDropdown from './Dropdown.styled';

import arrowRight from '../../../assets/icons/arrowRight.png';
import arrowBottom from '../../../assets/icons/arrowBottom.png';

type PropsType = {
  onClick?: FormEventHandler;
  title?: string;
  active?: boolean;
  children?: ReactNode;
};

const Dropdown: React.FC<PropsType> = (props) => {
  const [active, setActive] = React.useState(false);

  return (
    <StyledDropdown>
      <div className="wrapper" onClick={() => setActive(!active)}>
        <p>{props.title}</p>
        <img src={!active ? arrowRight : arrowBottom} onClick={() => setActive(!active)} alt="+" />
      </div>
      {active && props.children}
    </StyledDropdown>
  );
};

export default Dropdown;
