/* eslint-disable no-console */
import Cookies from 'js-cookie';
import { useFormik } from 'formik';

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

const SingUp = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '', confPassword: '' },

    onSubmit: async (values) => {
      try {
        const user = await singUp(values);
        dispatch(setUser(user.data.newUser));
        Cookies.set('token', user.data.token);
      } catch (err) {
        console.log(err);
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
            type="text"
            {...formik.getFieldProps('email')}
          />
          {formik.touched && formik.errors ? (
            <div className="input-error">{formik.errors.email}</div>
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
          {formik.touched && formik.errors ? (
            <div className="input-error">{formik.errors.password}</div>
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
          {formik.touched && formik.errors ? (
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
