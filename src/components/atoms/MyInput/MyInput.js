import React from 'react'
import {Input, withStyles} from '@material-ui/core'
import styles from './styles'

function MyInput({
  id,
  placeholder,
  type,
  value,
  onChange,
  multiline,
  classes
}) {
  return (
    <Input
        id={id}
        aria-describedby="my-helper-text"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disableUnderline
        fullWidth
        multiline={multiline || false}
        minRows={multiline ? 2 : 0}
        classes={{
            input: classes.input,
            focused: classes.focused
        }}
    /> 
  )
}

export default withStyles(styles)(MyInput)
