import { userConstants } from '../constants'
import { userService } from '../api'

const uploadCAD = (CADData) => {
  const request = (CADData) => {
    return { type: userConstants.CAD_UPLOAD_REQUEST, CADData }
  }
  const success = (CADData) => {
    return { type: userConstants.CAD_UPLOAD_SUCCESS, CADData }
  }
  const failure = (error) => {
    return { type: userConstants.CAD_UPLOAD_FAILURE, error }
  }
  return async (dispatch) => {
    try {
      dispatch(request({ CADData }))
      const response = await userService.uploadCAD(CADData)
      if (response.success === true) {
        dispatch(success(CADData))
      }
    } catch (err) {
      dispatch(failure(err))
    }
  }
}

export const userActions = {
  uploadCAD,
}
