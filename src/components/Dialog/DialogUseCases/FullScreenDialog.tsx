import React, { useState } from 'react'
import Button from '../../common/Button/Button'
import Dialog from '../Dialog'
import DailogAction from '../DialogAction/DailogAction'
import DialogContent from '../DialogContent/DialogContent'
import DialogTitle from '../DialogTitle/DialogTitle'

const DialogEx = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
    <Button title="Open Dialog" onClickHandler={() => setDisplay(true)} />
      <Dialog
          isOpen={display}
          onClose={() => setDisplay(false)}
          fullScreen={true}
        >
          <DialogTitle>Full screen Mode</DialogTitle>
          <DialogContent>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, corporis. Quod aut ullam, doloremque at officiis optio ab! Sapiente et velit distinctio nobis ut quisquam dolore dignissimos rerum exercitationem obcaecati.
             </p>
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
