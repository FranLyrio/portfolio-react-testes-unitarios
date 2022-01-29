import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = ({ children, icon }: ButtonProps) => {
  return (
    <S.Wrapper hasIcon={!!icon}>
      {!!icon && icon}

      {children}
    </S.Wrapper>
  )
}