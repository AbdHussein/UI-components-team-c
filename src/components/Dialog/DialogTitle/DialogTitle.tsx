import React from 'react'
import { Title } from './style'
const DialogTitle = ( {children, styles} : {children: React.ReactNode, styles?: {}} ) => {
  return (
    <Title>
      {children}
    </Title>
  )
}

export default DialogTitle;
