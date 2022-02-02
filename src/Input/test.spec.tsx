import { render, screen } from "@testing-library/react"
import { Input } from "."

describe('<Input />', () => {
  it('should render input component with label', () => {
    render(<Input name="Label" label="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render input component without label', () => {
    render(<Input />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render input with placeholder', () => {
    render(<Input placeholder="Here comes a placeholder" />)

    expect(screen.getByPlaceholderText(/here comes a placeholder/i)).toBeInTheDocument()
  })
})