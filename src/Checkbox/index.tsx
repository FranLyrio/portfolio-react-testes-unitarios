import { InputHTMLAttributes, useCallback, useState } from "react"

export type CheckboxProps = {
  label?: string;
  onCheck?: (value: boolean) => void
  isChecked?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ 
  label, 
  name, 
  onCheck, 
  isChecked = false, 
  ...props 
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }
  
  return (
    <>
      <input 
        type="checkbox" 
        id={name}
        onChange={onChange} 
        checked={checked} 
        {...props}
      />

      {!!label && <label htmlFor={name}>{label}</label>} 
    </>
  )
}