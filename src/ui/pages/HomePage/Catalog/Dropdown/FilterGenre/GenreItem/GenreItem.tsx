import React from 'react';

import Button from 'src/ui/components/Button';
import StyledGenreItem from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterGenre/GenreItem/GenreItem.styled';

import cheched from 'src/ui/assets/icons/checked.png';
import unchecked from 'src/ui/assets/icons/unchecked.png';

export type PropsType = {
  text: string;
  setState: (newFilter: string) => void;
  filter: string[] | string;
};

const GenreItem: React.FC<PropsType> = ({ setState, filter, text }) => {
  const [status, setStatus] = React.useState(true);

  const handleChangeGenre = (text: string) => {
    setStatus(false);
    const index = filter.indexOf(text);
    if (index !== -1) {
      setStatus(true);
    }
    setState(text);
  };

  return (
    <StyledGenreItem onClick={() => handleChangeGenre(text)}>
      <Button className="checkbox">
        <img src={status ? unchecked : cheched} />
      </Button>
      <p>{text}</p>
    </StyledGenreItem>
  );
};

export default GenreItem;
