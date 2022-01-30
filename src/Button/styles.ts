import styled, { css } from 'styled-components'
import { ButtonProps } from '.';

type WrapperProps = {
	hasIcon: boolean;
}

const wrapperModifiers = {
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  height: 3rem;
  padding: 0 1.25rem;
  background-color: #820ad1;

  ${({ hasIcon, disabled }) => css`
    ${hasIcon && wrapperModifiers.withIcon()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`