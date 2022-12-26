/* eslint-disable no-console */
import { Formik } from 'formik';

import LogInWrapper from './LogIn.styled';

import Button from '../../components/button/Button';
import SearchField from '../../components/SearchField/SearchField';

import MailIcon from './images/Mail.png';
import EyeIcon from './images/Hide.png';
import LogInBG from './images/LogInBG.png';

const LogIn = () => {
  return (
    <LogInWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {(formik) => (
          <form className="form__container" onSubmit={formik.handleSubmit}>
            <h1 className="log-in__header">Log In</h1>
            <div>
              <SearchField className="log-in__search-field"
                img={MailIcon}
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />
              <p>Enter your email</p>
            </div>
            <div>
              <SearchField className="log-in__search-field"
                img={EyeIcon} placeholder="Password"
                {...formik.getFieldProps('password')}
              />
              <p>Enter your password</p>
            </div>
            <Button className="log-in__button" type="submit" value="Log In" />
          </form>
        )}
      </Formik>
      <img className="LogInBG" src={LogInBG} alt="log-in" />
    </LogInWrapper>
  );
};

export default LogIn;
