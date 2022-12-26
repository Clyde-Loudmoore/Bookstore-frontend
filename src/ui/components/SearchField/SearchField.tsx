/* eslint-disable no-console */
import type { FocusEventHandler, FormEventHandler } from 'react';
import SearchFieldWrapper from './SearchFieldWrapper.styled';

type PropsType = {
  img: string;
  placeholder: string;
  type?: string;
  className?: string;
  onChange?: FormEventHandler;
  onBlur?: FocusEventHandler;
  value?: string;
  formikError?: string;
  formikTouched?: boolean;
  name?: string;
};

const SearchField: React.FC<PropsType> = (props) => {
  return (
    <SearchFieldWrapper className={props.className}>
      <div className="search__field-icon">
        <img src={props.img} alt="search" />
      </div>
      <div className="search__input-wrapper">
        <input

          className="search__input"
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
      {props.formikError && <div id="feedback">{props.formikError}</div>}
    </SearchFieldWrapper>
  );
};

export default SearchField;
