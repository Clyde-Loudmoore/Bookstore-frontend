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
  id?: string;
  readonly?: boolean;
};

const InputField: React.FC<PropsType> = (props) => {
  return (
    <StyledInputField className={props.className}>
      {/* {props.defaultValue} */}

      <img className="search__field-icon" src={props.img} alt="search" />

      <input
        className="search__input"
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        placeholder={props.placeholder}
        readOnly={props.readonly}
        value={props.value}
      />

      {props.formikError && <div id="feedback">{props.formikError}</div>}
    </StyledInputField>
  );
};

export default InputField;
