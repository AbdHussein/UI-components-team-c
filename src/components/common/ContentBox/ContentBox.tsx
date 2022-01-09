import React from 'react'
import { MainBox } from './styles'


interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  component?: any;
}


const ContentBox = ( {children, component, ...rest}: Props ) => {
  return (
    <MainBox as={component} {...rest}>
      {children}
    </MainBox>
  )
}

export default ContentBox;
