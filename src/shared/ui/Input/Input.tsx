import { classNames } from 'shared/lib/classNames/classNames'
import s from './Input.module.scss'
import React, { InputHTMLAttributes } from 'react'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = ({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autoFocus = false,
  ...otherProps
}: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  return (
    <div className={classNames(s.InputWrapper, {}, [className])}>
      <input
        className={s.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        {...otherProps}
        autoFocus={autoFocus}
      />
    </div>
  )
}
