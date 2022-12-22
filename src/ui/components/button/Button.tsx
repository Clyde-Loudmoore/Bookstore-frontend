import React from 'react';

import ButtonWrapper from './Button.styled';

type PropsType = {
  value: string;
  className?: string;
};

const Button: React.FC<PropsType> = ({ className, value }) => {
  return (
    <ButtonWrapper className={className}>
      {value}
    </ButtonWrapper>
  );
};

export default Button;
