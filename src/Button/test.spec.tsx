import { render, screen } from '@testing-library/react'

import { Button } from '.'

const svg = () => {
  return (
    <svg
      data-testid="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.66667 11.3333V9.33333H2V6.66667H6.66667V4.66667L10 8L6.66667 11.3333ZM6.66667 1.33333H12.6667C13.0203 1.33333 13.3594 1.47381 13.6095 1.72386C13.8595 1.97391 14 2.31304 14 2.66667V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H6.66667C6.31305 14.6667 5.97391 14.5262 5.72386 14.2761C5.47381 14.0261 5.33333 13.687 5.33333 13.3333V12H6.66667V13.3333H12.6667V2.66667H6.66667V4H5.33333V2.66667C5.33333 2.31304 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31305 1.33333 6.66667 1.33333Z" />
    </svg>
  );
};

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
    render(<Button icon={svg()}>Click me</Button>)

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