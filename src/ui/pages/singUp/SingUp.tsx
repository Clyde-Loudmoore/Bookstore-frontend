import SingUpWrapper from './SingUp.styled';

import SearchField from '../../components/SearchField/SearchField';
import Button from '../../components/button/Button';

import MailIcon from './images/Mail.png';
import EyeIcon from './images/Hide.png';
import SyngUpBG from './images/SingUpBG.png';

const SingUp = () => {
  return (
    <SingUpWrapper>
      <form className="form__container">
        <h1 className="sing-up__header">Sing Up</h1>
        <div>
          <SearchField className="sing-up__search-field" img={MailIcon} placeholder="Email" />
          <p>Enter your email</p>
        </div>
        <div>
          <SearchField className="sing-up__search-field" img={EyeIcon} placeholder="Password" />
          <p>Enter your password</p>
        </div>
        <div>
          <SearchField className="sing-up__search-field" img={EyeIcon} placeholder="Password replay" />
          <p>Repeat your password without errors</p>
        </div>
        <Button className="sing-up__button" value="Sing Up" />
      </form>
      <img className="SyngUpBG" src={SyngUpBG} alt="syng-up" />
    </SingUpWrapper>
  );
};

export default SingUp;
