import React from 'react';

import StyledButton from './Button.styled';

type PropsType = {
  // value?: string | number;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<PropsType & React.PropsWithChildren> = (props) => {
  return (
    <StyledButton
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
