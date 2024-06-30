import { MouseEvent } from 'react'
import './ButtonStyles.css'

type ButtonProps = {
  text?: string
  buttonType?: 'button' | 'submit' | 'reset'
  isDisabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

function Button({
  text = '',
  buttonType = 'button',
  isDisabled = false,
  onClick = () => null,
}: ButtonProps) {
  return (
    <button
      className='button'
      type={buttonType}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
