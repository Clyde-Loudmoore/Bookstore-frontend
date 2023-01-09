/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';

import StyledSingUp from './StyledSingUp.styled';

import { useAppDispatch } from '../../../store';
import { setUser } from '../../../store/userSlise';
import { singUp } from '../../../api/authApi';
import user from '../../../validationSchemes/user';

import InputField from '../../components/InputField';
import Button from '../../components/Button';

import MailIcon from './images/mail.png';
import EyeIcon from './images/hide.png';
import SingUpBG from './images/singUpBG.png';

const SingUp: React.FC = () => {
  const [errorEmailState, setErrorEmailState] = useState('');
  const [errorPasswordState, setErrorPasswordState] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '', confPassword: '' },

    onSubmit: async (values) => {
      try {
        const user = await singUp(values);
        dispatch(setUser(user.data.user));
        Cookies.set('token', user.data.token);
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
    validationSchema: user.singUp,
  });

  return (
    <StyledSingUp>

      <form className="form__container" onSubmit={formik.handleSubmit}>

        <h1 className="sing-up__header">Sing Up</h1>

        <div>
          <InputField className="sing-up__input-field"
            img={MailIcon}
            placeholder="Email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="input-error">{formik.errors.email}</div>
          ) : null}
          {errorEmailState ? (
            <div className="input-error">{errorEmailState}</div>
          ) : null}

          <p className="sing-up__paragraph">Enter your email</p>
        </div>

        <div>
          <InputField className="sing-up__input-field"
            img={EyeIcon}
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="input-error">{formik.errors.password}</div>
          ) : null}
          {errorPasswordState ? (
            <div className="input-error">{errorPasswordState}</div>
          ) : null}

          <p className="sing-up__paragraph">Enter your password</p>
        </div>

        <div>
          <InputField className="sing-up__input-field"
            type="password"
            placeholder="Password replay"
            img={EyeIcon}
            {...formik.getFieldProps('confPassword')}
          />
          {formik.touched.confPassword && formik.errors.confPassword ? (
            <div className="input-error">{formik.errors.confPassword}</div>
          ) : null}

          <p className="sing-up__paragraph">Repeat your password without errors</p>
        </div>

        <Button className="sing-up__button" type="submit" value="Sing Up" />
      </form>

      <img className="singUpBG" src={SingUpBG} alt="sing-up" />
    </StyledSingUp>
  );
};

export default SingUp;
