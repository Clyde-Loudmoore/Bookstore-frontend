import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import type { UserType } from 'types';
import userApi from '../../../api/userApi';
import { useAppSelector } from '../../../store';
import sharedValidation from '../../../utils/sharedValidationFields';

import Button from '../../components/Button';
import InputField from '../../components/InputField';

import hideEye from '../../../assets/icons/hideEye.png';

const editUserPassSchema =
  yup.object({
    password: sharedValidation.requiredPassword,
    newPassword: sharedValidation.requiredPassword,
    confPassword: sharedValidation.requiredConfNewPassword,
  });

const ProfilePass: React.FC = () => {
  const [passAttribute, setPassAttribute] = React.useState(true);

  const currentUser = useAppSelector((state) => state.user.user) as UserType;

  const passFormik = useFormik({
    enableReinitialize: true,
    initialValues: { password: '', newPassword: '', confPassword: '' },

    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(false);
        await userApi.editUserPass(currentUser.id, values);

        setPassAttribute(true);
      } catch (err) {
        if (err instanceof AxiosError) {
          passFormik.setFieldError('password', err.response?.data.message);
        }
      }
    },
    validationSchema: editUserPassSchema,
  });

  return (
    <form className="form-pass__container" onSubmit={passFormik.handleSubmit}>

      <div className="users-password-data">

        <div className="password__header">
          <h2>Password</h2>
          <Link className="password-edit__link" to="#" onClick={() => setPassAttribute(!passAttribute)}>Change password</Link>
        </div>

        <InputField className="password__input-field profile-input"
          id="password"
          img={hideEye}
          type="password"
          placeholder="Password"
          disabled={passAttribute}
          {...passFormik.getFieldProps('password')}
        >
          <label className="password__label">Your password</label>
        </InputField>
        {passFormik.touched && passFormik.errors.password
          ? (
            <div className="input-error">{passFormik.errors.password}</div>)
          : null}

        {!passAttribute
          ? (
            <>
              <InputField className="new-password__input-field profile-input"
                id="newPassword"
                img={hideEye}
                type="password"
                placeholder="New password"
                disabled={passAttribute}
                {...passFormik.getFieldProps('newPassword')}
              />
              {passFormik.touched.newPassword && passFormik.errors.newPassword
                ? (
                  <div className="input-error">{passFormik.errors.newPassword}</div>)
                : null}
              <p className="password__paragraph">Enter your password</p>

              <InputField className="new-password__input-field profile-input"
                id="confPassword"
                img={hideEye}
                type="password"
                placeholder="Password replay"
                disabled={passAttribute}
                {...passFormik.getFieldProps('confPassword')}
              />
              {passFormik.touched.confPassword && passFormik.errors.confPassword
                ? (
                  <div className="input-error">{passFormik.errors.confPassword}</div>)
                : null}
              <p className="new-password__paragraph">Repeat your password without errors</p>

              <Button className="profile__button" type="submit">Confirm</Button>
            </>
          )
          : null}

      </div>

    </form>
  );
};

export default ProfilePass;
