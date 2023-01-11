/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';

import { patchUserPass } from '../../../api/userApi';
import { useAppSelector } from '../../../store';
import user from '../../../validationSchemes/user';

import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';

import Hide from './images/hide.png';
import type { UserType } from '../../../types';

const ProfilePass: React.FC = () => {
  const [passAttribute, setPassAttribute] = React.useState(true);
  const [errorPasswordState, setErrorPasswordState] = React.useState('');

  const currentUser = useAppSelector((state) => state.user.user) as UserType;

  const passFormik = useFormik({
    initialValues: { password: '', newPassword: '', confPassword: '' },

    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(false);
        await patchUserPass(currentUser.id, values);

        setPassAttribute(true);
      } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 400) {
          setErrorPasswordState(err.response?.data.message);
        } else {
          setErrorPasswordState('');
        }
      }
    },
    validationSchema: user.editUserPass,
  });

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
          img={Hide}
          type="password"
          placeholder="Password"
          readonly={passAttribute}
          {...passFormik.getFieldProps('password')}
        />
        {passFormik.touched && passFormik.errors.password ? (
          <div className="input-error">{passFormik.errors.password}</div>
        ) : null}
        {errorPasswordState ? (
          <div className="input-error">{errorPasswordState}</div>
        ) : null}

        {!passAttribute ? (
          <>
            <InputField className="new-password__input-field profile-input"
              id="newPassword"
              img={Hide}
              type="password"
              placeholder="New password"
              readonly={passAttribute}
              {...passFormik.getFieldProps('newPassword')}
            />
            {passFormik.touched.newPassword && passFormik.errors.newPassword ? (
              <div className="input-error">{passFormik.errors.newPassword}</div>
            ) : null}
            <p className="password__paragraph">Enter your password</p>

            <InputField className="new-password__input-field profile-input"
              id="confPassword"
              img={Hide}
              type="password"
              placeholder="Password replay"
              readonly={passAttribute}
              {...passFormik.getFieldProps('confPassword')}
            />
            {passFormik.touched.confPassword && passFormik.errors.confPassword ? (
              <div className="input-error">{passFormik.errors.confPassword}</div>
            ) : null}
            <p className="new-password__paragraph">Repeat your password without errors</p>

            <Button className="profile__button" type="submit" value="Confirm" />
          </>
        ) : null}

      </div>

    </form>
  );
};

export default ProfilePass;
