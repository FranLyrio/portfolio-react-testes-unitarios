import { render, screen } from '@testing-library/react'

import { Button } from '.'
import { svg } from '../../utils/icon'

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

  it('should render a button with icon', () => {
    render(<Button icon={svg('icon')}>Click me</Button>)

    expect(screen.getByText(/click me/i)).toHaveStyle({
      display: 'inline-flex',
      'align-items': 'center',
      'justify-content': 'space-between'
    })

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Click me</Button>)


    expect(screen.getByRole('button', { name: /click me/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})