/* eslint-disable no-console */
import type { FocusEventHandler, FormEventHandler } from 'react';

import StyledInputField from './InputField.styled';

export type PropsType = {
  onChange?: FormEventHandler;
  onBlur?: FocusEventHandler;
  onClick?: FormEventHandler;
  className?: string;
  isError?: boolean;
  img?: string;
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  helperText?: string;
};

const InputField: React.FC<PropsType> = (props) => {
  return (
    <StyledInputField className={props.className} isError={props.isError ?? false}>

      <img className="search__field-icon" src={props.img} onClick={props.onClick} alt="+" />

      <input
        className="search__input"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
      />

      {props.helperText && <div>{props.helperText}</div>}
    </StyledInputField>
  );
};

export default InputField;
