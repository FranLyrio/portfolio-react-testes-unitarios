import { InputHTMLAttributes } from "react"

export type CheckboxProps = {
  label?: string;
  onChange?: () => void
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ label, name, onChange, ...props }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" id={name} onChange={onChange} {...props} />

      {!!label && <label htmlFor={name}>{label}</label>} 
    </>
  )
}