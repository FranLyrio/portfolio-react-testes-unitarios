import { InputHTMLAttributes, ReactNode } from "react"

import * as S from './styles'

export type InputProps = {
  label?: string;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ name, label, icon, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      {!!label && <label htmlFor={name}>{label}</label>}

      {!!icon && icon}
      
      <input id={name} {...props} />
    </S.Wrapper>
  )
}