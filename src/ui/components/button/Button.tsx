import React from 'react';
import ButtonWrapper from './Button.styled';

type PropsType = {
  value: string;
};

const Button: React.FC<PropsType> = ({ value }) => {
  return (
    <ButtonWrapper>
      {value}
    </ButtonWrapper>
  );
};

export default Button;
