import React from 'react';

import StyledButton from './StyledButton.styled';

type PropsType = {
  value?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  img?: string;
};

const Button: React.FC<PropsType> = (props) => {
  return (
    <StyledButton className={props.className} type={props.type}>
      {props.value}
      <img src={props.img} />
    </StyledButton>
  );
};

export default Button;
