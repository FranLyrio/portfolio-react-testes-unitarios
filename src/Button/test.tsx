import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('Should render button component by default', () => {
    render(<Button />)

    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument()
  })
})