import styled from 'styled-components';

const StyledInfoItem = styled.div`
  margin-bottom: 12px;
  width: 167px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  .colored__dark-grey {
    color: ${(props) => props.theme.color.dark_grey};
  }

  .colored__dark-blue {
    color: ${(props) => props.theme.color.dark_blue};
  }
`;

export default StyledInfoItem;
