import React from 'react';
import type { FormEventHandler } from 'react';

import StyledInfoItem from './infoitem.styled';

export type PropsType = {
  onClick?: FormEventHandler;
  text?: string;
};

const InfoItem: React.FC<PropsType> = (props) => {
  const [color, setColor] = React.useState(true);

  const DARK_GREY = 'colored__dark-grey';
  const DARK_BLUE = 'colored__dark-blue';

  return (
    <StyledInfoItem onClick={() => setColor(!color)}>
      <p className={color ? DARK_GREY : DARK_BLUE}>{props.text}</p>
    </StyledInfoItem>
  );
};

export default InfoItem;
