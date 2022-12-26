/* eslint-disable no-console */
import { Formik } from 'formik';

import SingUpWrapper from './SingUp.styled';

import SearchField from '../../components/SearchField/SearchField';
import Button from '../../components/button/Button';

import MailIcon from './images/Mail.png';
import EyeIcon from './images/Hide.png';
import SyngUpBG from './images/SingUpBG.png';

const SingUp = () => {
  return (
    <SingUpWrapper>
      <Formik
        initialValues={{ email: '', password: '', confPassword: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {(formik) => (
          <form className="form__container" onSubmit={formik.handleSubmit}>
            <h1 className="sing-up__header">Sing Up</h1>
            <div>
              <SearchField className="sing-up__search-field"
                placeholder="Email"
                type="text"
                img={MailIcon}
                {...formik.getFieldProps('email')}
              />
              <p>Enter your email</p>
            </div>
            <div>
              <SearchField className="sing-up__search-field"
                placeholder="Password"
                type="password"
                img={EyeIcon}
                {...formik.getFieldProps('password')}
              />
              <p>Enter your password</p>
            </div>
            <div>
              <SearchField className="sing-up__search-field"
                type="password"
                placeholder="Password replay"
                img={EyeIcon}
                {...formik.getFieldProps('confPassword')}
              />
              <p>Repeat your password without errors</p>
            </div>
            <Button className="sing-up__button" type="submit" value="Sing Up" />
          </form>

        )}
      </Formik>
      <img className="SyngUpBG" src={SyngUpBG} alt="syng-up" />
    </SingUpWrapper>
  );
};

export default SingUp;
