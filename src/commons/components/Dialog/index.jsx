import {
  Slide,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  Dialog as MuiDialog,
} from '@mui/material'
import { PropTypes } from 'prop-types'
import React, { forwardRef, useState } from 'react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Dialog = ({
  titleActionButton,
  content,
  title,
  disableActionButton,
  onActionButton,
}) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {titleActionButton}
      </Button>
      <MuiDialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            variant="contained"
            onClick={onActionButton}
            disabled={disableActionButton}
          >
            {titleActionButton}
          </Button>
        </DialogActions>
      </MuiDialog>
    </div>
  )
}

Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
  disableActionButton: PropTypes.bool,
  titleActionButton: PropTypes.string,
  onActionButton: PropTypes.func,
}

export default Dialog
