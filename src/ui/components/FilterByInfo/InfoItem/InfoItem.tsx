import React from 'react';

import StyledInfoItem from './infoitem.styled';

export type PropsType = {
  text: string;
  setState: (newFilter: string) => void;
  filter: string[] | string;
};

const InfoItem: React.FC<PropsType> = ({ setState, filter, text }) => {
  const [color, setColor] = React.useState(true);

  const DARK_GREY = 'colored__dark-grey';
  const DARK_BLUE = 'colored__dark-blue';

  const handleChangeGenre = (text: string) => {
    setColor(!color);
    const index = filter.indexOf(text);
    if (index !== -1) {
      setColor(!color);
    }
    setState(text);
  };

  return (
    <StyledInfoItem onClick={() => handleChangeGenre(text)}>
      <p className={color ? DARK_GREY : DARK_BLUE}>{text}</p>
    </StyledInfoItem>
  );
};

export default InfoItem;
