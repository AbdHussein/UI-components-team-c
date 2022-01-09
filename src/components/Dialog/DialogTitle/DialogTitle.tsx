import React from 'react'
import { Title } from './style';

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  component?: any;
}

const DialogTitle = ( {children, component, ...rest}: Props ) => {
  return (
    <Title as={component} {...rest}>
      {children}
    </Title>
  )
}

export default DialogTitle;
