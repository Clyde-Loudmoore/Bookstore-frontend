import React from 'react';

import StyledGenreItem from './GenreItem.styled';

import cheched from '../../../../assets/icons/checked.png';
import unchecked from '../../../../assets/icons/unchecked.png';

export type PropsType = {
  text?: string;
};

const GenreItem: React.FC<PropsType> = (props) => {
  const [status, setStatus] = React.useState(true);

  return (
    <StyledGenreItem onClick={() => setStatus(!status)}>
      <img src={status ? unchecked : cheched} />
      <p>{props.text}</p>
    </StyledGenreItem>
  );
};

export default GenreItem;
