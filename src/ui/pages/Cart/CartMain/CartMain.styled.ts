import styled from 'styled-components';

const StyledCartMain = styled.section`
  .wrapper {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }

  .cover {
    border-radius: 16px;
    width: 197px;
    height: 289px;
  }

  .title {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
  }

  .author {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs24};
    line-height: ${(props) => props.theme.line_height.lh36};
    margin-bottom: 50px;
  }

  .count-buttons {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }

  .reduce {
    width: 32px;
    height: 32px;
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.light};
  }

  .number {
    font-weight: ${(props) => props.theme.font_weight.average};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh32};
    padding: 0 17px;
  }

  .increase {
    width: 32px;
    height: 32px;
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.light};
  }

  .delete {
    width: 20px;
    height: 20px;
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.white};
    margin-left: 58px;
  }

  .sum {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs36};
    line-height: ${(props) => props.theme.line_height.lh54};
  }

  .grand-line {
    height: 2px;
    margin-bottom: 40px;
    display: flex;align-items: center;
  }

  .grand-line img {
    width: 100%;
  }
`;

export default StyledCartMain;
