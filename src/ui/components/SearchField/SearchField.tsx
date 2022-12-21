import SearchFieldWrapper from './SearchFieldWrapper.styled';
import Search from './images/Search.png';

const SearchField = () => {
  return (
    <SearchFieldWrapper>
      <div className="search__field-icon">
        <img src={Search} alt="search" />
      </div>
      <div>
        <input className="search__input" name="catalog" type="text" placeholder="Search" />
      </div>
    </SearchFieldWrapper>
  );
};

export default SearchField;
