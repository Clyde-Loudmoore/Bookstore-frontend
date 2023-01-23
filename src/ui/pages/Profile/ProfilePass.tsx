/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import userApi from '../../../api/userApi';
import { useAppSelector } from '../../../store';
import type { UserType } from '../../../types';
import sharedValidation from '../../../validationSchemes/sharedValidationFields';

import StyledButton from '../../components/Button';
import InputField from '../../components/InputField';

import showEye from '../../../assets/icons/showEye.png';
import hideEye from '../../../assets/icons/hideEye.png';

const editUserPassSchema =
  yup.object({
    password: sharedValidation.requiredPassword,
    newPassword: sharedValidation.requiredPassword,
    confPassword: sharedValidation.requiredConfNewPassword,
  });

const ProfilePass: React.FC = () => {
  const [passAttribute, setPassAttribute] = React.useState(true);
  const [errorPasswordState, setErrorPasswordState] = React.useState('');
  const [hidePassword, sethidePassword] = React.useState('password');
  const [eyeLook, setEyeLook] = React.useState(hideEye);

  const currentUser = useAppSelector((state) => state.user.user) as UserType;

  const passFormik = useFormik({
    enableReinitialize: true,
    initialValues: { password: '', newPassword: '', confPassword: '' },

    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(false);
        await userApi.patchUserPass(currentUser.id, values);

        setPassAttribute(true);
      } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 400) {
          setErrorPasswordState(err.response?.data.message);
        } else {
          setErrorPasswordState('');
        }
      }
    },
    validationSchema: editUserPassSchema,
  });

  const getPassword = () => {
    if (hidePassword === 'password' && eyeLook === hideEye) {
      sethidePassword('text');
      setEyeLook(showEye);
    } else {
      sethidePassword('password');
      setEyeLook(hideEye);
    }
  };

  return (
    <form className="form-pass__container" onSubmit={passFormik.handleSubmit}>

      <div className="users-password-data">

        <div className="password__header">
          <h2>Password</h2>
          <Link className="password-edit__link" to="#" onClick={() => setPassAttribute(false)}>Change password</Link>
        </div>

        <label className="password__label">Your password</label>
        <InputField className="password__input-field profile-input"
          id="password"
          img={eyeLook}
          onClick={getPassword}
          type={hidePassword}
          placeholder="Password"
          disabled={passAttribute}
          {...passFormik.getFieldProps('password')}
        />
        {passFormik.touched && passFormik.errors.password
          ? (<div className="input-error">{passFormik.errors.password}</div>)
          : null}
        {errorPasswordState
          ? (<div className="input-error">{errorPasswordState}</div>)
          : null}

        {!passAttribute
          ? (<>
            <InputField className="new-password__input-field profile-input"
              id="newPassword"
              img={eyeLook}
              onClick={getPassword}
              type={hidePassword}
              placeholder="New password"
              disabled={passAttribute}
              {...passFormik.getFieldProps('newPassword')}
            />
            {passFormik.touched.newPassword && passFormik.errors.newPassword
              ? (<div className="input-error">{passFormik.errors.newPassword}</div>)
              : null}
            <p className="password__paragraph">Enter your password</p>

            <InputField className="new-password__input-field profile-input"
              id="confPassword"
              img={eyeLook}
              onClick={getPassword}
              type={hidePassword}
              placeholder="Password replay"
              disabled={passAttribute}
              {...passFormik.getFieldProps('confPassword')}
            />
            {passFormik.touched.confPassword && passFormik.errors.confPassword
              ? (<div className="input-error">{passFormik.errors.confPassword}</div>)
              : null}
            <p className="new-password__paragraph">Repeat your password without errors</p>

            <StyledButton className="profile__button" type="submit">Confirm</StyledButton>
             </>)
          : null}

      </div>

    </form>
  );
};

export default ProfilePass;
