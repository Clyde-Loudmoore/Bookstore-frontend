import SearchFieldWrapper from './SearchFieldWrapper.styled';

type PropsType = {
  img: string;
  placeholder: string;
  className?: string;
};

const SearchField: React.FC<PropsType> = (props) => {
  return (
    <SearchFieldWrapper className={props.className}>
      <div className="search__field-icon">
        <img src={props.img} alt="search" />
      </div>
      <div className="search__input-wrapper">
        <input
          className="search__input"
          name="catalog"
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </SearchFieldWrapper>
  );
};

export default SearchField;
