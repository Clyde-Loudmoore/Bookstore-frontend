import type { FormEventHandler } from 'react';

import StyledFilterByInfo from './FilterByInfo.styled';
import InfoItem from './InfoItem/InfoItem';

import poligon from '../../../assets/images/polygon .png';

export type PropsType = {
  onClick?: FormEventHandler;
};

const FilterByInfo: React.FC<PropsType> = (props) => {
  const arrInfo = [
    'Price',
    'Name',
    'Author',
    'Rating',
    'Date of issue',
  ];

  return (
    <StyledFilterByInfo onClick={props.onClick}>
      <img className="poligon" src={poligon} />
      {arrInfo.map((elem) => {
        return (
          <InfoItem text={elem} key={elem} />
        );
      })}
    </StyledFilterByInfo>
  );
};

export default FilterByInfo;
