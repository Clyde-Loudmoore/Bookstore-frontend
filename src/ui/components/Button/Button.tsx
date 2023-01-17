import React from 'react';

import StyledButton from './StyledButton.styled';

type PropsType = {
  value?: string | number;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  img?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<PropsType> = (props) => {
  return (
    <StyledButton className={props.className} type={props.type} onClick={props.onClick}>
      {props.value}
      <img src={props.img} />
    </StyledButton>
  );
};

export default Button;
