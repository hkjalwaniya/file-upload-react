import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import styles from './styles'

function MyDropDown({
  handleSelection,
  inputLabel,
  selectOptions,
  value,
  dropDownType,
  classes,
  isRequired
}) {
  return (
    <div className={classes.dropDown}>
    <InputLabel id={dropDownType} classes={{animated: false}} htmlFor={`select-${dropDownType}`}>{inputLabel}</InputLabel>
    <FormControl
      variant="outlined"
      className={classes.formControl}
    >
      <Select
        labelId={dropDownType}
        id={`select-${dropDownType}`}
        value={value || ''}
        onChange={(e) => {
          handleSelection(e.target.value)
        }}
        classes={{
            outlined: classes.outlined,
        }}
        fullWidth
      >
        {selectOptions &&
          selectOptions.map((option) => {
            return (
              <MenuItem key={`item-${option.id}`} value={option.value}>
                {option.value}
              </MenuItem>
            )
          })}
      </Select>
    </FormControl>
    </div>
  )
}

export default withStyles(styles)(MyDropDown)
