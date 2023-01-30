import React from 'react';

import StyledPagination from './Pagination.styled';
import CircleItem from './CircleItem/CircleItem';

import arrowLeft from '../../../assets/icons/paginationBack.png';
import arrowRight from '../../../assets/icons/paginationForward.png';
import currentCircle from '../../../assets/icons/paginationCurrent.png';
import circle from '../../../assets/icons/paginationEllipse.png';

const Pagination: React.FC = () => {
  const arrLengthCircleItem = ['1', '2', '3'];

  return (
    <StyledPagination>
      <img src={arrowLeft} alt="<" />
      {arrLengthCircleItem.map((elem) => {
        return (
          <CircleItem key={+elem} currentImg={currentCircle} img={circle} />
        );
      })}
      <img src={arrowRight} alt=">" />
    </StyledPagination>
  );
};

export default Pagination;
