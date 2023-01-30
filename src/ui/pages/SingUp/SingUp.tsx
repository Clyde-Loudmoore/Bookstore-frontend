/* eslint-disable no-console */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import api from 'api/api';
import authApi from 'api/authApi';
import { userSliceActions } from 'store/slises/userSlise';
import { useAppDispatch } from '../../../store';
import sharedValidation from '../../../utils/sharedValidationFields';

import StyledSingUp from './SingUp.styled';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import mailIcon from '../../../assets/icons/mail.png';
import hideEye from '../../../assets/icons/hideEye.png';
import singUpBG from '../../../assets/images/singUpBG.png';

const SingUpSchema =
  yup.object({
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPassword,
    confPassword: sharedValidation.requiredConfPassword,
  });

const SingUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '', confPassword: '' },

    onSubmit: async (values) => {
      try {
        const user = await authApi.singUp({ email: values.email, password: values.password });
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
      }
    },
    validationSchema: SingUpSchema,
  });

  return (
    <StyledSingUp>

      <form className="form__container" onSubmit={formik.handleSubmit}>

        <h1 className="sing-up__header">Sing Up</h1>

        <div>
          <InputField className="sing-up__input-field"
            id="email"
            img={mailIcon}
            placeholder="Email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email
            ? (
              <div className="input-error">{formik.errors.email}</div>
            )
            : null}

          <p className="sing-up__paragraph">Enter your email</p>
        </div>

        <div>
          <InputField className="sing-up__input-field"
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

          <p className="sing-up__paragraph">Enter your password</p>
        </div>

        <div>
          <InputField className="sing-up__input-field"
            id="confPassword"
            img={hideEye}
            type="password"
            placeholder="Password replay"
            {...formik.getFieldProps('confPassword')}
          />
          {formik.touched.confPassword && formik.errors.confPassword
            ? (
              <div className="input-error">{formik.errors.confPassword}</div>
            )
            : null}

          <p className="sing-up__paragraph">Repeat your password without errors</p>
        </div>

        <Button className="sing-up__button" type="submit">Confirm</Button>
      </form>

      <img className="singUpBG" src={singUpBG} alt="Sing Up" />
    </StyledSingUp>
  );
};

export default SingUp;
