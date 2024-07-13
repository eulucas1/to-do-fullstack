import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { value, onChange, ...otherProps } = props;

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      {...otherProps}
      className={styles.input}
    />
  );
});

export default Input;
