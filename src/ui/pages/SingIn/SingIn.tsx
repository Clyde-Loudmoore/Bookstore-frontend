/* eslint-disable no-console */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import { setApiToken } from 'api/api';
import { useAppDispatch } from 'store';
import authApi from 'api/authApi';
import sharedValidation from '../../../validation/sharedValidationFields';
import userThunk from '../../../store/Thunk/userThunk';

import StyledSingIn from './SingIn.styled';
import StyledButton from '../../components/Button';
import InputField from '../../components/InputField';

import mailIcon from '../../../assets/icons/mail.png';
import showEye from '../../../assets/icons/showEye.png';
import hideEye from '../../../assets/icons/hideEye.png';
import singInBG from '../../../assets/images/singInBG.png';

const SingInSchema =
  yup.object({
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPassword,
  });

const SingIn: React.FC = () => {
  const [errorEmailState, setErrorEmailState] = React.useState('');
  const [errorPasswordState, setErrorPasswordState] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState('password');
  const [eyeLook, setEyeLook] = React.useState(hideEye);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },

    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(false);
        const user = await authApi.singIn(values);
        dispatch(userThunk.authorization(values));

        setApiToken(user.data.token as string);
        if (location.state && Cookies.get('token')) {
          navigate(location.state.from.pathname);
        }
        navigate('/');
      } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 404) {
          setErrorEmailState(err.response?.data.message);
        } else {
          setErrorEmailState('');
        }
        if (err instanceof AxiosError && err.response?.status === 400) {
          setErrorPasswordState(err.response?.data.message);
        } else {
          setErrorPasswordState('');
        }
      }
    },
    validationSchema: SingInSchema,
  });

  const getPassword = () => {
    if (hidePassword === 'password' && eyeLook === hideEye) {
      setHidePassword('text');
      setEyeLook(showEye);
    } else {
      setHidePassword('password');
      setEyeLook(hideEye);
    }
  };

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
            ? (<div className="input-error">{formik.errors.email}</div>)
            : null}
          {errorEmailState
            ? (<div className="input-error">{errorEmailState}</div>)
            : null}

          <p className="sing-in__paragraph">Enter your email</p>
        </div>

        <div>

          <InputField className="sing-in__input-field"
            id="password"
            img={eyeLook}
            onClick={getPassword}
            type={hidePassword}
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password
            ? (<div className="input-error">{formik.errors.password}</div>)
            : null}
          {errorPasswordState
            ? (<div className="input-error">{errorPasswordState}</div>)
            : null}

          <p className="sing-in__paragraph">Enter your password</p>
        </div>

        <StyledButton className="sing-in__button" type="submit">Sing In</StyledButton>
      </form>

      <img className="singInBG" src={singInBG} alt="Sing-in" />
    </StyledSingIn>
  );
};

export default SingIn;
