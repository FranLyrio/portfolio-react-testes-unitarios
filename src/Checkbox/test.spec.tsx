import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('should change its value when the event was dispatch', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should call onCheck function when value its changes', () => {
    const onChange = jest.fn()

    render(<Checkbox onChange={onChange} />)

    userEvent.click(screen.getByRole('checkbox'))
    expect(onChange).toBeCalledTimes(1)
  })
})