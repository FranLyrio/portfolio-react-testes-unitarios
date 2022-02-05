import { InputHTMLAttributes, ReactNode } from "react"

import * as S from './styles'

export type InputProps = {
  label?: string;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ name, label, icon, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && icon}
        
        <S.Input id={name} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}