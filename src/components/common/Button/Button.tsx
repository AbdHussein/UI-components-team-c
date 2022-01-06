import { CustomButton } from './styles';

interface Props{
  title: string,
  onClickHandler?: ()=> void
  
}
const Button = ({title, onClickHandler}: Props) => {
  return (
      <CustomButton onClick={onClickHandler}>
        {title}
      </CustomButton>
  )
}

export default Button;
