import React from 'react'
import {DialogChildren} from './styles'

const DialogContent = ( {children} : {children: React.ReactNode} ) => {
  return (
    <DialogChildren >
      { children}
    </DialogChildren>
  )
}

export default DialogContent;

// <Dialog />
// <DialogActions />
// <DialogContent />
// <DialogContentText />
// <DialogTitle />
// <Slide />