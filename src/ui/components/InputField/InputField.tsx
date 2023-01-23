/* eslint-disable no-console */
import type { FocusEventHandler, FormEventHandler } from 'react';

import StyledInputField from './InputField.styled';

type PropsType = {
  img: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: FormEventHandler;
  onBlur?: FocusEventHandler;
  onClick?: FormEventHandler;
  value?: string;
  isError?: boolean;
  helperText?: string;
  id?: string;
  disabled?: boolean;
  name?: string;
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
