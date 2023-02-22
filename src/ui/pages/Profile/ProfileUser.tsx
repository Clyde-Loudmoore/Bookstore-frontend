import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import type { UserType } from 'src/types';
import userApi from 'src/api/userApi';
import { useAppDispatch, useAppSelector } from 'src/store';
import { userSliceActions } from 'src/store/slises/userSlise';
import sharedValidation from 'src/utils/sharedValidationFields';

import Button from 'src/ui/components/Button';
import InputField from 'src/ui/components/InputField';
import ProfilePass from 'src/ui/pages/Profile/ProfilePass';
import StyledProfile from 'src/ui/pages/Profile/Profile.styled';

import camera from 'src/ui/assets/icons/camera.png';
import userName from 'src/ui/assets/icons/username.png';
import mail from 'src/ui/assets/icons/mail.png';
import noPhoto from 'src/ui/assets/images/user-profile.png';

const EditUserSchema =
  yup.object({
    fullName: sharedValidation.fullName,
    email: sharedValidation.requiredEmail,
  });

const ProfileUser: React.FC = () => {
  const [infoAttribute, setInfoAttribute] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  const user = useAppSelector((store) => store.user.user) as UserType;

  const dispatch = useAppDispatch();

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files;
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(selectedFile[0]);

      fileReader.onload = async () => {
        try {
          const user = await userApi.addAvatar(fileReader.result as string);
          dispatch(userSliceActions.setUser(user.data.updatedUser));
        } catch (err) {
          return toast.error('The avatar is not loaded. Please try again');
        }
      };
    }
  };

  const userFormik = useFormik({
    initialValues: { fullName: user.fullName, email: user.email },

    onSubmit: async (values, actions) => {
      try {
        setIsError(false);
        actions.setSubmitting(false);
        const currentUser = await userApi.editUser(user.id, values);
        dispatch(userSliceActions.setUser(currentUser.data.updatedUser));
        setInfoAttribute(true);
      } catch (err) {
        setIsError(true);
        if (err instanceof AxiosError) {
          userFormik.setFieldError('email', err.response?.data.message);
        }
      }
    },
    validationSchema: EditUserSchema,
  });

  const avatar = user.avatar;
  const noAvatar = 'http://localhost:4000/public/avatars/null';

  return (
    <StyledProfile>

      <div className="user-photo__wrapper">
        {avatar === noAvatar
          ? (
            <img className="user-no-avatar" src={noPhoto} />
          )
          : (
            <img className="user-avatar" src={avatar} />
          )
        }

        <div className="user-photo__button">
          <label htmlFor="add-avatar" className="add-avatar">
            <img src={camera} alt="+" />
          </label>
          <input id="add-avatar" className="user-photo__input" type="file" onChange={uploadPhoto} />
        </div>

      </div>

      <div className="form__wrapper">

        <form className="form__container" onSubmit={userFormik.handleSubmit}>
          <div className="users-personal-data">

            <div className="user-info__header">
              <h2>Personal information</h2>
              <Link className="user-edit__link" to="#" onClick={() => setInfoAttribute(!infoAttribute)}>Change information</Link>
            </div>

            <InputField className="information-fullname__input-field profile-input"
              id="fullName"
              img={userName}
              type="text"
              placeholder="Your full name"
              disabled={infoAttribute}
              label="Your name"
              {...userFormik.getFieldProps('fullName')}
            >
              <label className="user-info__label">Your name</label>
            </InputField>
            {userFormik.touched.fullName && userFormik.errors.fullName
              ? (
                <div className="input-error">{userFormik.errors.fullName}</div>)
              : null}

            <InputField className="information-email__input-field profile-input"
              id="email"
              img={mail}
              type="email"
              placeholder="Email"
              disabled={infoAttribute}
              label="Your email"
              isError={isError}
              {...userFormik.getFieldProps('email')}
            >
              <label className="user-info__label email__label">Your email</label>
            </InputField>
            {userFormik.touched.email && userFormik.errors.email
              ? (
                <div className="input-error">{userFormik.errors.email}</div>
              )
              : null}

            {!infoAttribute
              ? (
                <Button className="profile__button" type="submit">Confirm</Button>
              )
              : null}
          </div>
        </form>

        <ProfilePass />

      </div>
    </StyledProfile>
  );
};

export default ProfileUser;
