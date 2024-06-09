import { SyntheticEvent } from 'react'
import './ButtonStyles.css'

type Props = {
  text?: string
  buttonType?: 'button'
  isDisabled?: boolean
  onClick?: (e: SyntheticEvent) => void
}

function Button({
  text = '',
  buttonType = 'button',
  isDisabled = false,
  onClick = () => null,
}: Props) {
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
