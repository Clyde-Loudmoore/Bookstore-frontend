import styled from 'styled-components';

const StyledPagination = styled.div`
  max-width: 238px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .pagination-button {
    width: 24px;
    height: 24px;
    background: ${(props) => props.theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination-button:active {
    outline: none;
  }

  .pagination__button-circle {
    width: 13px;
    height: 13px;
    background: ${(props) => props.theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledPagination;
