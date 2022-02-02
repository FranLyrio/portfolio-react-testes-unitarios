import { InputHTMLAttributes } from "react"

export type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ name, label, ...props }: InputProps) => {
  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}
      
      <input id={name} {...props} />
    </>
  )
}