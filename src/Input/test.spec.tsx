import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { Input } from "."
import { svg } from "../utils/icon"

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

  it('should render input with border when is focused', () => {
    render(<Input name="input" label="Label" />)

    const input = screen.getByLabelText(/label/i)
    expect(input.parentElement).toBeInTheDocument()
    
    userEvent.tab()
    expect(input).toHaveFocus()

    waitFor(() => {
      expect(input.parentElement).toHaveStyle({
        'border-color': '#820ad1'
      })
    })
  })

  it('should render input with icon', () => {
    render(<Input icon={svg('icon')} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})