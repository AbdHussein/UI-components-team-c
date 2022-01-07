import React, { useState } from 'react'
import Button from '../common/Button/Button'
import Dialog from './Dialog'
import DailogAction from './DialogAction/DailogAction'
import DialogContent from './DialogContent/DialogContent'
import DialogTitle from './DialogTitle/DialogTitle'

const DialogEx = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <>
    <Button title="Open Dialog" onClickHandler={() => setDisplay(true)} />
      <Dialog
          isOpen={display}
          onClose={() => setDisplay(false)}
          fullScreen={false}
          maxWidth="60%"
        >
          <DialogTitle>Chose Color</DialogTitle>
          <DialogContent>
            <h2>adadadad</h2>
            <select>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
            </select>
          </DialogContent>
          <DailogAction>
            <Button title="DISAGREE" onClickHandler={() => setDisplay(false)} />
            <Button title="AGREE" onClickHandler={() => setDisplay(false)} />
          </DailogAction>
        </Dialog>
    </>
  )
}

export default DialogEx
