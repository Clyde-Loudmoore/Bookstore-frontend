/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';
import * as yup from 'yup';
import Cookies from 'js-cookie';

import userApi from '../../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../../store';
import { userSliceActions } from '../../../store/Slise/userSlise';
import sharedValidation from '../../../validation/sharedValidationFields';
import type { UserType } from '../../../types';

import StyledButton from '../../components/Button';
import InputField from '../../components/InputField';
import ProfilePass from './ProfilePass';
import StyledProfile from './Profile.styled';

import camera from '../../../assets/icons/camera.png';
import man from '../../../assets/icons/man.png';
import mail from '../../../assets/icons/mail.png';
import noPhoto from '../../../assets/images/user-profile.png';

const EditUserSchema =
  yup.object({
    fullName: sharedValidation.fullName,
    email: sharedValidation.requiredEmail,
  });

const ProfileUser: React.FC = () => {
  const [infoAttribute, setInfoAttribute] = React.useState(true);
  const [errorEmailState, setErrorEmailState] = React.useState('');

  const currentUser = useAppSelector((state) => state.user.user) as UserType;

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
          const error = err as Error;
          return toast.error(error.message);
        }
      };
    }
  };

  const userFormik = useFormik({
    initialValues: { fullName: currentUser.fullName, email: currentUser.email },

    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(false);
        const user = await userApi.editUser(currentUser.id, values);
        dispatch(userSliceActions.setUser(user.data.updatedUser));
        setInfoAttribute(true);
      } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 404) {
          setErrorEmailState(err.response?.data.message);
        } else {
          setErrorEmailState('');
        }
      }
    },
    validationSchema: EditUserSchema,
  });

  const avatar = currentUser.avatar;
  const noAvatar = 'http://localhost:4000/public/avatars/null';

  return (
    <StyledProfile>

      <div className="user-photo__wrapper">
        {avatar !== noAvatar
          ? (<img className="user-avatar" src={avatar} />)
          : (<img className="user-no-avatar" src={noPhoto} />)
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
              <Link className="user-edit__link" to="#" onClick={() => setInfoAttribute(false)}>Change information</Link>
            </div>

            <label className="user-info__label">Your name</label>
            <InputField className="information-fullname__input-field profile-input"
              id="fullName"
              img={man}
              type="text"
              placeholder="Your full name"
              disabled={infoAttribute}
              {...userFormik.getFieldProps('fullName')}
            />
            {userFormik.touched.fullName && userFormik.errors.fullName
              ? (<div className="input-error">{userFormik.errors.fullName}</div>)
              : null}

            <label className="user-info__label email__label">Your email</label>
            <InputField className="information-email__input-field profile-input"
              id="email"
              img={mail}
              type="email"
              placeholder="Email"
              disabled={infoAttribute}
              {...userFormik.getFieldProps('email')}
            />
            {userFormik.touched.email && userFormik.errors.email
              ? (<div className="input-error">{userFormik.errors.email}</div>)
              : null}
            {errorEmailState
              ? (<div className="input-error">{errorEmailState}</div>)
              : null}

            {!infoAttribute
              ? (<StyledButton className="profile__button" type="submit">Confirm</StyledButton>)
              : null}
          </div>
        </form>

        <ProfilePass />

      </div>
    </StyledProfile>
  );
};

export default ProfileUser;
