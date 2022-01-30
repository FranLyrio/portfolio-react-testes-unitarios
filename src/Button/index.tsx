import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, icon, ...props }: ButtonProps) => {
  return (
    <S.Wrapper hasIcon={!!icon} {...props}>
      {!!icon && icon}

      {children}
    </S.Wrapper>
  )
}