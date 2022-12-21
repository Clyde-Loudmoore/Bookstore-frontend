import styled from 'styled-components';

const SearchFieldWrapper = styled.div`

max-width: 630px;
width: 100%;
max-height: 64px;
background-color: #f0f4ef;
border-radius: 16px;
display: flex;
align-items: center;

  .search__field-icon{
    padding: 22px 22px 22px 26px;
  }

  .search__input {
    height: 60px;
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 697px) {
    .header__search-field{
      order: 4;
      margin-top: 17px;
    }
  }  

`;

export default SearchFieldWrapper;
