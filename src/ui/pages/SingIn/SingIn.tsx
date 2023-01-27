/* eslint-disable no-console */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import api from 'api/api';
import { useAppDispatch } from 'store';
import authApi from 'api/authApi';
import { userSliceActions } from 'store/slises/userSlise';
import sharedValidation from '../../../utils/sharedValidationFields';

import StyledSingIn from './SingIn.styled';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

import mailIcon from '../../../assets/icons/mail.png';
import hideEye from '../../../assets/icons/hideEye.png';
import singInBG from '../../../assets/images/singInBG.png';

const SingInSchema =
  yup.object({
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPassword,
  });

const SingIn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },

    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(false);
        const user = await authApi.singIn(values);
        dispatch(userSliceActions.setUser(user.data.user));

        api.setApiToken(user.data.token as string);
        if (location.state && Cookies.get('token')) {
          navigate(location.state.from.pathname);
        }
        navigate('/');
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data.error.path === 'email') {
          formik.setFieldError('email', err.response?.data.message);
        }
        if (err instanceof AxiosError && err.response?.data.error.path === 'password') {
          formik.setFieldError('password', err.response?.data.message);
        }
      }
    },
    validationSchema: SingInSchema,
  });

  return (
    <StyledSingIn>

      <form className="form__container" onSubmit={formik.handleSubmit}>

        <h1 className="sing-in__header">Sing In</h1>

        <div>

          <InputField className="sing-in__input-field"
            id="email"
            img={mailIcon}
            type="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email
            ? (
              <div className="input-error">{formik.errors.email}</div>
            )
            : null}

          <p className="sing-in__paragraph">Enter your email</p>
        </div>

        <div>

          <InputField className="sing-in__input-field"
            id="password"
            img={hideEye}
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password
            ? (
              <div className="input-error">{formik.errors.password}</div>
            )
            : null}

          <p className="sing-in__paragraph">Enter your password</p>
        </div>

        <Button className="sing-in__button" type="submit">Sing In</Button>
      </form>

      <img className="singInBG" src={singInBG} alt="Sing-in" />
    </StyledSingIn>
  );
};

export default SingIn;
