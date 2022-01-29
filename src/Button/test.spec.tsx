import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('Should render button component by default', () => {
    render(<Button>Click me</Button>)

    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toHaveStyle({
      height: '3rem',
      padding: '0 1.25rem',
      'background-color': '#820ad1'
    })
  })
})