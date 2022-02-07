import { render, screen, waitFor } from '@testing-library/react'
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

  it('should change its value by clicking on label', () => {
    const onCheck = jest.fn()

    render(<Checkbox label="checkbox label" name="label" onCheck={onCheck} />)

    userEvent.click(screen.getByLabelText(/checkbox label/i))
    expect(onCheck).toBeCalledTimes(1)
  })

  it('should call onCheck function and change its value for "false"', () => {
    const onChange = jest.fn()

    render(<Checkbox onCheck={onChange} isChecked />)

    waitFor(() => {
      userEvent.click(screen.getByRole('checkbox'))
      expect(onChange).toBeCalledTimes(1)
    })

    expect(onChange).toBeCalledWith(false)
  })

  it('should call onCheck function and change its value for "true"', () => {
    const onChange = jest.fn()

    render(<Checkbox onCheck={onChange} />)

    waitFor(() => {
      userEvent.click(screen.getByRole('checkbox'))
      expect(onChange).toBeCalledTimes(1)
    })

    expect(onChange).toBeCalledWith(true)
  })
})