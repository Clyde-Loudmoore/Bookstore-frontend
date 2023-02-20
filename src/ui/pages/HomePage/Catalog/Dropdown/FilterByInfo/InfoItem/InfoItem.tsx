import React from 'react';

import useOnClickOutside from 'src/hooks/useOnClickOutside';

import StyledInfoItem from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterByInfo/InfoItem/infoitem.styled';

export type PropsType = {
  text: string;
  setState: (newFilter: string) => void;
};

const InfoItem: React.FC<PropsType> = ({ setState, text }) => {
  const [color, setColor] = React.useState(true);

  const DARK_GREY = 'colored__dark-grey';
  const DARK_BLUE = 'colored__dark-blue';

  const handleChangeGenre = (text: string) => {
    setColor(!color);
    setState(text);
  };

  const ref = React.useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setColor(true);
  };

  useOnClickOutside(ref, clickOutsidehandler);

  return (
    <StyledInfoItem
      onClick={() => handleChangeGenre(text)}
      ref={ref}
    >
      <p className={color ? DARK_GREY : DARK_BLUE}>{text}</p>
    </StyledInfoItem>
  );
};

export default InfoItem;
