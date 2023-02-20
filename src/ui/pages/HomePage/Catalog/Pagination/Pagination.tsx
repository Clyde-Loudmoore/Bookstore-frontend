import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from 'src/store';

import StyledPagination from 'src/ui/pages/HomePage/Catalog/Pagination/Pagination.styled';
import Button from 'src/ui/components/Button';

import arrowLeft from 'src/ui/assets/icons/paginationBack.png';
import arrowRight from 'src/ui/assets/icons/paginationForward.png';
import paginationEllipse from 'src/ui/assets/icons/paginationEllipse.png';
import paginationCurrent from 'src/ui/assets/icons/paginationCurrent.png';

type PropsType = {
  page?: number;
};

const Pagination: React.FC<PropsType> = () => {
  const [currentPage, setCurrentPage] = React.useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPages = useAppSelector((store) => store.books.maxPages);

  React.useEffect(() => {
    const arr = [...new Array(maxPages)].map((_item, index) => index + 1);

    setCurrentPage(arr);
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxPages]);

  const handleSpecificPage = (page?: number) => {
    if (page) {
      searchParams.set('page', String(page));
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledPagination>
      <Button
        className="pagination-button"
        onClick={() => handleSpecificPage(+(searchParams.get('page') as string) - 1)}
        disabled={+(searchParams.get('page') as string) <= 1}
      >
        <img src={arrowLeft} alt="<" />
      </Button>

      {currentPage.map((item) => (
        <Button
          className="pagination__button-circle"
          key={item}
          onClick={() => handleSpecificPage(item)}
          disabled={item === +(searchParams.get('page') as string)}
        >
          <img src={+(searchParams.get('page') as string || 1) === item ? paginationCurrent : paginationEllipse} alt="o" />
        </Button>
      ))
      }

      <Button
        className="pagination-button"
        onClick={() => handleSpecificPage(+(searchParams.get('page') as string) + 1)}
        disabled={+(searchParams.get('page') as string) >= currentPage.length}
      >
        <img src={arrowRight} alt=">" />
      </Button>
    </StyledPagination>
  );
};

export default Pagination;
