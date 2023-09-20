import './Button.css'

interface buttonProps{
  name:string
}

const Button = ({name}:buttonProps) => {
  return (
    <button type='button'>{name} </button>
  )
}

export default Button