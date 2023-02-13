import { Link } from 'react-router-dom';

import Button from 'ui/components/Button';
import StyledEmptyCart from './EmptyComponent.styled';

import bookImg from '../../assets/images/bookBG3.png';

type PropsType = {
  header: string;
  text: string;
  textButton: string;
};

const EmptyComponent: React.FC<PropsType> = (props) => {
  return (
    <StyledEmptyCart>
      <img className="empty-component__image" src={bookImg} alt="Books" />
      <div className="empty-component">

        <h1 className="component-header">{props.header}</h1>
        <p className="component-text">{props.text}</p>
        <Link to="/catalog">
          <Button className="component-button">
            {props.textButton}
          </Button>
        </Link>
      </div>

    </StyledEmptyCart>
  );
};

export default EmptyComponent;
