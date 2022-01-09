import { HTMLProps } from 'react';
import { CustomButton } from './styles';

interface Props extends HTMLProps<HTMLButtonElement>{
  title: string,
  onClickHandler?: ()=> void
  fontS?: string;
  padding?: string;
  component?: any
}
const Button = ({title, component, onClickHandler, fontS, padding, ...rest}: Props) => {
  return (
      <CustomButton as={component} {...rest} fontS={fontS} padding={padding} onClick={onClickHandler}>
        {title}
      </CustomButton>
  )
}

export default Button;
