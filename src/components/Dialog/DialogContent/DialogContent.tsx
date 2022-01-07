import React from 'react'
import {DialogChildren} from './styles'


interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  component?: any;
}

const DialogContent = ( {children, component, ...rest}: Props ) => {
  return (
    <DialogChildren as={component} {...rest}>
      { children}
    </DialogChildren>
  )
}

export default DialogContent;
