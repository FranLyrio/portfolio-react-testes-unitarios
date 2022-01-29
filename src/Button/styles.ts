import styled, { css } from 'styled-components'

type WrapperProps = {
	hasIcon: boolean;
};

const wrapperModifiers = {
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  height: 3rem;
  padding: 0 1.25rem;
  background-color: #820ad1;

  ${({ hasIcon }) => css`
    ${hasIcon && wrapperModifiers.withIcon()}
  `}
`