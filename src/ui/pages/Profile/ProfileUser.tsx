/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';

import { patchUser, postAvatar } from '../../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setUser } from '../../../store/userSlise';
import user from '../../../validationSchemes/user';

import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import ProfilePass from './ProfilePass';

import StyledProfile from './StyledProfile.styled';

import Camera from './images/camera.png';
import UserIcon from './images/user-icon.png';
import Mail from './images/mail.png';

import type { UserType } from '../../../types';

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
          const user = await postAvatar(fileReader.result);
          dispatch(setUser(user.data.updatedUser));
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
        const user = await patchUser(currentUser.id, values);
        dispatch(setUser(user.data.updatedUser));
        setInfoAttribute(true);
      } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 404) {
          setErrorEmailState(err.response?.data.message);
        } else {
          setErrorEmailState('');
        }
      }
    },
    validationSchema: user.editUser,
  });

  const avatar = currentUser.avatar;

  return (
    <StyledProfile>

      <div className="user-photo__wrapper">
        <img className="user-avatar" src={avatar} />

        <div className="user-photo__button">
          <label htmlFor="add-avatar" className="add-avatar">
            <img src={Camera} alt="+" />
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
              img={UserIcon}
              type="text"
              placeholder="Your full name"
              readonly={infoAttribute}
              {...userFormik.getFieldProps('fullName')}
            />
            {userFormik.touched.fullName && userFormik.errors.fullName ? (
              <div className="input-error">{userFormik.errors.fullName}</div>
            ) : null}

            <label className="user-info__label email__label">Your email</label>
            <InputField className="information-email__input-field profile-input"
              id="email"
              img={Mail}
              type="email"
              placeholder="Email"
              readonly={infoAttribute}
              {...userFormik.getFieldProps('email')}
            />
            {userFormik.touched.email && userFormik.errors.email ? (
              <div className="input-error">{userFormik.errors.email}</div>
            ) : null}
            {errorEmailState ? (
              <div className="input-error">{errorEmailState}</div>
            ) : null}

            {!infoAttribute ? (
              <Button className="profile__button" type="submit" value="Confirm" />
            ) : null}
          </div>
        </form>

        <ProfilePass />

      </div>
    </StyledProfile>
  );
};

export default ProfileUser;
