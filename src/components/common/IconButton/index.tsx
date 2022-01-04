import React from 'react'
import { IconButton } from './styles';

const Index = ({children}: {children: React.ReactNode}) => {
  return (
      <IconButton>
        {children}
      </IconButton>
  )
}

export default Index;
