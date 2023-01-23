/* eslint-disable no-console */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import * as yup from 'yup';

import { setApiToken } from 'api/api';
import authApi from 'api/authApi';
import { useAppDispatch } from '../../../store';
import sharedValidation from '../../../validation/sharedValidationFields';
import userThunk from '../../../store/Thunk/userThunk';

import StyledSingUp from './SingUp.styled';
import InputField from '../../components/InputField';
import StyledButton from '../../components/Button';

import mailIcon from '../../../assets/icons/mail.png';
import showEye from '../../../assets/icons/showEye.png';
import hideEye from '../../../assets/icons/hideEye.png';
import singUpBG from '../../../assets/images/singUpBG.png';

const SingUpSchema =
  yup.object({
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPassword,
    confPassword: sharedValidation.requiredConfPassword,
  });

const SingUp: React.FC = () => {
  const [errorEmailState, setErrorEmailState] = React.useState('');
  const [errorPasswordState, setErrorPasswordState] = React.useState('');
  const [hidePassword, sethidePassword] = React.useState('password');
  const [eyeLook, setEyeLook] = React.useState(hideEye);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '', confPassword: '' },

    onSubmit: async (values) => {
      try {
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
    validationSchema: SingUpSchema,
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
            ? (<div className="input-error">{formik.errors.email}</div>)
            : null}
          {errorEmailState
            ? (<div className="input-error">{errorEmailState}</div>)
            : null}

          <p className="sing-up__paragraph">Enter your email</p>
        </div>

        <div>
          <InputField className="sing-up__input-field"
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

          <p className="sing-up__paragraph">Enter your password</p>
        </div>

        <div>
          <InputField className="sing-up__input-field"
            id="confPassword"
            img={eyeLook}
            onClick={getPassword}
            type={hidePassword}
            placeholder="Password replay"
            {...formik.getFieldProps('confPassword')}
          />
          {formik.touched.confPassword && formik.errors.confPassword
            ? (<div className="input-error">{formik.errors.confPassword}</div>)
            : null}

          <p className="sing-up__paragraph">Repeat your password without errors</p>
        </div>

        <StyledButton className="sing-up__button" type="submit">Confirm</StyledButton>
      </form>

      <img className="singUpBG" src={singUpBG} alt="sing-up" />
    </StyledSingUp>
  );
};

export default SingUp;
