import React from 'react'
import {InputLabel, withStyles} from '@material-ui/core'
import MyInput from '../../atoms/MyInput'
import styles from './styles'

function MyInputField({
  id,
  label,
  labelNote,
  placeholder,
  value,
  type,
  handleChange,
  multiline,
  classes
}) {
  return (
    <div className={classes.inputField}>
    <InputLabel htmlFor={id} classes={{root: classes.formLabel}}>{label}{labelNote && <span className={classes.labelNote}>{`(${labelNote})`}</span>}</InputLabel>
    <MyInput id={id} placeholder={placeholder} type={type} value={value} onChange={handleChange} multiline={multiline} /> 
    </div>
  )
}

export default withStyles(styles)(MyInputField)
