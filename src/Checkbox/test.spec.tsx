import { render, screen } from '@testing-library/react'
import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render a chekcbox with label', () => {
    render(<Checkbox label="Checkbox label" name="label" />)

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
  })

  it('should render a chekcbox without label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
})