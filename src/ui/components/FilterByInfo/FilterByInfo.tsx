import React from 'react';

import type { FormEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';

import constants from 'utils/constants';

import StyledFilterByInfo from './FilterByInfo.styled';
import InfoItem from './InfoItem/InfoItem';

import poligon from '../../../assets/images/polygon .png';

export type PropsType = {
  onClick?: FormEventHandler;
};

const FilterByInfo: React.FC<PropsType> = (props) => {
  const [filter, setFilter] = React.useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSort = (newFilter: string) => {
    setFilter((prevFilter) => {
      if (prevFilter.includes(newFilter)) {
        return prevFilter.filter((searchFilter) => searchFilter !== newFilter);
      }

      return [...prevFilter, newFilter];
    });
  };

  React.useEffect(() => {
    searchParams.set('sorting', filter as unknown as string);
    if (!filter.length) {
      searchParams.delete('sorting');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return (
    <StyledFilterByInfo onClick={props.onClick}>
      <img className="poligon" src={poligon} />
      {constants.SORT_LIST.map((elem) => {
        return (
          <InfoItem
            text={elem.name}
            key={elem.id}
            setState={handleChangeSort}
            filter={filter}
          />
        );
      })}
    </StyledFilterByInfo>
  );
};

export default FilterByInfo;
