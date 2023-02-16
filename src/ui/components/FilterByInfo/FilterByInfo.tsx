import React from 'react';

import type { FormEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';

import constants from 'utils/constants';

import StyledFilterByInfo from './FilterByInfo.styled';
import InfoItem from './InfoItem/InfoItem';

import poligon from '../../assets/images/polygon.png';

export type PropsType = {
  onClick?: FormEventHandler;
};

const FilterByInfo: React.FC<PropsType> = (props) => {
  const [filter, setFilter] = React.useState<string>('Price');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSort = (name: string) => {
    setFilter(name);
  };

  React.useEffect(() => {
    searchParams.set('sorting', filter as string);
    if (!filter) {
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
          />
        );
      })}
    </StyledFilterByInfo>
  );
};

export default FilterByInfo;
