import React from 'react';

import ButtonWrapper from './Button.styled';

type PropsType = {
  value: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<PropsType> = ({ className, type, value }) => {
  return (
    <ButtonWrapper className={className} type={type}>
      {value}
    </ButtonWrapper>
  );
};

export default Button;
