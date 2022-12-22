import React from 'react';
import ButtonWrapper from './Button.styled';

type PropsType = {
  value: string;
  className: string;
};

const Button: React.FC<PropsType> = ({ value, className }) => {
  return (
    <ButtonWrapper className={className}>
      {value}
    </ButtonWrapper>
  );
};

export default Button;
