import { CustomButton } from './styles';

interface Props{
  title: string,
  onClickHandler?: ()=> void
  fontS?: string;
  padding?: string;
}
const Button = ({title, onClickHandler, fontS, padding}: Props) => {
  return (
      <CustomButton fontS={fontS} padding={padding} onClick={onClickHandler}>
        {title}
      </CustomButton>
  )
}

export default Button;
