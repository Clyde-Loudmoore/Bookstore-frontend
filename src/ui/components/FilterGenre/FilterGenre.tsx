import React from 'react';
import type { FormEventHandler } from 'react';
// import { useSearchParams } from 'react-router-dom';

import type { GenreType } from 'types';

import bookApi from '../../../api/bookApi';

import StyledFilterGenre from './FilterGenre.styled';
import GenreItem from './GenreItem';

import poligon from '../../../assets/images/polygon .png';

export type PropsType = {
  onClick?: FormEventHandler;
  hidden?: boolean;
};

const FilterGenre: React.FC<PropsType> = (props) => {
  const [bookGenre, setBookGenre] = React.useState<GenreType[]>();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const handleFilterByGenre = () => {
  //   let params: string;

  //   bookGenre?.forEach((elem) => {
  //     params = elem.genreName;
  //     setSearchParams(params);
  //   });
  // };

  // console.log(searchParams);

  React.useEffect(() => {
    (async () => {
      const genre = await bookApi.getGenres();

      const arrayGenre = genre.data.genres.map((elem) => {
        return elem;
      });

      setBookGenre(arrayGenre);
    })();
  }, []);

  return (
    <StyledFilterGenre hidden={props.hidden} onClick={props.onClick}>
      <img className="poligon" src={poligon} />
      {bookGenre?.map((elem) => {
        return (
          <GenreItem text={elem.genreName} key={elem.id} />
        );
      })}
    </StyledFilterGenre>

  );
};

export default FilterGenre;
