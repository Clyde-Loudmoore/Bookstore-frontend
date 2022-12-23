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

.search__input-wrapper{
  width: 100%;
}

.search__input {
  width: 100%;
  height: 60px;
  background-color: #f0f4ef;
  font: 400 16px/24px 'Poppins', sans-serif;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  outline: none;
}

@media (min-width: 320px) and (max-width: 833px) {
  order: 4;
  margin-top: 17px;
}  

`;

export default SearchFieldWrapper;
