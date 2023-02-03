import styled from 'styled-components';

const StyledProfile = styled.main`
  margin: 0 80px 69px 80px;
  padding: 20px 0 0 0;

  display: flex;
  gap: 128px;


  .user-photo__wrapper {
    max-width: 305px;
    width: 100%;
    max-height: 305px;
    position: relative;
    background-color: ${(props) => props.theme.color.light};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .user-no-avatar{
    max-width: 151px;
    max-height: 151px;
  }

  .user-avatar{
    width: 100%;;
  }

  .add-avatar {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .user-photo__input {
    display: none;
  }

  .user-photo__button {
    background-color: ${(props) => props.theme.color.dark_blue};
    width: 48px;
    height:48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .users-personal-data {
    position: relative;
  }

  .form__wrapper {
    max-width: 522px;
    width: 100%;
  }

  .form__wrapper h2 {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs20};
    line-height: ${(props) => props.theme.line_height.lh30};
    color: ${(props) => props.theme.color.dark};
  }

  .form__wrapper a {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh21};
    color: ${(props) => props.theme.color.dark_green};
  }

  .user-info__header {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .information-email__input-field, .information-fullname__input-field {
    margin: 9px 0 9px 0;
  }

  

  .information-email__input-field:focus-within,
  .information-fullname__input-field:focus-within,
  .password__input-field:focus-within,
  .new-password__input-field:focus-within {
    outline:  2px solid ${(props) => props.theme.color.dark_blue};

    .search__input {
      padding: 8px 0;
    }

    .label, .close-button {
      display: block;
    }
  }

  .user-info__label {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => props.theme.color.dark_blue};
  }

  .users-password-data {
    position: relative;
  }

  .password__header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .password__label {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => props.theme.color.dark_blue};
  }

  .password__input-field, .new-password__input-field {
    margin-bottom: 9px;
  }

  .password__paragraph {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => props.theme.color.dark_blue};
    margin-bottom: 10px;
  }

  .new-password__paragraph {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => props.theme.color.dark_blue};
    margin-bottom: 50px;
  }

  .profile__button {
    max-width: 170px;
    margin-bottom: 35px;
  }

  .profile-input {
    max-width: 522px;
    width: 100%;
  }

  .input-error {
    color: ${(props) => props.theme.color.red};
    margin-bottom: 20px;
  }

  @media (max-width: 834px) {
    margin: 0 15px 69px 15px;
    padding: 14px 0 0 0;

    gap: 20px;

    .user-photo__wrapper {
      max-width: 255px;
      width: 100%;
      height: 255px;
    }

    .user-photo__button {
      width: 40px;
      height: 40px;
      right: 15px;
      bottom: 15px;
    }

    .form__wrapper h2 {
      font-size: ${(props) => props.theme.font_size.fs16};
      line-height: ${(props) => props.theme.line_height.lh24};
    }

    
    .form__wrapper a {
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
    }
  }

  @media (max-width: 525px) {
    margin: 0 15px 65px 15px;
    padding: 5px 0 0 0;
    flex-direction: column;

    .form__wrapper h2 {
      margin-bottom: 10px;
    }

    .user-info__label {
      font-size: ${(props) => props.theme.font_size.fs12};
    }

    .user-info__header {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0;
    }

    .password__label {
      font-size: ${(props) => props.theme.font_size.fs12};
    }
  }
`;

export default StyledProfile;
