import React from 'react';
import type { FormEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { GenreType } from 'src/types';

import StyledFilterGenre from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterGenre/FilterGenre.styled';
import GenreItem from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterGenre/GenreItem';

import poligon from 'src/ui/assets/images/polygon.png';

type PropsType = {
  onClick?: FormEventHandler;
  genres?: GenreType[];
};

const FilterGenre: React.FC<PropsType> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = React.useState<string[]>([]);

  const changeFilterState = (newFilter: string) => {
    setFilter((prevFilter) => {
      if (prevFilter.includes(newFilter)) {
        return prevFilter.filter((searchFilter) => searchFilter !== newFilter);
      }

      return [...prevFilter, newFilter];
    });
  };

  React.useEffect(() => {
    searchParams.set('genres', filter.join());
    if (!filter.length) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return (
    <StyledFilterGenre onClick={props.onClick}>
      <img className="poligon" src={poligon} />
      {props.genres?.map((elem) => {
        return (
          <GenreItem
            text={elem.genreName}
            key={elem.id}
            setState={changeFilterState}
            filter={filter}
          />
        );
      })}
    </StyledFilterGenre>

  );
};

export default FilterGenre;
