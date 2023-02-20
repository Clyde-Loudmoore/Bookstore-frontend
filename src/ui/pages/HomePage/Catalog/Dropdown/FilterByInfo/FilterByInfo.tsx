import React from 'react';

import type { FormEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';

import constants from 'src/utils/constants';

import StyledFilterByInfo from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterByInfo/FilterByInfo.styled';
import InfoItem from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterByInfo/InfoItem';

import poligon from 'src/ui/assets/images/polygon.png';

export type PropsType = {
  onClick?: FormEventHandler;
};

const FilterByInfo: React.FC<PropsType> = (props) => {
  const [filter, setFilter] = React.useState('');
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
