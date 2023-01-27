import React from 'react';
import type { FormEventHandler } from 'react';

import StyledGenreItem from './GenreItem.styled';

import cheched from '../../../../assets/icons/checked.png';
import unchecked from '../../../../assets/icons/unchecked.png';

export type PropsType = {
  onClick?: FormEventHandler;
  text?: string;
};

const GenreItem: React.FC<PropsType> = (props) => {
  const [status, setStatus] = React.useState(true);

  const handleChangeStatus = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  return (
    <StyledGenreItem onClick={handleChangeStatus}>
      <img src={status ? unchecked : cheched} />
      <p>{props.text}</p>
    </StyledGenreItem>
  );
};

export default GenreItem;
