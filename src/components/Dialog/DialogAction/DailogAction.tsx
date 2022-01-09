import React from 'react'
import { Actions } from './styles'


interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  component?: any;
}


const DailogAction = ( {children, component, ...rest}: Props ) => {
  return (
    <Actions as={component} {...rest}>
      {children}
    </Actions>
  )
}

export default DailogAction
