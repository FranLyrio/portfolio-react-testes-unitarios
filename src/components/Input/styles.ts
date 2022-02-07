import styled from 'styled-components'

export const Wrapper = styled.div``

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  
  border: 0.2rem solid;
  border-color: #ffffff;
  border-radius: 0.2rem;

  padding: 0 0.8rem;

  &:focus-within {
    border-color: #820ad1;
  }
`

export const Input = styled.input`
  background: transparent;
  border: 0;
  outline: none;
`

export const Label = styled.label`
  cursor: pointer;
`