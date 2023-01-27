import React from 'react';

import StyledCircleItem from './CircleItem.styled';

type PropsType = {
  currentImg: string;
  img: string;
};

const CircleItem: React.FC<PropsType> = (props) => {
  const [currentPage, setCurrentPage] = React.useState(true);

  return (
    <StyledCircleItem onClick={() => setCurrentPage(!currentPage)}>
      <img src={currentPage ? props.img : props.currentImg} alt="o" />
    </StyledCircleItem>
  );
};

export default CircleItem;
