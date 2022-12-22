import LogInWrapper from './LogIn.styled';
import Button from '../../components/button/Button';
import SearchField from '../../components/SearchField/SearchField';
import MailIcon from './images/Mail.png';
import EyeIcon from './images/Hide.png';
import LogInBG from './images/LogInBG.png';

const LogIn = () => {
  return (
    <LogInWrapper>
      <form className="form__container">
        <h1 className="sing-in__header">Log In</h1>
        <div>
          <SearchField className="sing-in__search-field" img={MailIcon} placeholder="Email" />
          <p>Enter your email</p>
        </div>
        <div>
          <SearchField className="sing-in__search-field" img={EyeIcon} placeholder="Password" />
          <p>Enter your password</p>
        </div>
        <Button className="log-in__button" value="Log In" />
      </form>
      <img src={LogInBG} alt="syng-in" />
    </LogInWrapper>
  );
};

export default LogIn;
