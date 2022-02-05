import React, { InputHTMLAttributes, ReactNode, useState } from "react"

import * as S from './styles'

export type InputProps = {
  label?: string;
  icon?: ReactNode;
  error?: string;
  onInputChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ 
  name, 
  label, 
  icon, 
  onInputChange, 
  error, 
  ...props
}: InputProps) => {
  const [value, setValue] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    
    setValue(newValue)
    
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && icon}
        
        <S.Input id={name} onChange={onChange} value={value} {...props} />
      </S.InputWrapper>

      {!!error && <p>{error}</p>}
    </S.Wrapper>
  )
}