import styled from 'styled-components';

const StyledDropdown = styled.div`
  width: 196px;
  padding: 10px 15px;
  color: #344966;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  background: #F0F4EF;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1120px) {
    width: 255px;
  }

  @media (max-width: 830px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 28px;
  }

  @media (max-width: 350px) {
    width: 290px;
  }
`;

export default StyledDropdown;
