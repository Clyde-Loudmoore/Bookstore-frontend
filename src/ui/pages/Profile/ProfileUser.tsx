/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';

import { patchUser } from '../../../api/userApi';
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

  return (
    <StyledProfile>

      <div className="user-photo__wrapper">
        {/* <img
          src={DefaultProfileImg}
          alt="User photo"
          className="user-photo"
          /> */}

        <div className="user-photo__button">
          <label htmlFor="add-avatar" className="add-avatar">
            <input id="add-avatar" className="user-photo__input" type="image" src={Camera} />
          </label>
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
