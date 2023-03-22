import { userConstants } from '../constants'

const initialState = {
  user: {
    CADData: {}
  },
  error: ''
}

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.CAD_UPLOAD_REQUEST:
      return {
        ...state,
        user: {
            ...user,
            CADData: action.CADData
        }
      }
    case userConstants.CAD_UPLOAD_SUCCESS:
      return {
        ...state,
        user: {
            ...user,
            CADData: action.CADData
        },
        error: null
      }
    case userConstants.CAD_UPLOAD_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
