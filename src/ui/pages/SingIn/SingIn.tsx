/* eslint-disable no-console */
import Cookies from 'js-cookie';
import { useFormik } from 'formik';

import StyledSingIn from './StyledSingIn.styled';

import { singIn } from '../../../api/authApi';
import { useAppDispatch } from '../../../store';
import { setUser } from '../../../store/userSlise';
import user from '../../../validationSchemes/user';

import Button from '../../components/Button';
import InputField from '../../components/InputField';

import MailIcon from './images/mail.png';
import EyeIcon from './images/hide.png';
import SingInBG from './images/singInBG.png';

const SingIn = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },

    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(false);
        const user = await singIn(values);
        dispatch(setUser(user.data.user));
        Cookies.set('token', user.data.token);
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema: user.singIn,
  });

  return (
    <StyledSingIn>

      <form className="form__container" onSubmit={formik.handleSubmit}>

        <h1 className="sing-in__header">Sing In</h1>

        <div>

          <InputField className="sing-in__input-field"
            img={MailIcon}
            placeholder="Email"
            type="text"
            {...formik.getFieldProps('email')}
          />
          {formik.touched && formik.errors ? (
            <div className="input-error">{formik.errors.email}</div>
          ) : null}

          <p className="sing-in__paragraph">Enter your email</p>
        </div>

        <div>

          <InputField className="sing-in__input-field"
            img={EyeIcon}
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched && formik.errors ? (
            <div className="input-error">{formik.errors.password}</div>
          ) : null}

          <p className="sing-in__paragraph">Enter your password</p>
        </div>

        <Button className="sing-in__button" type="submit" value="Sing In" />
      </form>

      <img className="singInBG" src={SingInBG} alt="Sing-in" />
    </StyledSingIn>
  );
};

export default SingIn;
