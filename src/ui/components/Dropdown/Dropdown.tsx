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
  return (
    <StyledDropdown>
      <div className="wrapper" onClick={props.onClick}>
        <p>{props.title}</p>
        <img src={props.active ? arrowRight : arrowBottom} onClick={props.onClick} alt="+" />
      </div>
      {props.children}
    </StyledDropdown>
  );
};

export default Dropdown;
