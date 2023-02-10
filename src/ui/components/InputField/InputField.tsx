import React from 'react';
import type { FocusEventHandler, FormEventHandler, ReactNode } from 'react';

import StyledInputField from './InputField.styled';
import Button from '../Button';

import showEye from '../../assets/icons/showEye.png';
import closeIcon from '../../assets/icons/close.png';

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
  children?: ReactNode;
  label?: string;
};

const InputField: React.FC<PropsType> = (props) => {
  const [eyeLook, setEyeLook] = React.useState(true);

  return (
    <StyledInputField className={props.className} isError={props.isError ?? false}>

      <img
        className="search__field-icon"
        src={!eyeLook && props.type === 'password' ? showEye : props.img}
        onClick={() => setEyeLook(!eyeLook)}
        alt="+"
      />

      <div className="center-component">
        <label className="label">{props.label}</label>
        <input
          className="search__input"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type={!eyeLook && props.type === 'password' ? 'text' : props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
          autoComplete="off"
        />
      </div>
      <Button className="close-button" type="button">
        <img src={closeIcon} alt="X" />
      </Button>
      {props.helperText && <div>{props.helperText}</div>}
    </StyledInputField>
  );
};

export default InputField;
