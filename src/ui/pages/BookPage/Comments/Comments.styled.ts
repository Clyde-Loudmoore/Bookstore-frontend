import styled from 'styled-components';

const StyledComments = styled.section`
  max-width: 738px;
  width: 100%;
  margin-bottom: 108px;
  
  .header {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
    margin-bottom: 50px;
  }
  
  .comment {
    background-color: ${(props) => props.theme.color.light};
    border-radius: 16px;
    margin-bottom: 10px;
    padding: 30px;
    display: grid;
    justify-content: start;
    column-gap: 20px;
    grid-template-areas: 
      "avatar author"
      "avatar date"
      "avatar tex";
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    grid-area: avatar;
  }

  .author {
    font-weight: ${(props) => props.theme.font_weight.average};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh24};
    margin-bottom: 4px;
    grid-area: author;
  }

  .date {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs12};
    line-height: ${(props) => props.theme.line_height.lh18};
    color: ${(props) => props.theme.color.dark_grey};
    margin-bottom: 9px;
    grid-area: date;
  }

  .text {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => props.theme.color.dark_blue};
    grid-area: tex;
  }

  .textarea {
    max-width: 738px;
    width: 100%;
    height: 128px;
    font-weight: ${(props) => props.theme.font_weight.small};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh28};
    background-color: ${(props) => props.theme.color.light};
    padding: 20px 24px;
    margin: 60px 0 30px 0;
    border: none;
    border-radius: 16px;
    box-sizing: border-box;
    resize: none;
  }

  .textarea::placeholder {
    color: ${(props) => props.theme.color.dark_grey};
  }

  .textarea:focus-within {
    outline:  2px solid ${(props) => props.theme.color.dark};
  }

  .comment_button {
    max-width: 276px;
    width: 100%;
    font-size: ${(props) => props.theme.font_size.fs20};
    line-height: ${(props) => props.theme.line_height.lh30};
  }

  @media (max-width: 834px) {
    max-width: 667px;
    width: 100%;
    margin-bottom: 50px;

    .header {
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
      margin-bottom: 50px;
    }

    .comment {
      padding: 20px;
    }

    .date {
      margin-bottom: 20px;
    }

    .text {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh21};
    }

    .textarea {
      margin: 40px 0 30px 0;
    }
  }

  @media (max-width: 528px) {
    margin-bottom: 60px;

    .header {
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh20};
      margin-bottom: 20px;
    }

    .comment {
      padding: 13px 10px;
      column-gap: 13px;
      grid-template-areas: 
        "avatar author"
        "avatar date"
        "tex tex";
    }

    .avatar {
      width: 35px;
      height: 35px;
    }

    .author {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh21};
      margin-bottom: 0;
    }

    .date {
      font-size: ${(props) => props.theme.font_size.fs10};
      line-height: ${(props) => props.theme.line_height.lh15};
      color: ${(props) => props.theme.color.dark_grey};
      margin-bottom: 17px;
    }

    .textarea {
      height: 87px;
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
      margin: 20px 0 30px 0;
    }

    .comment_button {
      max-width: 210px;
      width: 100%;
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
    }
  }
`;

export default StyledComments;
