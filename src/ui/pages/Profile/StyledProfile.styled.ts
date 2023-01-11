import styled from 'styled-components';

import NoPhoto from './images/user-profile.png';

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
    background-image: url(${NoPhoto});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #F0F4EF;
    border-radius: 16px;
  }

  .add-avatar{
    display: flex;
    align-items: center;
  }

  /* .user-photo {
    width: 100%;
  } */

  .user-photo__button {
    background-color: #344966;
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
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #0D1821;
  }

  .form__wrapper a {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #8D9F4F;
  }

  .user-info__header {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .information-fullname__input-field {
    margin-bottom: 9px;
  }

  .information-email__input-field {
    margin-bottom: 9px;
  }

  .user-info__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #344966;
    position: absolute;
    left: 70px;
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
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #344966;
    position: absolute;
    left: 70px;
  }

  .password__input-field {
    margin-bottom: 9px;
  }

  .new-password__input-field {
    margin-bottom: 9px;
  }
  
  .password__paragraph {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #344966;
    margin-bottom: 10px;
  }

  .new-password__paragraph {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #344966;
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

  .input-error{
    color: red;
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
      font-size: 16px;
      line-height: 24px;
    }

    
    .form__wrapper a {
      font-size: 12px;
      line-height: 18px;
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
      font-size: 12px;
      top: 70px;
    }
    
    .email__label{
      top: 147px;
    }

    .user-info__header {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0;
    }

    .password__label {
      font-size: 12px;
    }


  }
`;

export default StyledProfile;
