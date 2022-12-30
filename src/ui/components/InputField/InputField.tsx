/* eslint-disable no-console */
import type { FocusEventHandler, FormEventHandler } from 'react';

import StyledInputField from './StyledInputField.styled';

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

const InputField: React.FC<PropsType> = (props) => {
  return (
    <StyledInputField className={props.className}>

      <img className="search__field-icon" src={props.img} alt="search" />

      <input
        className="search__input"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />

      {props.formikError && <div id="feedback">{props.formikError}</div>}
    </StyledInputField>
  );
};

export default InputField;
