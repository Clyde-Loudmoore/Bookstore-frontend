import React from 'react';
import type { FormEventHandler } from 'react';

import type { GenreType } from 'types';

import StyledFilterGenre from './FilterGenre.styled';
import GenreItem from './GenreItem';

import poligon from '../../../assets/images/polygon .png';

type PropsType = {
  onClick?: FormEventHandler;
  genres?: GenreType[];
};

const FilterGenre: React.FC<PropsType> = (props) => {
  return (
    <StyledFilterGenre onClick={props.onClick}>
      <img className="poligon" src={poligon} />
      {props.genres?.map((elem) => {
        return (
          <GenreItem text={elem.genreName} key={elem.id} />
        );
      })}
    </StyledFilterGenre>

  );
};

export default FilterGenre;
