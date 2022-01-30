import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, icon }: ButtonProps) => {
  return (
    <S.Wrapper hasIcon={!!icon}>
      {!!icon && icon}

      {children}
    </S.Wrapper>
  )
}