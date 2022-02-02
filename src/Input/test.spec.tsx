import { render, screen } from "@testing-library/react"
import { Input } from "."

describe('<Input />', () => {
  it('should render input component with label', () => {
    render(<Input name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render input component without label', () => {
    render(<Input />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
})